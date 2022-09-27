import React from 'react';

const ShowDestination = ({ sDes }) => {
    const { _id, name, img1 } = sDes

    return (
        <div class="card w-96 bg-base-100 shadow-xl mb-5 image-full">
            <figure><img src={img1} alt="Shoes" /></figure>
            <div class="card-body">
                <h1 class="card-title mt-60 font-bold text-white text-2xl">{name}</h1>
            </div>
        </div>
    );
};

export default ShowDestination;