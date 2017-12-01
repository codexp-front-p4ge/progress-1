import React from 'react';
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features"
import Bring from "./components/Bring/Bring";
import Footer from "./components/Footer/Footer";

var hero = {
  text: "A new way for service providers and consumers to track project progression."
};

var features = {
  feature: {
    title1: "Tracks projects easily",
    desc1: "Providers can give updates, share status, request updates, and require payments in one efficient tool. Simple, easy, progress.",
    title2: "Clear communication",
    desc2: "Progress allow direct communication between the consumer and service provider. No more waiting for call backs, missing emails, or lost paperwork.",
    altComunication: "imagem de duas conversas de monitoramento de serviços"
  },
  feature2: {
    title: "Estimate, approve, pay",
    desc: "The major steps of a service job are made simple with Progress. in one location, information and updateson project estimates and scopes of work are shared between provider and consumer.",
    altEstimate: "tabela com custos dos serviços"
  }
}

var bring = {
  title: "Bring Your Own Business",
  subtitle: "Flexible Platform",
  desc: "We are an industry agnostic platform. If you can track it, you can Progress it! Progress makes it easy for service providers to connect directly with their customers."
};

var footer = {
  social: "Follow along on Twitter for all the latest news!",
  bold: " @Progress_App",
  info: "© 2014 Shooting Brake Design"
}

export default () => (
  <div className = "App">
    <Hero text={hero.text} />
    <Features featureTitle1={features.feature.title1} featureDesc1={features.feature.desc1} featureTitle2={features.feature.title2} featureDesc2={features.feature.desc2} featureAltImg={features.feature.altComunication} feature2Title={features.feature2.title} feature2Desc={features.feature2.desc} feature2AltImg={features.feature2.altComunication} />
    <Bring title={bring.title} subtitle={bring.subtitle} desc={bring.desc} />
    <Footer social={footer.social} bold={footer.bold} info={footer.info} />
  </div>
);