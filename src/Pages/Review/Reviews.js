import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            
            <div
                style={{
                    background: `url(https://tevily-html.vercel.app/assets/images/backgrounds/page-header-bg.jpg)`
                }} className='h-64 '>
                <p className='con-head pt-40 pl-24'>Customers Review's</p>
            </div>


            <div style={{
                background: `url(https://tevily-html.vercel.app/assets/images/shapes/about-page-testimonial-map.png)`
            }} className='grid grid-cols-3 py-16'>
                {
                    reviews.map(rView =>
                        <Review
                            key={rView._id}
                            rView={rView}>
                        </Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;