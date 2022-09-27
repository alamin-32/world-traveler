import React, { useEffect, useState } from 'react';
import ShowReview from './ShowReview';

const ShowReviews = () => {
    const [showReviews, setShowReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setShowReviews(data))
    }, [])
    return (

        <div style={{
            background: `url(https://tevily-html.vercel.app/assets/images/shapes/about-page-testimonial-map.png)`
        }} className='grid grid-cols-3 py-16'>
            {
                showReviews.map(sView =>
                    <ShowReview
                        key={sView._id}
                        sView={sView}>
                    </ShowReview>)
            }
        </div>
    );
};

export default ShowReviews;