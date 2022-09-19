import React from 'react';
import './ContactUs.css'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <div style={{
                background: `url(https://tevily-html.vercel.app/assets/images/backgrounds/page-header-bg.jpg)`
            }} className='h-64 '>
                <p className='con-head pt-40 pl-24'>Contact Us</p>
            </div>
            <div className='flex  py-5 border'>
                <Link to='/' className='mr-5 ml-24 font-semibold text-hvr'>Home</Link>
                <Link to='/contactUs' className='font-semibold text-hvr'>Contact</Link>
            </div>
            <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-1  mb-5'>
                <div className='p-5 ml-20 mt-16 '>
                    <h5 className='font-semibold text-orange-600 font-mono'>Talk with our team</h5>
                    <p className='con-font'>Any Question?</p>
                    <p className='con-font'>Feel Free to</p>
                    <p className='con-font'>Contact</p>
                </div>
                <div className='mr-4 col-span-2 p-10 ml-5'>
                    <input type="text" placeholder="Your Name" class="input w-full mt-10 mr-3 mb-6 px-7 py-8 input-bg font-bold  w-96" />
                    <input type="email" placeholder="Email address" class="input w-full px-7 py-8 input-bg font-bold  w-96" />
                    <div>
                        <textarea class="textarea w-full input-bg p-20 " placeholder=""></textarea>
                    </div>
                    <button class="btn w-52 con-btn mt-4">Send A Message</button>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 px-14 py-8 mb-5'>
                <div className='border flex px-20'>
                    <p className='py-10 mr-4'><Icon icon="el:ok-sign" color="#e8604c" width="50" height="50" /></p>
                    <p className='py-10 flex  font-bold text-gray-500'>88 Broklyn Street <br />
                        Road New York. USA</p>
                </div>
                <div className='border flex px-20'>
                    <p className='py-10 mr-4'><Icon icon="bxs:phone" color="#e8604c" width="50" height="50" /></p>
                    <p className='py-10 flex  font-bold text-gray-500'>+92 666 888 0000 <br />
                        666 888 0000</p>
                </div>
                <div className='border flex px-20'>
                    <p className='py-10 mr-4'><Icon icon="entypo:email" color="#e8604c" width="50" height="50" /></p>
                    <p className='py-10 flex  font-bold text-gray-500'>needhelp@tevily.com<br />
                        info@tevily.com</p>
                </div>
            </div>

        </div>
    );
};

export default Contact;