// components/Home/Home.jsx
import React from 'react';
import HeroSection from './Herosection';  // Correct import path to HeroSection component
import heroImage from '../../assets/Client-First - IMAGES/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg'; // Example image import

const Header = () => {
    const handleGetStarted = () => {
        console.log("Get Started clicked");
    };

    const handleLearnMore = () => {
        console.log("Learn More clicked");
    };

    return (
        <div>
            <HeroSection
                backgroundImage={heroImage}
                description1="POSTED ON STARTUP"  // First description
                heading="Step-by-step guide to choosing great font pairs"  // Heading text
                description2="By John Doe | May 23, 2022"  // Second description
                description3="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."  // Third description
                buttonText1="Get Started"  // Button text 1
                onButtonClick1={handleGetStarted}  // Button 1 onClick handler

            />

            {/* Additional content for home page */}
        </div>
    );
};

export default Header;
