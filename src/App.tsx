import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import SectionWrapper from "./components/SectionWrapper";

const App = () => {
  return (
    <BrowserRouter>
      <div className="realative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />

          <Hero />
        </div>

        <SectionWrapper children={<About />} idName="about" />

        <Experience />

        <Tech />

        <Works />

        <Feedbacks />

        <div className="relative z-0">
          <Contact />

          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
