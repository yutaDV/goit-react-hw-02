import Options from '../Options/Options';

const Feedback = ({ onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    <div>
      <Options onLeaveFeedback={onLeaveFeedback} onReset={onReset} totalFeedback={totalFeedback} />
    </div>
  );
};

export default Feedback;