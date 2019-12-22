import React from 'react';
import { shallow } from 'enzyme';
import TemparatureInput from './TemparatureInput';

describe('TemparatureInput', () => {
  let wrapper = shallow(<TemparatureInput changeUnit={() => jest.fn()} />);

  it('should render', () => {
    expect(wrapper.find('form').length).toBe(1);
  });

  it('should call selectCity() when click to choose city', () => {
    wrapper.find('input[value="imperial"]').simulate('change', { target: { checked: true } });
    expect(wrapper.find('input[value="imperial"]').prop('checked')).toBe(true);
  });
});
