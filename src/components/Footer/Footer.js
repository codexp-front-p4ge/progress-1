import React from "react";
import "./Footer.css"

export default (props) => (
    <footer className="footer">
        <p className="footer__social">{props.social}<span className="footer__bold">{props.bold}</span></p>
        <p className="footer__info max-size-global">{props.info}</p>
    </footer>
);