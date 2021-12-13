import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
    <footer class="footer-1 bg-black text-gray-100 py-8 sm:py-12 font-mont">
        <div class="container mx-auto px-4">
            <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4 content-evenly">
                <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                    <h5 class="text-xl font-bold mb-6">About</h5>
                    <ul class="list-none footer-links">
                        <li class="mb-2">
                            <Link to="/"
                                class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team</Link>
                        </li>
                        <li class="mb-2">
                            <Link to="/"
                                class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Privacy</Link>
                        </li>
                        <li class="mb-2">
                            <Link to="/"
                                class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Terms</Link>
                        </li>
                    </ul>
                </div>
                <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                    <h5 class="text-xl font-bold mb-6">Help</h5>
                    <ul class="list-none footer-links">
                        <li class="mb-2">
                            <Link to="/"
                                class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Support</Link>
                        </li>
                        <li class="mb-2">
                            <Link to="/"
                                class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Help
                                Center</Link>
                        </li>
                        <li class="mb-2">
                            <Link to="/"
                                class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact
                                Us</Link>
                        </li>
                    </ul>
                </div>
                <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto md:absolute md:right-6">
                    <h5 class="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
                    <div class="flex sm:justify-center xl:justify-start">
                        <a href="www.facebook.com"
                            class="w-8 h-8 border-solid border-2 border-gray-400 rounded-full text-center p-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600">
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                        <a href="www.instagram.com"
                            class="w-8 h-8 border-solid border-2 border-gray-400 rounded-full text-center p-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                        <a href="www.twitter.com"
                            class="w-8 h-8 border-solid border-2 border-gray-400 rounded-full text-center pt-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
