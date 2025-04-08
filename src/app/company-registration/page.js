import React from 'react'
import CompanyRegistration from './CompanyRegistration'
import Nav from '../components/Navbar/Nav'
import Footer from '../homepage/Footer'

const page = () => {
  return (
    <div>
        <Nav/>
      <CompanyRegistration/>
      <Footer/>
    </div>
  )
}

export default page
