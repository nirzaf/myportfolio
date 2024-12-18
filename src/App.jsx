import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from "./components";
import TechStack from "./components/TechStack";
import BackgroundCanvas from "./components/canvas/Background";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <BackgroundCanvas />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <TechStack />
        <Experience />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
