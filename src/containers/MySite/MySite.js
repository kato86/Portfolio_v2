import React from "react";

import AboutMe from "../../components/AboutMe/AboutMe";
import Contact from "../../components/Contact/Contact";
import Navigation from "../../components/Navigation/Navigation";

const mySite = (props) => (
  <div>
    <Navigation />
    <AboutMe />
    <Contact />
  </div>
);

export default mySite;
