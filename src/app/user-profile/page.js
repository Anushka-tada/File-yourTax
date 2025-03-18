import React from 'react'
import Profile from './Profile'
import Nav from '../components/Navbar/Nav'
import LogFooter from '../login/LogFooter'

const page = () => {
  return (
    <div>
        <Nav/>
    <Profile/>
    <LogFooter/>
    </div>
  )
}

export default page
