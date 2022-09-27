import React from 'react';

const TourBanner = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div style={{
                    background: `url(https://tevily-html.vercel.app/assets/images/backgrounds/tour-details-bg-1.jpg)`
                }}
                    id="slide1" class="carousel-item relative w-full h-96">
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div style={{
                    background: `url(https://tevily-html.vercel.app/assets/images/backgrounds/tour-details-bg-2.jpg)`
                }} id="slide2" class="carousel-item relative w-full h-96">
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div style={{
                    background: `url(https://tevily-html.vercel.app/assets/images/backgrounds/tour-details-bg-3.jpg)`
                }} id="slide3" class="carousel-item relative w-full h-96">
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourBanner;