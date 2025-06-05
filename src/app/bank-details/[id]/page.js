import Mainsteps from '@/app/basic-details2/Mainsteps'
import Taxreturn_Nav from '@/app/tax-return/Taxreturn_Nav'
import React from 'react'
import BankDetails from '../BankDetails'
import Support from '@/app/financial-details/Support'
// import Taxreturn_Nav from '../tax-return/Taxreturn_Nav'

// import Support from '../financial-details/Support'
// import BankDetails from './BankDetails'
// import Mainsteps from '../basic-details2/Mainsteps'

const page = () => {
  return (
    <div>
     <Taxreturn_Nav/>
    <Mainsteps/>
     <BankDetails/>
     <Support/>
    </div>
  )
}

export default page
