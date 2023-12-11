import "./header.css";
import facebookLogo from "../../assets/facebook-logo.jpg";
import instagramLogo from "../../assets/instagram-logo.jpg";
import { Socials } from "./Socials/Socials";

const handleClick = (section) => {
  switch (section) {
    case "pagrindinis":
      document.getElementById("pagrindinis").scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      break;
    case "galerija":
      document.getElementById("galerija").scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      break;
    case "paslaugos":
      document.getElementById("paslaugos").scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      break;
    case "atsiliepimai":
      document.getElementById("atsiliepimai").scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      break;
    default:
      document.getElementById("pagrindinis").scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      break;
  }
};

export const Header = () => {
  return (
    <header class="main-header">
      <div class="header-logo"></div>
      <nav class="header-nav">
        <button onClick={() => handleClick("pagrindinis")}>Pagrindinis</button>
        <button onClick={() => handleClick("galerija")}>Galerija</button>
        <button onClick={() => handleClick("paslaugos")}>Paslaugos</button>
        <button onClick={() => handleClick("atsiliepimai")}>Atsiliepimai</button>
        {/* <a href="#">Sertifikatai</a> */}
      </nav>
      <div class="socials-wrapper">
        <Socials
          title="Facebook"
          image={facebookLogo}
          url="https://www.facebook.com/minimimakeup"
        />
        <Socials title="Instagram" image={instagramLogo} url="#" />
      </div>
    </header>
  );
};
