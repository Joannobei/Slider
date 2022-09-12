import React from 'react'
import {Navbar, Footer} from "../components/eGator";
  import {HeroSection, Section1, Section2, Section3, Section4} from "../components/Features";

const Features = () => {
  return (
    <div>
        <Navbar />
        <HeroSection/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>


        <Footer />
    </div>
  )
}

export default Features