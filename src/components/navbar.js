import React from 'react';
import './navbar.css'
import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <div className="cont sticky top-0 color2 sm:block bg-red-200">
            <div className="nav box-border shadow-xl flex justify-between sm:justify-around p-8">
                <ul className="nav-list sm:flex items-center font-bold mont lg:text-2xl uppercase md:text-xl sm:text-lg">
                    <li className="nav-items lg:px-16 md:px-8 sm:px-4 cursor-pointer after:bg-red-400 after:bottom-0 "><Link to="/" className="link">Home</Link></li>
                    <li className="nav-items lg:px-16 md:px-8 sm:px-4 cursor-pointer after:bg-red-400 after:bottom-0 "><Link to="/news" className="link">News</Link></li>
                    <li className="nav-items lg:px-16 md:px-8 sm:px-4 cursor-pointer after:bg-red-400 after:bottom-0 "><Link to="/map" className="link">Map</Link></li>
                </ul>
             {/* Mobile Menu Toggle Button  */}
                {/* <div className="sm:hidden flex items-center mr-8">
                    <button className="outline-none mobile-menu-button">
                        <svg className=" w-6 h-6 menu-button text-gray-700 hover:text-red-300 " x-show="!showMenu" fill="none" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden mobile-menu color font-mont text-xl absolute right-0 w-2/5 uppercase">
                    <ul className="font-mont text-xl flex flex-col ">
                        <li className="active"><a href="/public/index.html"
                            className="block text-lg px-2 py-4 font-mont text-white bg-red-300 font-bold">Home</a></li>
                        <li><a href="#recipes" className="block font-mont text-lg px-2 py-4 font-bold hover:bg-red-300 hover:text-white transition duration-300">Recipes</a></li>
                        <li><a href="#about" className="block font-mont text-lg px-2 py-4 font-bold hover:bg-red-300 hover:text-white transition duration-300">About</a></li>
                        <li><a href="#contact" className="block font-mont text-lg px-2 py-4 font-bold hover:bg-red-300 hover:text-white transition duration-300">Contact Us</a></li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
}
export default Navbar;