import React from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import {
  Navbar,
  HeroSection,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Footer,
} from "../components";

const Egator = () => {
  // const onLoad = () => {
  //   console.log("onLoad works!");
  // };



  return (
    <div>
      <TawkMessengerReact
        propertyId="630a9aee54f06e12d8912851"
        widgetId="1gbgmqdgv"
        // onLoad={onLoad}
      />
      <Navbar />
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
};

export default Egator;
