// components/Home/Home.jsx
import React from 'react';
import Header from './Header';  // Make sure the file name is 'Header.jsx' and path is correct
import FeaturedPosts from './FeaturedPosts';
import Categories from '../Blog/Categories';

import Footer from '../ContactUs/Footer';
import TeamSection from '../AboutUs/TeamSection';
import JoinTeam from '../AboutUs/JoinTeam';
import Testimonial from './Testimonial';



const Home = () => {
    return (
        <div>
            <Header />  {/* Correct way to use the Header component */}
            <FeaturedPosts/>
          
            <Categories/>
            <TeamSection/>
            <Testimonial/>
            <JoinTeam/>
            <Footer/>
        </div>
    );
};

export default Home;
