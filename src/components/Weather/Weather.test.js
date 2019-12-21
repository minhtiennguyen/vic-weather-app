import React from 'react';
import { shallow } from 'enzyme';
import { Weather } from './index';

// import configureMockStore from 'redux-mock-store';

describe('Weather', () => {
  const props = {
    cities: [
      { id: 123456, name: 'Test 1', selected: false },
      { id: 789101, name: 'Test 2', selected: false },
    ],
    isLoaded: true,
    hasError: false,
    fetchWeather: () => jest.fn(),
  };

  let wrapper = shallow(<Weather {...props} />);

  it('should render', () => {
    expect(wrapper.find('.cities').length).toBe(1);
  });

  it('should render loading ', () => {
    let props = {
      cities: [
        { id: 123456, name: 'Test 1', selected: false },
        { id: 789101, name: 'Test 2', selected: false },
      ],
      isLoaded: false,
      hasError: false,
      fetchWeather: () => jest.fn(),
    };
    wrapper = shallow(<Weather {...props} />);
    expect(wrapper.find('.spinner').length).toBe(1);
  });

  it('should render error', () => {
    let props = {
      cities: [
        { id: 123456, name: 'Test 1', selected: false },
        { id: 789101, name: 'Test 2', selected: false },
      ],
      isLoaded: false,
      hasError: true,
      fetchWeather: () => jest.fn(),
    };
    wrapper = shallow(<Weather {...props} />);
    expect(wrapper.find('.error').length).toBe(1);
  });
});
