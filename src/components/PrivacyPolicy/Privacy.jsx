import React from 'react'
import { Container } from '@mui/material';
// import Navbar from '../Navbar/Navbar'
import PrivacyPolicy from './PrivacyPolicy';
import Footer from '../ContactUs/Footer';
const Privacy = () => {
  return (
    
    <div>
          <div className="min-h-screen flex flex-col">
              {/* <Navbar />
              <div>hii</div> */}
              
              <Container className="flex-grow">
                  <PrivacyPolicy />
              </Container>
              <Footer />
          </div>

    </div>
  )
}

export default Privacy
