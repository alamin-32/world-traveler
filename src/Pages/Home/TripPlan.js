import React from 'react';
import img1 from '../../assets/images/img1.png'
import { Icon } from '@iconify/react';

const TripPlan = () => {
    return (
        <div className='grid grid-cols-2 gap-6 ml-10 my-10'>
            <div><img src={img1} alt="" /></div>
            <div className='mt-14 py-6'>
                <p className='font-bold'>Get To Know Us</p>
                <h1 className='text-5xl font-bold mt-3'>Plan Your Trip With</h1>
                <h1 className='text-5xl font-bold mt-3'>World Traveler</h1>
                <p className='pr-10 py-10 font-bold'>There are many variations of passages of available <br /> but the majority  have suffered alteration in some form,<br /> by injected hum randomised words which don't look even slightly.</p>
                <div className='flex'>
                    <Icon icon="el:ok-sign" color="#e8604c" width="20" height="30" />
                    <p className='ml-5 text-lg font-bold'>Invest in your simply neighborhood</p>
                </div>
                <div className='flex mt-3'>
                    <Icon icon="el:ok-sign" color="#e8604c" width="20" height="30" />
                    <p className='ml-5 text-lg font-bold'>Support people in free text extreme need</p>
                </div>
                <div className='flex mt-3'>
                    <Icon icon="el:ok-sign" color="#e8604c" width="20" height="30" />
                    <p className='ml-5 text-lg font-bold'>Largest global industrial business community</p>
                </div>
                <button class="btn w-52 con-btn mt-10">Send A Message</button>
            </div>

        </div>
    );
};

export default TripPlan;