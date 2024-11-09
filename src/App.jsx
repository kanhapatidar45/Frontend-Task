import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import CategorySection from './components/CategorySection/Category'
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import BlogPost from './components/BlogPost/Main'
import AutherSection from './components/AutherSection/Auther'
import Privacy from './components/PrivacyPolicy/Privacy'



const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} /> {/* Home page route */}
          <Route path="/Blog" element={<Blog/>}/>
          <Route path ="/About" element={<AboutUs/>}/>
          <Route path="/contact" element={<ContactUs />} /> {/* Contact page route */}
          <Route path ="/CategorySection" element={<CategorySection/>}/>
          <Route path="/BlogPost" element={<BlogPost/>}/>
          <Route path="/AutherSection" element={<AutherSection/>}/>
          <Route path="/Privacy" element={<Privacy/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
