import React from 'react';
import ArrowIcon from '../Ui/ArrowIcon';
import { Button } from '@mui/material';

const HeroSection = ({
    backgroundImage,  // Background image URL (prop)
    heading,           // Heading text (prop)
    description1,      // First description text (prop)
    description2,      // Second description text (prop)
    description3,      // Third description text (prop)
    buttonText1,       // Button text (prop)
    onButtonClick1,    // Button onClick handler (prop)
}) => {
    return (
        <section
            className="relative bg-cover bg-center h-screen" // Background image settings
            style={{ backgroundImage: `url(${backgroundImage})` }} // Background image
            id="hero"
        >
            {/* Overlay to dim the background */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content Section (Heading, Descriptions, Buttons) */}
            <div className="relative z-10 flex items-center h-full text-white px-6 md:px-36 ">
                <div className="max-w-3xl w-full text-left"> {/* Ensure content is left-aligned */}
                    {/* First Description */}
                    <p className="text-lg md:text-xl mb-4 font-inter">{description1}</p>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-sen">{heading}</h1>

                    {/* Second Description */}
                    <p className="text-lg md:text-xl mb-4 font-inter font-bold">{description2}</p>

                    {/* Third Description */}
                    <p className="text-lg md:text-xl mb-8 font-inter">{description3}</p>

                    {/* Button */}
                    <div className="text-left">


                     <Button variant="contained" className="!font-sen !font-bold  !text-custom-dark !bg-custom-yellow hover:!bg-custom-purple">Read More
                           <ArrowIcon/>
                     </Button>
                    
                
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
