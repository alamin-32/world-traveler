import React from 'react';
import { Icon } from '@iconify/react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import TourBanner from './TourBanner';
import './TourDetails.css'
import Booking from '../Booking/Booking';
import TourPlan from './TourPlan';


const TourDetails = () => {
    // const [user] = useAuthState(auth);
    const { id } = useParams()
    const [tourDetails, setTourDetails] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/tourList/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTourDetails(data))
    }, [id, tourDetails])


    return (
        <div>
            <TourBanner></TourBanner>
            <div className='grid grid-flow-row-dense grid-cols-3 tour-bg grid-rows-1'>
                <div className='my-14 px-16'>
                    <h1 className='text-2xl font-bold'>{tourDetails.name}</h1>
                    <h2 className='text-2xl font-extrabold price-tag mt-1'>{tourDetails.price} <span className='text-sm font-semibold text-slate-400'>/ Per Person</span></h2>
                </div>
                <div className='grid col-span-2'>

                    <div className='flex my-16 px-10'>

                        <div className='flex w-full'>
                            <Icon className='mr-5' icon="ant-design:clock-circle-filled" width="50" height="50" color="#ffa801" />
                            <div>
                                <h1 className="text-color" >Duration</h1>
                                <p className='font-semibold'>{tourDetails.days} Days</p>
                            </div>
                        </div>


                        <div className='flex  w-full'>
                            <Icon className=' mr-4' icon="healthicons:ui-user-profile" width="50" height="50" color="#ffa801" />
                            <div>
                                <h1 className="text-color">Min Age</h1>
                                <p className='font-semibold'>{tourDetails.age}+</p>
                            </div>
                        </div>

                        <div className='flex  w-full'>
                            <Icon className='mt-2 mr-5' icon="fa:plane" width="40" height="40" color="#ffa801" />
                            <div>
                                <h1 className="text-color">Tour Type</h1>
                                <p className='font-semibold'>{tourDetails.type}</p>
                            </div>
                        </div>
                        <div className='flex  w-full'>
                            <Icon className='mr-5' icon="majesticons:map-marker-area" width="50" height="50" color="#ffa801" />
                            <div>
                                <h1 className="text-color">Location</h1>
                                <p className='font-semibold'>{tourDetails.area}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='grid grid-flow-row-dense grid-cols-3'>
                <div className='grid col-span-2'>
                    <div className='pb-16 pt-16 px-16'>
                        <h1 className='text-5xl mb-16 font-semibold'>Overview</h1>
                        <p className='font-semibold text-lg text-slate-400'>{tourDetails.overview}</p>
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
                    <div>

                    </div>
                </div>
                <Booking></Booking>
            </div>
            <TourPlan></TourPlan>
        </div>
    );
};

export default TourDetails;