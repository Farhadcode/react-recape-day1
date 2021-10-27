import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';

const Booking = () => {
    const { serviceId } = useParams();
    // console.log(serviceId);

    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (

        <div classNameName="card mb-3">
            <img src={service.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{service.name}</h3>
                <p className="card-text">{service.description}</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>

    );
};

export default Booking;