import React from 'react';
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features"
import Bring from "./components/Bring/Bring";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";

export default () => (
  <div className="App">
    <Services />
    <Hero />
    <Features />
    <Bring />
    <Footer />
  </div>
);