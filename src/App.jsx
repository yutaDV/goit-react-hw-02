
import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import './App.css';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Feedback 
        onLeaveFeedback={updateFeedback} 
        onReset={handleReset} 
        totalFeedback={totalFeedback} 
      />
      {totalFeedback > 0 ? (
        <>
          <h2>Statistics</h2>
          <p>Good: {feedback.good}</p>
          <p>Neutral: {feedback.neutral}</p>
          <p>Bad: {feedback.bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive feedback: {positiveFeedbackPercentage}%</p>
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
}

export default App;
