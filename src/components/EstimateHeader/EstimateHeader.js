import React from "react";
import "./EstimateHeader.css"

var company = {
    name: "Eurotech Motor, LLC",
    adress: "555 Water Tower Coast",
    complement: "Holland, MI 49242"
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
    <section className="">
        <div className="estimate-header">
            <div className="company">
                <p className="company__name">{company.name}</p>
                <p className="company__adress">{company.adress}</p>
                <p className="company__complement">{company.complement}</p>
            </div>
            <div className="order align-right">
                <p>{order.estimate}</p>
                <p>{order.progress}</p>
            </div>
            <div className="vendor">
                <p className="vendor__prepared">{vendor.prepared}</p>
                <p className="vendor__name">{vendor.name}</p>
            </div>
            <div className="vehicle align-right">
                <p className="vehicle__title">{vehicle.title}</p>
                <p className="vehicle__model">{vehicle.model}</p>
                <p className="vehicle__miles">{vehicle.miles}</p>
                <p className="vehicle__vin">{vehicle.vin}</p>
            </div>
        </div>
    </section>
);