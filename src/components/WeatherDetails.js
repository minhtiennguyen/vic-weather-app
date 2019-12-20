import React from 'react';

const WeatherDetails = ({ data }) => {
  console.log(data);
  return (
    <div className='weather-details'>
      Main name of city current temp conditions
    </div>
  );
};

export default WeatherDetails;
