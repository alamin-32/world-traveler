import React, { useEffect, useState } from 'react';
import Destination from './Destination';

const DestinationsList = () => {
    const [destinationsList, setdestinationsList] = useState([])
    useEffect(() => {
        fetch('https://world-traveler-server-hdqlke1sn-alamin-32.vercel.app/destinationList')
            .then(res => res.json())
            .then(data => setdestinationsList(data))
    }, [])
    return (
        <div>
            <div style={{
                background: `url(https://tevily-html.vercel.app/assets/images/backgrounds/page-header-bg.jpg)`
            }} className='h-64 '>
                <p className='con-head pt-40 pl-24'>Destination List</p>
            </div>

            <div className='grid grid-cols-3 gap-5 ml-10 mt-10 '>
                {
                    destinationsList.map(dList =>
                        <Destination
                            key={dList}
                            dList={dList}
                        ></Destination>)
                }
            </div>
        </div>
    );
};

export default DestinationsList;