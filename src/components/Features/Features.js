import React from "react";
import "./Features.css";
import ComunicationImg from "./codeMobile.PNG";
import EstimateImg from "./tableMobile.PNG";
import FormServices from "../FormServices/FormServices";

var features = {
    title1: "Tracks projects easily",
    description1: "Providers can give updates, share status, request updates, and require payments in one efficient tool. Simple, easy, progress.",
    title2: "Clear communication",
    description2: "Progress allow direct communication between the consumer and service provider. No more waiting for call backs, missing emails, or lost paperwork.",
    altComunication: "imagem de duas conversas de monitoramento de serviços"
}

var features2 = {
    title: "Estimate, approve, pay",
    description: "The major steps of a service job are made simple with Progress. in one location, information and updateson project estimates and scopes of work are shared between provider and consumer.",
    altEstimate: "tabela com custos dos serviços"
}

export default (props) => (
    <section className="max-size-global">
        <article className="feature">
            <div className="feature-info feature__demo--float">
                <h2 className="feature-info__title">{features.title1}</h2>
                <p className="feature-info__text">{features.description1}</p>
            </div>
            <img alt={features.altComunication} className="feature__demo feature__demo--floatLeft" src={ComunicationImg} />
            <div className="feature-info feature__demo--float">
                <h2 className="feature-info__title">{features.title2}</h2>
                <p className="feature-info__text">{features.description2}</p>
            </div>
        </article>
        <article className="feature flex__reverse">
            <FormServices />
            <div className="feature-info">
                <h2 className="feature-info__title">{features2.title}</h2>
                <p className="feature-info__text">{features2.description}</p>
            </div>
        </article>
    </section> 
);