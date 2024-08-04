import Options from '../Options/Options';

const Feedback = ({ onLeaveFeedback, onReset, feedback, totalFeedback, positiveFeedbackPercentage }) => {
  return (
    <div>
      <Options onLeaveFeedback={onLeaveFeedback} onReset={onReset} totalFeedback={totalFeedback} />
      {totalFeedback > 0 && (
        <div>
          <h2>Statistics</h2>
          <p>Good: {feedback.good}</p>
          <p>Neutral: {feedback.neutral}</p>
          <p>Bad: {feedback.bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive feedback: {positiveFeedbackPercentage}%</p>
        </div>
      )}
    </div>
  );
};

export default Feedback;
