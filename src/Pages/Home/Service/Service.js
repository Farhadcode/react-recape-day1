import React from 'react';
import './Service.css'
const Service = (props) => {
    //console.log(props.service);
    const { name, img, price, description } = props.service;
    return (
        <div className="servic">
            <img src={img} alt="" />
            <div className="servic-detals">

                <h3>{name}</h3>
                <h5>Price : {price}</h5>
                <p className="px-5">{description}</p>
            </div>
        </div>
    );
};

export default Service;