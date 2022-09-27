import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShowDestination from './ShowDestination';
import './show.css'

const ShowDestinations = ({ home }) => {
    const [showDestinations, setShowDestinations] = useState([])
    useEffect(() => {
        fetch('destination.json')
            .then(res => res.json())
            .then(data => setShowDestinations(data))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-3 gap-5 ml-10 mt-10 '>
                {
                    showDestinations.slice(-6).map(sDes =>
                        <ShowDestination key={sDes._id}
                            sDes={sDes}></ShowDestination>)
                }
            </div>
            <button className='btn btn-show'><Link to='/destinationList'>Explore More</Link></button>
        </div>
    );
};

export default ShowDestinations;