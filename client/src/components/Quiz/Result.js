import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div>
      <div className="llama">
        You are a <strong>{props.quizResult}</strong> Llama!
      </div>
      <button
        className="btn"
        type="submit"
        onClick={props.handleRetakeButton}
      >
        Retake Quiz
      </button>
      <button
        className="btn"
        type="submit"
        onClick={props.handleItinerary}
      >
        View Itinerary
      </button>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
