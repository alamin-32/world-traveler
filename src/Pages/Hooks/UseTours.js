import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const UseTours = () => {
    const [tours, setTours] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tourList')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return { tours, setTours }
};

export default UseTours;