import "./mainPage.css";
import { FeedbackSection } from "./sections/FeedbackSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { ServiceSection } from "./sections/ServiceSection";

export const MainPage = () => {
  return (
    <>
      <main class="main-page">
        <h1 id="pagrindinis">Minimi Makeup</h1>
        <HeroSection />
        <GallerySection />
        <ServiceSection />
        <FeedbackSection />
      </main>
    </>
  );
};
