
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Navbar from '../Navbar/Navbar';


import {Link} from 'react-router-dom'
import {Button} from "@mui/material"

const Footer = () => {
   
    
    return (
        <footer>
            <div className="bg-custom-dark p-8">

                

              
              <Navbar/>

                 
            

                {/* Subscribe Section */}
                <div className="flex flex-col md:flex-row items-center justify-between bg-custom-grey p-5 mt-8 mx-4 sm:mx-8 lg:mx-36">
                    <h3 className="text-xl font-bold text-custom-off-white text-center md:text-left mb-4 md:mb-0">
                        Subscribe to our newsletter to <br /> get the latest updates and news
                    </h3>
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="bg-custom-grey text-white px-4 py-3 rounded-md w-full sm:w-72 shadow-sm shadow-custom-off-white"
                        />
                        <button className="bg-yellow-400 text-gray-900 px-6 py-3 hover:bg-yellow-500 transition-colors mt-4 sm:mt-0">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Footer Details */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-8 bg-custom-dark text-custom-off-white px-4 sm:px-8 lg:px-36">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-2">Finsweet</h2>
                        <p className="text-gray-400">Finstreet 118, 2561 Fintown</p>
                        <p className="text-gray-400">Hello@finsweet.com | 020 7993 2905</p>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-300 flex items-center space-x-2">
                            <Facebook className="w-5 h-5" />
                            <span>Facebook</span>
                        </a>
                        <a href="#" className="hover:text-gray-300 flex items-center space-x-2">
                            <Twitter className="w-5 h-5" />
                            <span>Twitter</span>
                        </a>
                        <a href="#" className="hover:text-gray-300 flex items-center space-x-2">
                            <Instagram className="w-5 h-5" />
                            <span>Instagram</span>
                        </a>
                        <a href="#" className="hover:text-gray-300 flex items-center space-x-2">
                            <Linkedin className="w-5 h-5" />
                            <span>LinkedIn</span>
                        </a>
                        <li>
                            <Link to='/Privacy'>
                                <Button variant="contained" className="!font-sen !font-bold !text-custom-dark !bg-custom-off-white hover:!bg-yellow-500">Privacy Policy</Button>
                            </Link>
                        </li>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
