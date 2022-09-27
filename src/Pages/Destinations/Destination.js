import React from 'react';
import {useNavigate } from 'react-router-dom';

const Destination = ({ dList }) => {
    const { _id, name, img1 } = dList
    const navigate = useNavigate();

    const toDestinationDetails = id => {
        navigate(`/destinationDetails/${id}`)
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl mb-5 image-full">
            <figure><img src={img1} alt="Shoes" /></figure>
            <div class="card-body">
                <h1 class="card-title mt-60 font-bold text-white text-2xl">{name}</h1>
                <button className='btn con-btn' onClick={() => toDestinationDetails(_id)}>Explore</button>
            </div>
        </div>
    );
};

export default Destination;