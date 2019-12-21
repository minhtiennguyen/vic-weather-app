import React from 'react';
import { shallow } from 'enzyme';
import WeatherItem from './WeatherItem';

describe('WeatherItem', () => {
  let selectCityMock = jest.fn();
  let wrapper = shallow(
    <WeatherItem city={{ id: 1, name: 'test' }} selectCity={selectCityMock} />
  );

  it('should render', () => {
    expect(wrapper.find('.weather-item').length).toBe(1);
  });

  it('should call selectCity() when click to choose city', () => {
    wrapper
      .find('.weather-item')
      .first()
      .simulate('click');
    expect(selectCityMock).toHaveBeenCalled();
  });
});
