import React from "react";
import imgService1 from "./icon1.png";
import imgService2 from "./icon2.png";
import imgService3 from "./icon3.png";
import imgService4 from "./icon4.png";
import imgService5 from "./icon5.png";
import imgService6 from "./icon6.png";
import imgService7 from "./icon7.png";
import imgService8 from "./icon8.png";
import imgPhone from "./phone.png";
import "./Bring.css"

var bring = {
    title: "Bring Your Own Business",
    subtitle:"Flexible Platform",
    description: "We are an industry agnostic platform. If you can track it, you can Progress it! Progress makes it easy for service providers to connect directly with their customers."
};

export default (props) => (
    <section class="bring-fundo">
        <div class="bring max-size-global">
            <h1 className="bring-title">
                {bring.title}
            </h1>
            <div className="services">
                <div className="services-icon services-icon--left">
                    <img className="services-icon__demo services-icon__demo--1" src={imgService1} alt="icon detail"/>
                    <img className="services-icon__demo services-icon__demo--2" src={imgService2} alt="icon flower"/>
                    <img className="services-icon__demo services-icon__demo--4" src={imgService3} alt="icon grave"/>
                    <img className="services-icon__demo services-icon__demo--3" src={imgService4} alt="icon pc"/>
                </div>
                <div className="services-phone">
                    <img className="services-phone__demo" src={imgPhone} alt="phone"/>
                </div>
                <div className="services-icon services-icon--right">
                    <img className="services-icon__demo services-icon__demo--2" src={imgService5} alt="icon bug"/>
                    <img className="services-icon__demo services-icon__demo--1" src={imgService6} alt="icon tool"/>
                    <img className="services-icon__demo services-icon__demo--3" src={imgService7} alt="icon mech"/>
                    <img className="services-icon__demo services-icon__demo--4" src={imgService8} alt="icon garden"/>
                </div>
            </div>

            <div className="bring-text">
                <h2 className="bring-subtitle">
                    {bring.subtitle}
                </h2>
                <p className="bring-parag">
                    {bring.description}
                </p>
            </div>

            <form className="invite">
                <input className="invite__input" type="email" placeholder="Add your email address"/>
                <button className="invite__button">Invite me</button>
            </form>
            </div>
    </section>
);