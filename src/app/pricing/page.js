import React from 'react'
import Nav from '../components/Navbar/Nav'
import Footer from '../homepage/Footer'
import Pricing from './Pricing'
import Need_Support from '../homepage/Need_Support'

const page = () => {
  return (
    <div>
      <Nav/>
      <Pricing/>
      <Need_Support/>
      <Footer/>
    </div>
  )
}

export default page
