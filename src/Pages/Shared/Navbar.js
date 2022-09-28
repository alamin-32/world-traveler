import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/images/logo1.png'
import { Icon } from '@iconify/react';
import './Navbar.css'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from './Loading';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user);

    if (loading) {
        return <Loading></Loading>
    }

    const logout = () => {
        signOut(auth);
    };

    return (
        <div class="navbar bg-base-100 lg:py-6 lg:px-40">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='nav-text' to='/'>Home</Link></li>
                        <li><Link className='nav-text' to='/destinationList'>Destinations</Link></li>
                        <li><Link className='nav-text' to='/tours'>Tours</Link></li>
                        <li><Link className='nav-text' to='/blogs'>Blogs</Link></li>
                        <li><Link className='nav-text' to='/news'>News</Link></li>
                        <li><Link className='nav-text' to='/contactUs'>Contact Us</Link></li>
                    </ul>
                </div>
                <Link><h1 className='text-4xl font-extrabold  text-orange-500'>Global Traveler</h1></Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal text-lg font-bold p-0">
                    <li><Link className='nav-text font-extrabold' to='/'>Home</Link></li>
                    <li><Link className='dropdown dropdown-hover nav-text font-extrabold' to='/destinationList'>Destinations</Link>
                    </li>
                    <li><Link className='nav-text font-extrabold' to='tours'>Tours</Link></li>
                    <li><Link className='nav-text font-extrabold' to='/reviews'>Review</Link></li>
                    <li ><Link className='nav-text font-extrabold' to='/ourTeams'>Our Team</Link></li>
                    <li><Link className='nav-text font-extrabold' to='/contactUs'>Contact Us</Link></li>
                </ul>
            </div>


            <div class="navbar-end">
                {
                    user ?
                        <div className='flex'>
                            <button
                                className="p-2 bg-orange-500 rounded-lg text-white font-bold">
                                {user.displayName}
                            </button>
                            <Icon onClick={logout} icon="ri:logout-circle-r-fill" color="#e8604c" width="50" height="50" />
                        </div>
                        :
                        <Link to='/logIn' class=" normal-case mr-4 rounded-full p-2">
                            <Icon icon="healthicons:ui-user-profile-outline" color="#EA580C" width="50" height="50" />
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;