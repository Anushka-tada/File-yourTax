
// import Taxreturn_Nav from "../tax-return/Taxreturn_Nav"
// import Financial from "./Financial"
// import Support from "./Support"

import Taxreturn_Nav from "@/app/tax-return/Taxreturn_Nav"
import Financial from "../Financial"
import Support from "../Support"


const page = () => {
  return (
    <div>
     <Taxreturn_Nav/>
      <Financial/>
   <Support/>
    </div>
  )
}

export default page
