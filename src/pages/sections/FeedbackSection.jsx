import { FeedbackCard } from "../../components/FeedbackCard/FeedbackCard";
import "./styles/feedbackSection.css";

import feedback1 from "../../assets/feedback/feedback1.jpg";
import feedback2 from "../../assets/feedback/feedback2.jpg";
import feedback3 from "../../assets/feedback/feedback3.jpg";
import feedback4 from "../../assets/feedback/feedback4.jpg";

export const FeedbackSection = () => {
  return (
    <section className="feedback-section" id="atsiliepimai">
      <h2>Klientų atsiliepimai</h2>
      <div className="feedback-wrapper">
        <FeedbackCard feedbackImage={feedback1} />
        <FeedbackCard feedbackImage={feedback2} />
        <FeedbackCard feedbackImage={feedback3} />
        <FeedbackCard feedbackImage={feedback4} />
      </div>
    </section>
  );
};
