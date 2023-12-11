import "./styles/heroSection.css";
import heroPhoto from "../../assets/hero-photo.jpg";

export const HeroSection = () => {
  return (
    <section className="home-section">
      <div className="hero-text-wrapper">
        <h2>Meistrė Varūna</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque
          nam porro voluptate eaque excepturi, beatae voluptates, repellendus
          ducimus dolorum similique nemo harum vel nisi dolores sequi laboriosam
          minus voluptas. Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
          <br />
          Esu draugiška draugų neturiu
        </p>
      </div>

      <img src={heroPhoto} alt="hero" className="hero-photo" />
    </section>
  );
};
