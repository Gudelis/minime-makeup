import { useState } from "react";
import "./styles/gallerySection.css";

import photo1 from "../../assets/gallery/1.jpg";
import photo2 from "../../assets/gallery/2.jpg";
import photo3 from "../../assets/gallery/3.jpg";
import photo4 from "../../assets/gallery/4.jpg";
import arrow from "../../assets/arrow.png";

const photoArray = [photo1, photo2, photo3, photo4];

export const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pictureIncreased, setPictureIncreased] = useState(false);

  const handleLeft = () => {
    setCurrentIndex((currentIndex - 1 + photoArray.length) % photoArray.length);
  };

  const handleRight = () => {
    setCurrentIndex((currentIndex + 1) % photoArray.length);
  };

  const increaseSize = () => {
    const picture = document.getElementById("main-photo");
    picture.style.transform = "scale(2.2)";
    picture.style.transition = "transform 1s ease";
    picture.style.cursor = "zoom-out";
    setPictureIncreased(true);

    if (!!pictureIncreased) {
      picture.style.transform = "scale(1)";
      picture.style.transition = "transform 0.5s ease";
      picture.style.cursor = "zoom-in";
      setPictureIncreased(false);
    }
  };

  return (
    <>
      <section class="gallery-section" id="galerija">
        <h2>Galerija</h2>
        <div class="gallery-wrapper">
          <button onClick={handleLeft}>
            <img src={arrow} alt="arrow-button" />
          </button>
          <div className="side-photos" onClick={handleLeft}>
            <img
              src={
                photoArray[
                  (currentIndex - 1 + photoArray.length) % photoArray.length
                ]
              }
              alt="Gallery-img"
            />
          </div>
          <div id="main-photo" onClick={increaseSize}>
            <img src={photoArray[currentIndex]} alt="Gallery-img" />
          </div>
          <div className="side-photos" onClick={handleRight}>
            <img
              src={photoArray[(currentIndex + 1) % photoArray.length]}
              alt="Gallery-img"
            />
          </div>
          <button onClick={handleRight}>
            <img src={arrow} alt="arrow-button" />
          </button>
        </div>
      </section>
    </>
  );
};
