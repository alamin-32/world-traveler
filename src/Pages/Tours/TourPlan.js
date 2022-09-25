import React from 'react';
import './TourDetails.css'


const TourPlan = () => {
    return (
        <div className='grid grid-cols-2 px-16'>
            <div>
                <h1 className='text-5xl font-semibold mb-10'>Tour Plan</h1>
                <div className='mb-3'>
                    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-xl py-5 tour-bg font-bold">
                            <span className='text-orange-500'>Day 1</span> Arrive South Africa Forest
                        </div>
                        <div class="collapse-content">
                            <p className='text-base text-slate-400 font-semibold'>There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.</p>
                            <h1 className='text-lg font-semibold mt-7'>Free Drinks</h1>
                            <h1 className='text-lg font-semibold mt-1'>Awesome Breakfast</h1>
                            <h1 className='text-lg font-semibold mt-1'>5 Star Accommodation</h1>
                        </div>
                    </div>
                </div>

                <div className='mb-3'>
                    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-xl tour-bg font-bold py-5">
                            <span className='text-orange-500'>Day 2</span> Lunch Inside of Forest & Adventure
                        </div>
                        <div class="collapse-content">
                            <p className='text-base text-slate-400 font-semibold'>There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.</p>
                            <h1 className='text-lg font-semibold mt-7'>Free Drinks</h1>
                            <h1 className='text-lg font-semibold mt-1'>Awesome Breakfast</h1>
                            <h1 className='text-lg font-semibold mt-1'>5 Star Accommodation</h1>
                        </div>
                    </div>
                </div>
                <div className='mb-3'>
                    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-xl tour-bg py-5 font-bold">
                            <span className='text-orange-500'>Day 3</span> Depart from South Africa
                        </div>
                        <div class="collapse-content">
                            <p className='text-base text-slate-400 font-semibold'>There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.</p>
                            <h1 className='text-lg font-semibold mt-7'>Free Drinks</h1>
                            <h1 className='text-lg font-semibold mt-1'>Awesome Breakfast</h1>
                            <h1 className='text-lg font-semibold mt-1'>5 Star Accommodation</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourPlan;