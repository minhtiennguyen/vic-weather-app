import React from 'react';
import { shallow } from 'enzyme';
import WeatherItem from './WeatherItem';

describe('CheckboxWithLabel changes the text after click', () => {
  let wrapper = shallow(
    <WeatherItem city={{ id: 1, name: 'test' }} selectCity={() => {}} />
  );

  it('should render', () => {
    expect(wrapper.find('.weather-item').length).toBe(1);
  });
});
