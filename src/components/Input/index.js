import React, { Component } from 'react';

class Input extends Component {
  state = {
    value: ''
  }

  onChange = (e) => {
    // console.log(e.target.value);
    this.setState({ value: e.target.value })
  };

  render() {
    const { value } = this.state;
    const { className } = this.props;
    return <input type='text' className={className} value={value} onChange={this.onChange} />;
  }
}

export default Input;
