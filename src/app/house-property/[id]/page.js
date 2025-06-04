import Mainsteps from '@/app/basic-details2/Mainsteps'
import Taxreturn_Nav from '@/app/tax-return/Taxreturn_Nav'
import React from 'react'
import HouseProperty from '../HouseProperty'
import Support from '@/app/financial-details/Support'


const page = () => {
  return (
    <div className='page'>
      <Taxreturn_Nav/>

     <Mainsteps/>
     <HouseProperty/>
     <Support/>
    </div>
  )
}

export default page
