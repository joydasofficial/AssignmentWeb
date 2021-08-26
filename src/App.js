import React from 'react'
import Hero from './Components/Hero/Hero'
import Design from './Components/Design/Design'
import Branding from './Components/Branding/Branding'
import Navbar from './Components/Navbar/Navbar'
import MobileNavbar from './Components/Navbar/MobileNavbar'

const App = () => {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <Hero />
      <Design />
      <Branding />
    </>
  )
}

export default App
