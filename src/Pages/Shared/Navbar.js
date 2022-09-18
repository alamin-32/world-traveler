import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/images/logo1.png'
import { Icon } from '@iconify/react';

const Navbar = () => {
    return (
        <div class="navbar bg-base-100 lg:py-8 lg:px-40">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabindex="0">
                            <a class="justify-between">
                                Parent
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl"><img src={logo1} alt="" /></a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal text-lg font-bold p-0">
                    <li><Link>Home</Link></li>
                    <li><Link>Destinations</Link></li>
                    <li><Link>Tours</Link></li>
                    <li><Link>Pages</Link></li>
                    <li><Link>News</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
            </div>
            <div class="navbar-end">
                <a class="btn-ghost normal-case text-4xl mr-4 bg-orange-500 rounded-full p-2"><Icon icon="heroicons:magnifying-glass" /></a>
                
                <a  class="btn-ghost normal-case text-4xl mr-4 bg-orange-500 rounded-full p-2"><Icon icon="healthicons:ui-user-profile-outline" /></a>
            </div>
        </div>
    );
};

export default Navbar;