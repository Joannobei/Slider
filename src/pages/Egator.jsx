import React from "react";
import { Navbar, HeroSection, Section1, Section2, Section3, Section4, Footer} from "../components";

const Egator = () => {
  return (
    <div className='h-[550vh]'>
      <Navbar />
      <HeroSection />
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer />
    </div>
  );
};

export default Egator;
