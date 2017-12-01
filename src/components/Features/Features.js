import React from "react";
import "./Features.css";
import ComunicationImg from "./codeMobile.PNG";
import EstimateImg from "./tableMobile.PNG";
import FormServices from "../FormServices/FormServices";

var company = {
    name: "1Eurotech Motor, LLC",
    adress: "2555 Water Tower Coast",
    complement: "3Holland, MI 49242"
};
var order = {
    estimate: "ESTIMATE * 18801934",
    progress: "PROGRESS CODE 3110556"
};
var vendor = {
    prepared: "Prepared for",
    name: "Jake Montgomery"
};
var vehicle = {
    title: "Vehicle",
    model: "2010 Mini Cooper S",
    miles: "Miles: 31,209",
    vin: "VIN: 000193HHAAO1|345"
};

export default (props) => (
    <section className="max-size-global">
        <article className="feature">
            <div className="feature-info feature__demo--float">
                <h2 className="feature-info__title">{props.featureTitle1}</h2>
                <p className="feature-info__text">{props.featureDesc1}</p>
            </div>
            <img alt={props.featureAltImg} className="feature__demo feature__demo--floatLeft" src={ComunicationImg} />
            <div className="feature-info feature__demo--float">
                <h2 className="feature-info__title">{props.featureTitle2}</h2>
                <p className="feature-info__text">{props.featureDesc2}</p>
            </div>
        </article>
        <article className="feature flex__reverse">
            <FormServices companyAdress={company.adress} companyComplment={company.complement} />
            <div className="feature-info">
                <h2 className="feature-info__title">{props.feature2Title}</h2>
                <p className="feature-info__text">{props.feature2Desc}</p>
            </div>
        </article>
    </section> 
);