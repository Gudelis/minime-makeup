import "./serviceCard.css";

export const ServiceCard = ({ makeupName, onClick, photo }) => {
  return (
    <div className="service-card">
      <div className="image-wrapper">
        <img src={photo} alt="service" />
      </div>
      <div>
        <h3>{makeupName}</h3>
        <button onClick={() => onClick(makeupName)} id="getDetailsButton">
          Sužinoti daugiau
        </button>
      </div>
    </div>
  );
};
