import React from 'react'
import Contact from './Contact'
import Footer from './Footer'

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content with responsive padding */}
      <main className="flex-grow px-4 sm:px-6 lg:px-8">
        <Contact />
      </main>

      {/* Footer with responsive padding */}
      <Footer />
    </div>
  )
}

export default ContactUs
