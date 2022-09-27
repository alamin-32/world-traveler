import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className=''>
            <div class="carousel w-full">
                <div style={{
                    background: `url(https://tevily-html.vercel.app/assets/images/backgrounds/main-slider-1-1.jpg)`
                }}
                    id="slide1" class="carousel-item relative w-full h-96">
                    <h1 className='slider-title mx-auto mt-10'>Travel & Adventure
                        <p className='slide-text ml-16'>Where Would You Like To Go?</p></h1>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div style={{
                    background: `url(https://tevily-html.vercel.app/assets/images/backgrounds/main-slider-1-2.jpg)`
                }} id="slide2" class="carousel-item relative w-full h-96">
                    <h1 className='slider-title mx-auto mt-10'>Travel & Adventure
                        <p className='slide-text ml-16'>Where Would You Like To Go?</p></h1>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div style={{
                    background: `url(https://tevily-html.vercel.app/assets/images/backgrounds/main-slider-1-3.jpg)`
                }} id="slide3" class="carousel-item relative w-full h-96">
                    <h1 className='slider-title mx-auto mt-10'>Travel & Adventure
                        <p className='slide-text ml-16'>Where Would You Like To Go?</p></h1>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;