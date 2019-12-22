import React, { Component } from 'react';

class TemparatureInput extends Component {
  state = {
    checked: false,
  };

  handleChange = event => {
    this.setState(state => {
      return { checked: !state.checked };
    });
    this.props.changeUnit(event.target.value);
  };

  render() {
    const { checked } = this.state;
    return (
        <form style={{ textAlign: "center" }}>
          <label>
            <input
              type='radio'
              name='celsius'
              onChange={this.handleChange}
              checked={!checked}
              value='metric'
            />
            C&deg;
          </label>
          <label>
            <input
              type='radio'
              name='fahrenheit'
              onChange={this.handleChange}
              checked={checked}
              value='imperial'
            />
            F&deg;
          </label>
        </form>
    );
  }
}

export default TemparatureInput;
