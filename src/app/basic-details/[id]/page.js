import Taxreturn_Nav from '@/app/tax-return/Taxreturn_Nav'
import React from 'react'
import BasicDetails from '../BasicDetails'
import Support from '@/app/financial-details/Support'
// import Taxreturn_Nav from '../tax-return/Taxreturn_Nav'
// import Support from '../financial-details/Support'
// import BasicDetails from './BasicDetails'

const page = () => {
  return (
    <div >
     <Taxreturn_Nav/>
    <BasicDetails/>
      <Support/>
    </div>
  )
}

export default page
