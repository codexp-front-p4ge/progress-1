import React from 'react';
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features"
import Bring from "./components/Bring/Bring";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import EstimateHeader from "./components/EstimateHeader/EstimateHeader";

export default () => (
  <div className="App">
    <Hero />
    <EstimateHeader />
    <Features />
    <Bring />
    <Footer />
  </div>
);