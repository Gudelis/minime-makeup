import "./socials.css";

export const Socials = ({ title, image, url }) => {
  return (
    <div className="logo-wrapper">
      <a rel="noreferrer" href={url} target="_blank">
        <img src={image} alt="logo" className="socials-logo" />
      </a>
    </div>
  );
};
