import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DestinationDetails = () => {
    const { id } = useParams()
    const [destinationDetails, setdestinationDetails] = useState({})
    useEffect(() => {
        const url = `https://safe-citadel-47362.herokuapp.com/destinationList/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setdestinationDetails(data))
    }, [id, destinationDetails])
    return (
        <div>
            <div><img className='w-full h-96' src={destinationDetails.img1} alt="" /></div>
            <div className='grid grid-flow-row-dense grid-cols-3 tour-bg grid-rows-1'>
                <div className='my-14 px-16'>
                    <h1 className='text-3xl font-bold'>{destinationDetails.name}</h1>
                    <h2 className='text-2xl font-extrabold mt-1'>{destinationDetails.price} <span className='text-xl font-bold text-black'>Dhaka to {destinationDetails.name}- <span className='text-orange-600'>{destinationDetails.distance} Km</span></span></h2>
                </div>
                <div className='grid col-span-2'>

                    <div className='flex my-16 px-10'>

                        <div className='flex w-full'>
                            <Icon className='mr-5' icon="ant-design:clock-circle-filled" width="50" height="50" color="#ffa801" />
                            <div>
                                <h1 className="text-color" >Season</h1>
                                <p className='font-semibold'>{destinationDetails.season1} - {destinationDetails.season2}</p>
                            </div>
                        </div>


                        <div className='flex  w-full'>
                            <Icon className=' mr-4' icon="healthicons:ui-user-profile" width="50" height="50" color="#ffa801" />
                            <div>
                                <h1 className="text-color">Min Age</h1>
                                <p className='font-semibold'>8+</p>
                            </div>
                        </div>

                        <div className='flex  w-full'>
                            <Icon className='mt-2 mr-5' icon="fa:plane" width="40" height="40" color="#ffa801" />
                            <div>
                                <h1 className="text-color">Tour Type</h1>
                                <p className='font-semibold'>{destinationDetails.type}</p>
                            </div>
                        </div>
                        <div className='flex  w-full'>
                            <Icon className='mr-5' icon="majesticons:map-marker-area" width="50" height="50" color="#ffa801" />
                            <div>
                                <h1 className="text-color">Location</h1>
                                <p className='font-semibold'>{destinationDetails.location}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='grid grid-flow-row-dense grid-cols-3'>
                <div className='grid col-span-2'>
                    <div className='pb-16 pt-16 px-16'>
                        <h1 className='text-5xl mb-10 font-semibold'>Discover {destinationDetails.name}</h1>
                        <p className='font-semibold text-lg text-slate-400'>{destinationDetails.description}</p>
                    </div>






                    <div className='ml-16'>
                        <h1>Overview</h1>
                        <div className='mr-40'>
                            <div className='flex   my-4'>
                                <p className=' text-xl mr-16  font-bold'>Location</p>
                                <p className=' text-xl text-orange-400 ml-96 font-bold'>{destinationDetails.location}</p>
                            </div>
                            <hr />
                            <div className='flex  my-4'>
                                <p className=' text-xl mr-20  font-bold'>District</p>
                                <p className=' text-xl  text-orange-400 ml-96 font-bold'>{destinationDetails.district}</p>
                            </div>
                            <hr />
                            <div className='flex  my-4'>
                                <p className=' text-xl mr-20  font-bold'>Divison</p>
                                <p className=' text-xl  text-orange-400 ml-96 font-bold'>{destinationDetails.division}</p>
                            </div>
                            <hr />
                            <div className='flex  my-4'>
                                <p className=' text-xl mr-20  font-bold'>Area (km2)</p>
                                <p className=' text-xl ml-96  text-orange-400 font-bold'>{destinationDetails.area}</p>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DestinationDetails;