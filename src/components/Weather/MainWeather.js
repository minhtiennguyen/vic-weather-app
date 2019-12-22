import React from 'react';
import config from '../../config';
import { convertUnixTimestamp, convertTemp, getCurentTime } from '../../utils';

const MainWeather = ({ city, unit }) => (
  <div className='main-city'>
    <div className='main-city_header'>
      <h1 className='main-city__name'>{city.name}</h1>
      <span className='main-city__icon'>
        <img
          src={`${config.imgUrl}/${city.weather[0].icon}@2x.png`}
          alt='weather-icon'
        />
      </span>
      <span className='main-city__desc'>{city.weather[0].description}</span>
      <span className='main-city__temp'>{convertTemp(unit, city.main.temp)}&deg;</span>
    </div>

    <div className='main-city__conditions'>
    <div className='main-city__info main-city__info--no-border'>
        <div>
          <span className='heading'>Local Time</span> <br />{' '}
          {getCurentTime()}
        </div>

      </div>
    <div className='main-city__info'>
        <div>
          <span className='heading'>Min</span> <br />{' '}
          {convertTemp(unit, city.main.temp_min)}&deg;
        </div>
        <div>
          <span className='heading'>Max</span> <br />{' '}
          {convertTemp(unit, city.main.temp_max)}&deg;
        </div>
      </div>
      <div className='main-city__info'>
        <div>
          <span className='heading'>Sunrise</span> <br />{' '}
          {convertUnixTimestamp(city.sys.sunrise)}
        </div>
        <div>
          <span className='heading'>Sunset</span> <br />{' '}
          {convertUnixTimestamp(city.sys.sunset)}
        </div>
      </div>
      <div className='main-city__info'>
        <div>
          <span className='heading'>Feels like</span> <br />{' '}
          {convertTemp(unit, city.main.feels_like)}&deg;
        </div>
        <div>
          <span className='heading'>Humidity</span> <br /> {city.main.humidity}%
        </div>
      </div>
      <div className='main-city__info'>
        <div>
          <span className='heading'>Wind</span> <br /> w {city.wind.speed} km/h
        </div>
        <div>
          <span className='heading'>Wind Direction</span> <br /> {city.wind.deg}
          &deg;
        </div>
      </div>
      <div className='main-city__info'>
        <div>
          <span className='heading'>Pressure</span> <br /> {city.main.pressure}{' '}
          hPa
        </div>
        <div>
          <span className='heading'>Visibility</span> <br />{' '}
          {city.visibility / 1000} km
        </div>
      </div>
    </div>
  </div>
);

export default MainWeather;
