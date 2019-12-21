import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './Weather.css';

import { fetchWeather } from '../../actions/weather';
import WeatherItem from './WeatherItem';
import MainWeather from './MainWeather';

class Weather extends Component {
  state = {
    city: {
      id: 2158177,
      name: 'Melbourne',
    },
    unit: 'metric',
  };

  componentDidMount() {
    const { city, unit } = this.state;
    this.props.fetchWeather(city.id, unit);
  }

  selectCity = id => {
    const { unit } = this.state;
    console.log(id);
    this.props.fetchWeather(id, unit);
  };

  render() {
    const { cities, isLoaded, hasError } = this.props;
    const selectedIndex = cities.findIndex(city => city.selected === true);

    return (
      <Fragment>
        {isLoaded ? <MainWeather city={cities[selectedIndex]} /> : <div className='spinner'>loading...</div>}
        <div className='cities'>
          {(cities || []).map(city => (
            <WeatherItem
              key={city.id}
              city={city}
              selectCity={this.selectCity}
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
  hasError: state.weather.hasError
});

const mapDispatchToProps = {
  fetchWeather
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

export { WeatherItem, MainWeather };
