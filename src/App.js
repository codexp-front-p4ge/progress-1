import React from 'react';
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features"
import Bring from "./components/Bring/Bring";
import Footer from "./components/Footer/Footer";

var company = {
  name: "Eurotech Motor, LLC",
  adress: "555 Water Tower Coast",
  complement: "Holland, MI 49242",
};
var order = {
  estimate: "ESTIMATE * 18801934",
  progress: "PROGRESS CODE 3110556",
};
var vendor = {
  prepared: "Prepared for",
  name: "Jake Montgomery",
};
var vehicle = {
  title: "Vehicle",
  model: "2010 Mini Cooper S",
  miles: "Miles: 31,209",
  vin: "VIN: 000193HHAAO1|345",
};

export default () => (
  <div className="App">
    <Hero />
    <EstimateHeader company={company} order={order} vendor={vendor} vehicle={vehicle} />
    <Features />
    <Bring />
    <Footer />
  </div>
);