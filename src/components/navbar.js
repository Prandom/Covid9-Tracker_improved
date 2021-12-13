import React from 'react';
import './navbar.css'
import {Link} from 'react-router-dom'
import DarkMode from './darkMode';
function Navbar(){
    const styles = `
        .a{
            fill:#418fde;
        }
        `
    const toggle = ()=>{
        const menuDiv = document.getElementById('toggle');
        menuDiv.classList.toggle('hidden');
    }
    return(
        <div className="cont sticky top-0 dark:bg-blue-800">
            
            <div className="nav box-border p-5 flex flex-row justify-between">
                <div className="logo flex justify-evenly items-center md:pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-7 w-7 mr-1' viewBox="0 0 48 48"><defs><style>{styles}</style></defs><path class="a" d="M46.5,19A1.49977,1.49977,0,0,0,45,20.5V22H40.87225a16.9,16.9,0,0,0-3.53-8.51367l2.92121-2.92139,1.17582.99561a1.49993,1.49993,0,1,0,2.12134-2.1211l-4.99991-5a1.4999,1.4999,0,0,0-2.12127,2.1211l.99565,1.17578-2.92139,2.92138A16.90205,16.90205,0,0,0,26,7.12793V3h1.5a1.5,1.5,0,0,0,0-3h-7a1.5,1.5,0,0,0,0,3H22V7.12793a16.90205,16.90205,0,0,0-8.51367,3.52978L10.56494,7.73633l.99565-1.17578a1.4999,1.4999,0,0,0-2.12127-2.1211l-4.88475,5a1.49993,1.49993,0,0,0,2.12133,2.1211l1.06067-.99561,2.92121,2.92139A16.9,16.9,0,0,0,7.12775,22H3V20.5a1.5,1.5,0,0,0-3,0v7a1.5,1.5,0,0,0,3,0V26H7.12775a16.9,16.9,0,0,0,3.53,8.51367L7.73657,37.43506l-1.17582-.99561a1.49993,1.49993,0,0,0-2.12134,2.1211l4.99991,5a1.4999,1.4999,0,1,0,2.12127-2.1211l-.99565-1.17578,2.92127-2.92138A16.902,16.902,0,0,0,22,40.87207V45H20.5a1.5,1.5,0,0,0,0,3h7a1.5,1.5,0,0,0,0-3H26V40.87207a16.902,16.902,0,0,0,8.51379-3.52978l2.92127,2.92138-.99565,1.17578a1.4999,1.4999,0,0,0,2.12127,2.1211l4.99991-5a1.49993,1.49993,0,1,0-2.12134-2.1211l-1.17582.99561-2.92121-2.92139A16.9,16.9,0,0,0,40.87225,26H45v1.5a1.5,1.5,0,0,0,3,0v-7A1.49977,1.49977,0,0,0,46.5,19Zm-28,1A3.5,3.5,0,1,1,22,16.5,3.49994,3.49994,0,0,1,18.5,20ZM30,33a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,30,33Z"/></svg>
                    <div className="logo-content hans font-semibold tracking-wider text-xl pl-2 pb-2 text-gray-500">Covid19 Tracker<span className='dot text-4xl'>.</span></div>
                </div>
                <ul className="nav-list hidden sm:flex justify-around md:justify-evenly items-center font-bold mont lg:text-2xl uppercase sm:text-lg">
                    <li className="nav-items lg:px-10 md:px-8 sm:px-4 cursor-pointer after:bg-red-400 after:bottom-0 "><Link to="/" className="link">Home</Link></li>
                    <li className="nav-items lg:px-10 md:px-8 sm:px-4 cursor-pointer after:bg-red-400 after:bottom-0 "><Link to="/news" className="link">News</Link></li>
                    <li className="nav-items lg:px-10 md:px-8 sm:px-4 cursor-pointer after:bg-red-400 after:bottom-0 "><Link to="/map" className="link">Map</Link></li>
                </ul>
                {/* Mobile Menu Toggle Button  */}
                <div className="sm:hidden flex items-center mr-8" onClick={toggle}>
                    <button className="outline-none mobile-menu-button">
                        <svg className=" w-6 h-6 menu-button text-gray-700 hover:text-blue-500 " x-show="!showMenu" fill="none" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="hidden absolute right-0 mobile-menu color text-xl w-2/5 uppercase tracking-widest font-medium" id='toggle' >
                    <ul className="mont text-xl flex flex-col justify-center items-center ">
                        <li className="active w-full text-center"><Link to='/' className="block menu-items text-lg py-4 text-white bg-blue-300 border-b-2 border-gray-100">Home</Link></li>
                        <li className=' w-full hover:bg-blue-300 hover:text-white text-center'><Link to="/news" className="block menu-items text-lg py-4 duration-300 border-b-2 border-gray-100">News</Link></li>
                        <li className='w-full hover:bg-blue-300 hover:text-white text-center'><Link to="/map" className=" block menu-items text-lg py-4 duration-300 border-b-2 border-gray-100">Map</Link></li>
                    </ul>
            </div>
            <DarkMode/>
        </div>
      
    );
}
export default Navbar;