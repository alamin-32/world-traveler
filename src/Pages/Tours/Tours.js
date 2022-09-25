import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { json } from 'react-router-dom';
import Tour from './Tour';

const Tours = () => {
    const [tours, setTours] = useState([])
    useEffect(() => {
        fetch('tour.json')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <div>
            <div style={{
                background: `url(https://tevily-html.vercel.app/assets/images/backgrounds/page-header-bg.jpg)`
            }} className='h-64 '>
                <p className='con-head pt-40 pl-24'>Tour Packages</p>
            </div>
            <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-1 mt-10'>
                <div>
                    <h1>hellow</h1>
                </div>
                <div className='grid col-span-2 gap-5 px-10'>
                    {
                        tours.map(tour =>
                            <Tour
                                key={tour._id}
                                tour={tour}>
                            </Tour>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tours;