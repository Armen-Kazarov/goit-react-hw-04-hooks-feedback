import PropTypes from 'prop-types';
import s from '../../components/FeedbackOptions/FeedbackOptions.module.css';

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      type="button"
      className={s.optionButton}
      data-feedback={feedback}
      onClick={onLeaveFeedback}
    >
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option, index) => (
    <FeedbackButton
      key={index}
      feedback={option}
      onLeaveFeedback={onLeaveFeedback}
    />
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
