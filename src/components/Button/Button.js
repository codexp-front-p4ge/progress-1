import React from "react";
import "./Button.css"

export default(props) => (
        <button className={props.buttonClass}>{props.buttonLabel}</button>
);