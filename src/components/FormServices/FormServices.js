import React from "react";
import EstimateHeader from "../EstimateHeader/EstimateHeader";
import Services from "../Services/Services";
import Button from "../Button/Button";
import "./FormServices.css";

export default (props) => (
    <form className="form-services">
        <EstimateHeader />
        <Services />
        <div className="form-services__align-button">
            <Button buttonClass="button" buttonLabel="approve"/>
            <Button buttonClass="button button--reverse" buttonLabel="decline"/>
        </div>
    </form>
);