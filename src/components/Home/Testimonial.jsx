import React from 'react';
import floyd from '../../assets/Client-First - IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313 (2).svg';

const Testimonial = () => {
    return (
        <div className="flex flex-col bg-custom-light-beige p-10 rounded-lg shadow-lg w-full md:w-5/6 lg:w-4/5 xl:w-3/4 max-w-[1600px] mx-auto">
            {/* First Row */}
            <div className="flex items-start justify-between pb-4 relative mx-36">
                {/* Left Side: Heading and Description */}
                <div>
                    <p >Testimonials.</p>
                    <h3 className="text-xl font-bold text-gray-800">What People Say <br />About Our Blog</h3>
                    <p>Lorem Ipsum has been the industry's standard dummy <br />text ever since </p>
                </div>

                {/* Right Side: Description Only */}
                <div className='flex flex-col'>
                    <p className='font-bold'>Lorem Ipsum has been the industry's standard <br /> dummy text ever since the 1500s ,  when an <br /> unknown printer took a galley of type.</p>
                    <div className="flex flex-col p-6 w-full md:w-3/4 lg:w-1/2 mx-auto">
                        <div className="flex items-center justify-between space-x-4 -ml-28">
                            {/* Image */}
                            <img
                                src={floyd}  // Replace with your image URL
                                alt="Card image"
                                className="w-16 h-16 rounded-full object-cover"
                            />

                            {/* Heading */}
                            <h3 className="text-xl font-semibold text-gray-800">Jonathan Vellan</h3>

                            {/* Arrow Button */}
                            <button className="text-blue-500 hover:text-blue-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l4-4m0 0l-4-4m4 4H7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
