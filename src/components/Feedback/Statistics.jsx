import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, percentage } = this.props;

    return (
      <div>
        <p>Good: {good} </p>
        <p>Neutral: {neutral} </p>
        <p>Bad: {bad} </p>
        <p>Total: {total} </p>
        <p>Positive feedback: {percentage}% </p>
      </div>
    );
  }
}

export default Statistics;
