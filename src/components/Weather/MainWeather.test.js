import React from 'react';
import { shallow } from 'enzyme';
import MainWeather from './MainWeather';

describe('MainWeather', () => {
  let cityProps = {
    coord: {
      lon: 144.96,
      lat: -37.81,
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03d',
      },
    ],
    base: 'stations',
    main: {
      temp: 19.34,
      feels_like: 12.19,
      temp_min: 17.22,
      temp_max: 21.67,
      pressure: 1019,
      humidity: 55,
    },
    visibility: 10000,
    wind: {
      speed: 10.3,
      deg: 170,
    },
    clouds: {
      all: 40,
    },
    dt: 1576905831,
    sys: {
      type: 1,
      id: 9548,
      country: 'AU',
      sunrise: 1576868061,
      sunset: 1576921280,
    },
    timezone: 39600,
    id: 2158177,
    name: 'Melbourne',
    cod: 200,
  };

  let wrapper = shallow(<MainWeather city={cityProps} />);

  it('should render', () => {
    expect(wrapper.find('.main-city').length).toBe(1);
  });
});
