import React from 'react';
import './OurTeam.css'
import { Icon } from '@iconify/react';

const OurTeam = ({ ourTeam }) => {
    const { name, description, img } = ourTeam
    return (
        <div>
            <div class="card card-compact w-64 py-10">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class=" font-bold text-center title">{name}</h2>
                    <p className='card-text text-center'>{description}</p>
                </div>
                <div className='flex ml-6'>
                    <p className='mr-5 ml-3 icon'><Icon icon="ant-design:instagram-filled" width="35" height="35" /></p>
                    <p className='mr-5 icon'><Icon icon="akar-icons:facebook-fill" width="30" height="30" /></p>
                    <p className='mr-5 icon'><Icon icon="akar-icons:twitter-fill" width="30" height="30" /></p>
                    <p className='mr-5 icon'><Icon icon="akar-icons:linkedin-box-fill" width="30" height="30" /></p>
                </div>
            </div>

        </div>
    );
};

export default OurTeam;