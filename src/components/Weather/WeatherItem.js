import React from 'react';

const WeatherItem = ({ city, selectCity, isMain }) => {
  return (
    <div className={`weather-item ${isMain && 'weather-item--selected'}`} onClick={() => selectCity(city.id)}>
      <p className='weather-city__name'>{city.name}</p>
    </div>
  );
};

export default WeatherItem;
