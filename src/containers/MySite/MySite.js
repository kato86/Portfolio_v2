import React from "react";

import AboutMe from "../../components/AboutMe/AboutMe";
import Contact from "../../components/Contact/Contact";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

const mySite = props => (
  <div>
    <Navigation />
    <AboutMe />
    <Contact />
    <Footer />
  </div>
);

export default mySite;
