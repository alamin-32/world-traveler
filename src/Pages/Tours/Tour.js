import React from 'react';
import { Icon } from '@iconify/react';
import './Tour.css'

const Tour = ({ tour }) => {
    const { img, rating, name, price, description, area, people, days } = tour
    return (
        <div class="card lg:card-side bg-base-100 my-3 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body">
                <h1 className='flex'><Icon className='mt-1 mr-1' icon="ant-design:star-filled" color="#ffa801" />{rating}</h1>
                <h2 class="text-3xl font-bold">{name}</h2>
                <h2 className='text-2xl font-extrabold price-tag'>{price} <span className='text-sm font-semibold text-slate-400'>/ Per Person</span></h2>
                <p className=' font-semibold des-text'>{description}</p>
                <div className='flex  plan-sum rounded p-1'>
                    <h1 className='flex mx-auto font-semibold'><Icon className='mt-1 mr-2' icon="eos-icons:modified-date" color="#ffa801" />{days} Days</h1>

                    <h1 className='flex mx-auto font-semibold'><Icon className='mt-1 mr-2' icon="healthicons:ui-user-profile" color="#ffa801" />{people}+</h1>

                    <h1 className='flex mx-auto font-semibold'><Icon className='mt-1 mr-2' icon="majesticons:map-marker-area" color="#ffa801" />{area}</h1>
                </div>

                <div class="card-actions mt-5">
                    <button class="btn  con-btn">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Tour;