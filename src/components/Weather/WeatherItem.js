import React from 'react';

const WeatherItem = ({ city, selectCity }) => {
  return (
    <div className='weather-item' onClick={() => selectCity(city.id)}>
      <p className='weather-city__name'>{city.name}</p>
    </div>
  );
};

export default WeatherItem;
