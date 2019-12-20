import React from 'react';

import Header from './Header';
import WeatherDetails from './WeatherDetails';
import './App.css';
import data from '../assets/data.json';

const App = () => (
  <div className='app'>
    <Header />
    <WeatherDetails data={data} />
  </div>
);

export default App;
