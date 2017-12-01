import React from "react";
import Services from "./Services.css";

var services = {
    service1: {
        description: "Tensioner",
        qty: 1,
        price: 45.00
    },

    service2: {
        description: "Oil Filter",
        qty: 1,
        price: 103.00
    },

    service3: {
        description: "Bilstein 5100 Shocks",
        qty: 4,
        price: 200.00
    },

    service4: {
        description: "Labor (per hour)",
        qty: 14,
        price: 70.00
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
                <td >{services.service1.description}</td>
                <td>{services.service1.qty}</td>
                <td className="tb-text-right">${services.service1.price}</td>
                <td className="tb-text-right">${amounts.service1}</td>
            </tr>

            <tr className="services-tb-row">
                <td>{services.service2.description}</td>
                <td>{services.service2.qty}</td>
                <td className="tb-text-right">${services.service2.price}</td>
                <td className="tb-text-right">${amounts.service2}</td>
            </tr>

            <tr className="services-tb-row">
                <td>{services.service3.description}</td>
                <td>{services.service3.qty}</td>
                <td className="tb-text-right">${services.service3.price}</td>
                <td className="tb-text-right">${amounts.service3}</td>
            </tr>

            <tr className="services-tb-row">
                <td>{services.service4.description}</td>
                <td>{services.service4.qty}</td>
                <td className="tb-text-right">${services.service4.price}</td>
                <td className="tb-text-right">${amounts.service4}</td>
            </tr>
            
            <tr>
                <td colSpan="4" className="tb-border"></td>
            </tr>

            <tr className="services-tb-row">
                <td className="tb-text-right services-tb-row--title" colSpan="2">Subtotal</td>
                <td className="tb-text-right" colSpan="2">${subtotal}</td>
            </tr>

            <tr className="services-tb-row">
                <td className="tb-text-right services-tb-row--title" colSpan="2">Tax</td>
                <td className="tb-text-right" colSpan="2">${tax}</td>
            </tr>

            <tr className="services-tb-row">
                <td className="tb-text-right services-tb-row--title tb-text-total" colSpan="2">Total</td>
                <td className="tb-text-right tb-text-total tb-text-total-green" colSpan="2">${total}</td>
            </tr>

        </table>
     </section>
);