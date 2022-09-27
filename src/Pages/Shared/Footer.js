import React from 'react';
import logo1 from '../../assets/images/logo1.png'
import './Footer.css'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer class="footer px-10 py-20 f-bg text-base-content">
                <div class="flex flex-col w-full">
                    <div>
                        <Link to='/'><h1 className='text-4xl font-extrabold  text-orange-500'>World Traveler</h1></Link>
                        <p className='f-font pt-4'>
                            World Traveler Ltd.
                            <br />
                            Providing reliable tour plan since 2020</p>
                    </div>
                    <div>
                        <div className='flex py-2'>
                            <p className='f-font pt-1 text-2xl'><Icon icon="carbon:phone-filled" color="#e8604c" /></p>
                            <p className='f-font ml-2'>+92 666 888 0000</p>
                        </div>
                        <div className='flex py-2'>
                            <p className='f-font pt-1 text-2xl'><Icon icon="el:envelope" color="#e8604c" /></p>
                            <p className='f-font ml-2'>needhelp@company.com</p>
                        </div>
                        <div className='flex py-2'>
                            <p className='f-font pt-1 text-2xl'><Icon icon="fa6-solid:location-dot" color="#e8604c" /></p>
                            <p className='f-font ml-2'>666 road, broklyn street new york</p>
                        </div>
                    </div>
                </div>
                <div>
                    <span class="footer-title f-head pb-3">Company</span>
                    <a class="link link-hover f-font pb-2">About Us</a>
                    <a class="link link-hover f-font pb-2">Community Blog</a>
                    <a class="link link-hover f-font pb-2">Rewards</a>
                    <a class="link link-hover f-font pb-2">Work with Us</a>
                    <a class="link link-hover f-font pb-2">Meet the Team</a>
                </div>
                <div>
                    <span class="footer-title f-head pb-3">Explore</span>
                    <a class="link link-hover f-font pb-2">Account</a>
                    <a class="link link-hover f-font pb-2">Legal</a>
                    <a class="link link-hover f-font pb-2">Contact</a>
                    <a class="link link-hover f-font pb-2">Affilitate Program</a>
                    <a class="link link-hover f-font pb-2">Privacy policy</a>
                </div>
                <div>
                    <span class="footer-title f-head pb-3">Newsletter</span>
                    <div class="form-control w-80">
                        <label class="label">
                            <span class="label-text f-font py-2">Enter your email address</span>
                        </label>
                        <div class="relative">
                            <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                            <button class="btn button absolute top-0 right-0 rounded-l-none ">Subscribe</button>
                        </div>
                        <div className='flex py-4'>
                            <p className='f-font pt-1 text-2xl'><Icon icon="el:ok-sign" color="#e8604c" /></p>
                            <p className='f-font ml-2'>I agree to all terms and policies</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;