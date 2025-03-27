import Taxreturn_Nav from '@/app/tax-return/Taxreturn_Nav'
import React from 'react'
import Mainsteps from '../Mainsteps'
import BasicForm from '../BasicForm'
import Support from '@/app/financial-details/Support'
// import Taxreturn_Nav from '../tax-return/Taxreturn_Nav'
// import BasicForm from './BasicForm'
// import Support from '../financial-details/Support'
// import Mainsteps from './Mainsteps'

const page = () => {
  return (
    <>
      <Taxreturn_Nav/>
  <Mainsteps/>
      <BasicForm/>
      <Support/>
    </>
  )
}

export default page
