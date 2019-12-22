import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchWeather } from '../../actions/weather';
import WeatherItem from './WeatherItem';
import MainWeather from './MainWeather';
import { TemparatureInput } from '../Input';

class Weather extends Component {
  state = {
    city: {
      id: 2158177,
    },
    unit: 'metric',
  };

  componentDidMount() {
    const { city } = this.state;
    this.props.fetchWeather(city.id);
  }

  selectCity = id => {
    this.props.fetchWeather(id);
    this.setState({ city: { id } });
  };

  changeTempUnit = unit => {
    this.setState({ unit });
  };

  render() {
    const { cities, isLoaded, hasError } = this.props;
    const { unit } = this.state;
    const selectedIndex = cities.findIndex(city => city.selected === true);
    return (
      <Fragment>
        {isLoaded ? (
          <MainWeather city={cities[selectedIndex]} unit={unit} />
        ) : (
          <div className='spinner'>loading...</div>
        )}

        <TemparatureInput changeUnit={this.changeTempUnit} />
        <div className='cities'>
          {(cities || []).map(city => (
            <WeatherItem
              key={city.id}
              city={city}
              selectCity={this.selectCity}
              isMain={city.id === this.state.city.id}
            />
          ))}
        </div>
        {hasError && <div className='error'>Something went wrong</div>}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cities: state.weather.list,
  isLoaded: state.weather.isLoaded,
  hasError: state.weather.hasError,
});

const mapDispatchToProps = {
  fetchWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

export { WeatherItem, MainWeather, Weather };
