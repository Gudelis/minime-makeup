import "./feedbackCard.css";

export const FeedbackCard = ({ feedbackImage }) => {
  return (
    <div className="feedback-card">
      <img src={feedbackImage} alt="feedback" />
    </div>
  );
};
