import React from 'react';
import './Service.css'
import { Link } from 'react-router-dom';
const Service = (props) => {
    //console.log(props.service);
    const { id, name, img, price, description } = props.service;
    return (
        <div className="servic">
            <img src={img} alt="" />
            <div className="servic-detals">

                <h3>{name}</h3>
                <h5>Price : {price}</h5>
                <p className="px-5">{description}</p>
                <Link to={`/booking/${id}`}>
                    <button className="btn btn-warning ">Book{name.toLowerCase()}</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;