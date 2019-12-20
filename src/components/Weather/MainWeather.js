import React from 'react';
import config from '../../config';

const MainWeather = ({ city }) => (
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
      <span className='main-city__temp'>{city.main.temp} &deg;C</span>
    </div>

    <div className='main-city__conditions'>
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
          {city.main.feels_like} &deg;C
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

const convertUnixTimestamp = timestamp => {
  const d = new Date(timestamp * 1000);
  const hours = ('0' + d.getHours()).slice(-2);
  const minutes = ('0' + d.getMinutes()).slice(-2);
  return `${hours}:${minutes} ${hours > 12 ? 'PM' : 'AM'}`;
};

export default MainWeather;
