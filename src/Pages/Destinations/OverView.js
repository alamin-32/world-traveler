import { Icon } from '@iconify/react';
import React from 'react';

const OverView = () => {
    return (
        <div className='pb-16 pt-16 px-16'>
        <h1 className='text-5xl mb-16 font-semibold'>Overview</h1>
        {/* <p className='font-semibold text-lg text-slate-400'>{tourDetails.overview}</p> */}
        <h1 className='text-2xl font-bold py-5'>Included/Exclude</h1>

        <div className='flex'>
            <div className='mr-40'>
                <div className='flex mb-3'>
                    <Icon className='mr-5 mt-1' icon="el:ok" color="#ffa801" width="20" height="20" />
                    <p className='text-slate-400 text-lg font-semibold'>Pick and Drop Services</p>
                </div>
                <div className='flex mb-3'>
                    <Icon className='mr-5 mt-1' icon="el:ok" color="#ffa801" width="20" height="20" />
                    <p className='text-slate-400 text-lg font-semibold'>1 Meal Per Day</p>
                </div>
                <div className='flex mb-3'>
                    <Icon className='mr-5 mt-1' icon="el:ok" color="#ffa801" width="20" height="20" />
                    <p className='text-slate-400 text-lg font-semibold'>Cruise Dinner & Music Event</p>
                </div>
                <div className='flex mb-3'>
                    <Icon className='mr-5 mt-1' icon="el:ok" color="#ffa801" width="20" height="20" />
                    <p className='text-slate-400 text-lg font-semibold'>Visit 7 Best Places in the City With Group</p>
                </div>
            </div>

            <div>
                <div className='flex mb-3'>
                    <Icon className='mr-5 mt-1' icon="emojione-monotone:cross-mark" width="20" height="20" />
                    <p className='text-slate-400 text-lg font-semibold'>Additional Services</p>
                </div>
                <div className='flex mb-3'>
                    <Icon className='mr-5 mt-1' icon="emojione-monotone:cross-mark" width="20" height="20" />
                    <p className='text-slate-400 text-lg font-semibold'>Insurance</p>
                </div>
                <div className='flex mb-3'>
                    <Icon className='mr-5 mt-1' icon="emojione-monotone:cross-mark" width="20" height="20" />
                    <p className='text-slate-400 text-lg font-semibold'>Food & Drinks</p>
                </div>
                <div className='flex mb-3'>
                    <Icon className='mr-5 mt-1' icon="emojione-monotone:cross-mark" width="20" height="20" />
                    <p className='text-slate-400 text-lg font-semibold'>Tickets</p>
                </div>
            </div>
        </div>

    </div>
    );
};

export default OverView;