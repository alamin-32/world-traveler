import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/images/logo1.png'
import { Icon } from '@iconify/react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div class="navbar bg-base-100 lg:py-8 lg:px-40">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='nav-text' to='/'>Home</Link></li>
                        <li><Link className='nav-text' to='/destinations'>Destinations</Link></li>
                        <li><Link className='nav-text' to='tours'>Tours</Link></li>
                        <li><Link className='nav-text' to='/blogs'>Blogs</Link></li>
                        <li><Link className='nav-text' to='/news'>News</Link></li>
                        <li><Link className='nav-text' to='/contactUs'>Contact Us</Link></li>
                    </ul>
                </div>
                <a><img src={logo1} alt="" /></a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal text-lg font-bold p-0">
                    <li><Link className='nav-text' to='/'>Home</Link></li>

                    <li><Link className='dropdown dropdown-hover nav-text' to='/destinations'>Destinations</Link>
                        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-white rounded-box w-52">
                            <li ><Link className='nav-text' to='/destinationList'>Destination List</Link></li>
                            <li ><Link className='nav-text' to='/ourTeams'>Our Team</Link></li>
                        </ul>
                    </li>

                    <li><Link className='nav-text' to='tours'>Tours</Link></li>
                    <li><Link className='nav-text' to='/blogs'>Blogs</Link></li>
                    <li><Link className='nav-text' to='/news'>News</Link></li>
                    <li><Link className='nav-text' to='/contactUs'>Contact Us</Link></li>
                </ul>
            </div>
            <div class="navbar-end">
                <a class="btn-ghost normal-case text-4xl mr-4 bg-orange-500 rounded-full p-2"><Icon icon="heroicons:magnifying-glass" /></a>

                <a class="btn-ghost normal-case text-4xl mr-4 bg-orange-500 rounded-full p-2"><Icon icon="healthicons:ui-user-profile-outline" /></a>
            </div>
        </div>
    );
};

export default Navbar;