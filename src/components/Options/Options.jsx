import PropTypes from "prop-types";
import styles from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback,total }) => {
  return (
    <div className={styles.options}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>

   {total > 0 && (
        <button onClick={resetFeedback} className={styles.reset}>
          Reset
        </button>
      )} 
    </div>
  );
};

export default Options;
