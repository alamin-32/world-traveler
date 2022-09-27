import React from 'react';
import Banner from './Banner';
import ShowDestinations from './Show/ShowDestinations';
import ShowReviews from './Show/ShowReviews';
import TripPlan from './TripPlan';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShowDestinations home={true}></ShowDestinations>
            <TripPlan></TripPlan>
            <ShowReviews></ShowReviews>
        </div>
    );
};

export default Home;