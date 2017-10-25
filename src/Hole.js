import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Hole extends Component {
  static propTypes = {
    fill: PropTypes.string
  };

  render() {
    const { fill } = this.props;
    return <div style={{
      paddingTop: '0.55vw',
      paddingLeft: '0.55vw',
      borderRadius: '50%',
      width: '3vw',
      height: '3vw',
      boxShadow: "0 0 0 0.1vw black",
      backgroundColor: fill
    }}>
      <div style={{
          transform: 'rotate(-45deg)'
      }}>
        {this.props.children}
      </div>
    </div>
  }
}
