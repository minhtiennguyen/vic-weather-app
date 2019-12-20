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
    this.props.fetchWeather(id, unit);
  };

  render() {
    const { cities, isLoaded, current } = this.props;
    return (
      <Fragment>
        {isLoaded ?   <MainWeather city={current} /> : <div className='spinner'>loading...</div>}

        <div className='cities'>
          {(cities || []).map(city => (
            <WeatherItem
              key={city.id}
              city={city}
              selectCity={this.selectCity}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  current: state.weather.current,
  cities: state.weather.list,
  isLoaded: state.weather.isLoaded,
});

const mapDispatchToProps = {
  fetchWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

export { WeatherItem, MainWeather };
