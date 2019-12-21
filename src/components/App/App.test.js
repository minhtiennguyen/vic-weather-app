import React from 'react';
import { shallow } from 'enzyme';
import Weather from '../Weather';
import App from './index';

describe('App', () => {
  let wrapper = shallow(<App />);

  it('should render', () => {
    expect(wrapper.find(Weather).length).toBe(1);
  });
});
