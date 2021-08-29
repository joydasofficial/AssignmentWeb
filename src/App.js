import React from 'react'
import Hero from './Components/Hero/Hero'
import Design from './Components/Design/Design'
import Branding from './Components/Branding/Branding'
import Navbar from './Components/Navbar/Navbar'
import MobileNavbar from './Components/Navbar/MobileNavbar'
import About from './Components/About/About'
import Grid from './Components/Grid/Grid'
import Testimonials from './Components/Testimonials/Testimonials'
import CTA from './Components/CTA/CTA'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <Hero />
      <About />
      <Design />
      <Grid />
      <Branding />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default App
