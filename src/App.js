import React from 'react';
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features"
import Bring from "./components/Bring/Bring";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import EstimateHeader from "./components/EstimateHeader/EstimateHeader";

var services = {
  service1: {
      description: "Tensioner",
      qty: 1,
      price: 45.00,
  },

  service2: {
      description: "Oil Filter",
      qty: 1,
      price: 103.00,
  },

  service3: {
      description: "Bilstein 5100 Shocks",
      qty: 4,
      price: 200.00,
  },

  service4: {
      description: "Labor (per hour)",
      qty: 14,
      price: 70.00,
  },
};

var amounts = {
  service1: services.service1.price*services.service1.qty,

  service2: services.service2.price*services.service2.qty,

  service3: services.service3.price*services.service3.qty,

  service4: services.service4.price*services.service4.qty
};

var subtotal = amounts.service1 + amounts.service2 + amounts.service3 + amounts.service4;

var tax = 115.68;

var total = subtotal + tax;



export default () => (
  <div className="App">
    <Services services={services} amounts={amounts} subtotal={subtotal} tax={tax} total={total} />
    <Hero />
    <EstimateHeader />
    <Features />
    <Bring />
    <Footer />
  </div>
);