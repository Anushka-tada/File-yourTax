//section 4 of Home Page

import "./Check_status.css"

const Check_status = () => {
  return (
    <div className="section4 flex lg:flex-nowrap py-20  flex-wrap-reverse lg:px-24  px-4 justify-center lg:justify-normal">
      <div className="section4-text lg:me-40 me-2 md:text-center text-center lg:text-left ">
        <h1 className="lg:font-bold  md:font-bold  font-semibold text-5xl text-white mb-8 flex flex-col gap-2">Verify the Status of Your Most Recent
       Income Tax Refund</h1>
        <p className="text-white text-lg mb-10">Verify the status of your most recent income tax refund as updated in the records of the
        Income Tax Department.</p>
        
      </div>

      <div className="section4-image flex justify-center">
      <img src="https://tax2win.in/assets-new/img/new-theme/refund-element.svg" alt="Check Refund Status" loading="lazy" className="lg:w-auto md:w-[70%] w-[90%]"/>
      </div>
    </div>
  )
}

export default Check_status
