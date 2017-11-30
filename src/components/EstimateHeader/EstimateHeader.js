import React from "react";
import "./EstimateHeader.css"

export default (props) => (
    <section className="">
        <div className="estimate-header">
            <div className="company">
                <p className="company__name">{props.company.name}</p>
                <p className="company__adress">{props.company.adress}</p>
                <p className="company__complement">{props.company.complement}</p>
            </div>
            <div className="order align-right">
                <p>{props.order.estimate}</p>
                <p>{props.order.progress}</p>
            </div>
            <div className="vendor">
                <p className="vendor__prepared">{props.vendor.prepared}</p>
                <p className="vendor__name">{props.vendor.name}</p>
            </div>
            <div className="vehicle align-right">
                <p className="vehicle__title">{props.vehicle.title}</p>
                <p className="vehicle__model">{props.vehicle.model}</p>
                <p className="vehicle__miles">{props.vehicle.miles}</p>
                <p className="vehicle__vin">{props.vehicle.vin}</p>
            </div>
        </div>
    </section>
);