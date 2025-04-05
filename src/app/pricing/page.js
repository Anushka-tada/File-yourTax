import React from 'react'
import Nav from '../components/Navbar/Nav'
import Footer from '../homepage/Footer'

import Need_Support from '../homepage/Need_Support'
import Pricing from './Pricing'

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
