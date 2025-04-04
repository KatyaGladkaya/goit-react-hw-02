import styles from "./Feedback.module.css";

const Feedback = ({ feedback, total, positiveFeedback }) => {
  const { good, neutral, bad } = feedback;

  return (
    <div className={styles.container}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
