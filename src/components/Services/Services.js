import React from "react";
import Services from "./Services.css";


export default(props) => (

    <section>
        <table className="services-tb">
            <tr>
                <td colSpan="4" className="tb-border"></td>
            </tr>
                
            <tr className="services-tb-row services-tb-row--title">
                <td className="services-tb-row__desc">Description</td>
                <td className="services-tb-row__qty">Qty</td>
                <td className="services-tb-row__price tb-text-right">Price</td>
                <td className="services-tb-row__amount tb-text-right">Amount</td>
            </tr>

            <tr className="services-tb-row">
                <td>{props.services.service1.description}</td>
                <td>{props.services.service1.qty}</td>
                <td className="tb-text-right">${props.services.service1.price}</td>
                <td className="tb-text-right">${props.amounts.service1}</td>
            </tr>

            <tr className="services-tb-row">
                <td>{props.services.service2.description}</td>
                <td>{props.services.service2.qty}</td>
                <td className="tb-text-right">${props.services.service2.price}</td>
                <td className="tb-text-right">${props.amounts.service2}</td>
            </tr>

            <tr className="services-tb-row">
                <td>{props.services.service3.description}</td>
                <td>{props.services.service3.qty}</td>
                <td className="tb-text-right">${props.services.service3.price}</td>
                <td className="tb-text-right">${props.amounts.service3}</td>
            </tr>

            <tr className="services-tb-row">
                <td>{props.services.service4.description}</td>
                <td>{props.services.service4.qty}</td>
                <td className="tb-text-right">${props.services.service4.price}</td>
                <td className="tb-text-right">${props.amounts.service4}</td>
            </tr>
            
            <tr>
                <td colSpan="4" className="tb-border"></td>
            </tr>

            <tr className="services-tb-row">
                <td className="tb-text-right services-tb-row--title" colSpan="2">Subtotal</td>
                <td className="tb-text-right" colSpan="2">${props.subtotal}</td>
            </tr>

            <tr className="services-tb-row">
                <td className="tb-text-right services-tb-row--title" colSpan="2">Tax</td>
                <td className="tb-text-right" colSpan="2">${props.tax}</td>
            </tr>

            <tr className="services-tb-row">
                <td className="tb-text-right services-tb-row--title tb-text-total" colSpan="2">Total</td>
                <td className="tb-text-right tb-text-total tb-text-total-green" colSpan="2">${props.total}</td>
            </tr>

        </table>
     </section>
);