import Mainsteps from '@/app/basic-details2/Mainsteps'
import Taxreturn_Nav from '@/app/tax-return/Taxreturn_Nav'
import React from 'react'
import Deduction from '../Deduction'
// import Taxreturn_Nav from '../tax-return/Taxreturn_Nav'

// import Deduction from './Deduction'
// import Mainsteps from '../basic-details2/Mainsteps'




const page = () => {
  return (
    <div className='page'>
    <Taxreturn_Nav/>
   <Mainsteps/>
   <Deduction/>
    </div>
  )
}

export default page
