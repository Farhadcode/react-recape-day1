import React from 'react';
import './Service.css'
const Service = (props) => {
    console.log(props.service);
    const { name, img, price, description } = props.service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price : {price}</h5>
            <p>{description}</p>
        </div>
    );
};

export default Service;