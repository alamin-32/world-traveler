import React, { useEffect, useState } from 'react';
import OurTeam from './OurTeam';

const OurTeams = () => {
    const [ourTeams, setOurTeams] = useState([])
    useEffect(() => {
        fetch("guide.json")
            .then(res => res.json())
            .then(data => setOurTeams(data))
    }, [])
    return (
        <div>
            <div
                style={{
                    background: `url(https://tevily-html.vercel.app/assets/images/backgrounds/page-header-bg.jpg)`
                }} className='h-64 '>
                <p className='con-head pt-40 pl-24'>Our Teams</p>
            </div>
            <div className='grid grid-cols-4 mt-10 gap-4 p-10 ml-14'>
                {
                    ourTeams.map(ourTeam =>
                        <OurTeam
                            key={ourTeam._id}
                            ourTeam={ourTeam}
                        ></OurTeam>)
                }
            </div>
        </div>
    );
};

export default OurTeams;