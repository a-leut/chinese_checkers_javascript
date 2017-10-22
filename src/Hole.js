import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Hole extends Component {
  static propTypes = {
    fill: PropTypes.string
  };

  render() {
    const { fill } = this.props;
    let circle = (children, fill) => {return <div style={{
      paddingTop: '0.55vw',
      paddingLeft: '0.55vw',
      borderRadius: '50%',
      width: '3vw',
      height: '3vw',
      boxShadow: "0 0 0 0.1vw black"
    }}>
      {children}
    </div>}
    return circle(content, 'black');
  }
}
