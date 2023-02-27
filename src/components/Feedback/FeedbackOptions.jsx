import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        {options.map(option => (
          <button key={option} onClick={onLeaveFeedback}>
            {option}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
