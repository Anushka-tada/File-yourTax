import React from 'react'
import "./Comp7.css"

const Component7 = () => {
  return (
    <div className='section7 flex flex-wrap lg:flex-nowrap lg:gap-52 gap-10 lg:px-24 px-4 py-20 items-center justify-center' >
      <div className="section7-text-part lg:text-left text-center">

     <h1 className='section5-heading lg:font-bold  md:font-bold  font-semibold text-4xl '>Benefits of </h1>
     <h1 className='section5-heading lg:font-bold  md:font-bold  font-semibold text-4xl mb-2'>E-Filing Your ITR</h1>
    <p className=' mb-3 text-lg section7-p mt-5 lg:w-[148%] w-auto'>Effortlessly file your tax returns and enjoy a hassle-free tax season with e-filing</p>

    <a href="/tax-return">
    <div className="section7-btn flex gap-2 inline-flex px-12 py-3  gap-3 rounded-full mt-8">
    <p className='text-white font-medium'>File Now</p>
    <img src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg" alt="File Now" title="File Now"></img>
</div></a>
 
      </div>

      <div className="section7-box-part flex flex-wrap justify-center  gap-7">

      <div className="section7-box rounded-xl px-5 py-12 bg-white flex flex-col justify-between">
        <img src="https://tax2win.in/assets-new/img/new-theme/icon_upload.svg" alt="Upload Form 16" title="Upload Form 16" loading="lazy" width="57" height="57" className="icon"/>
       <h2 className="text-2xl font-bold mb-3 mt-2">File for Tax Refund </h2>
        <p className="mb-4 text-lg">If you have overpaid income tax, you may be eligible to claim a tax refund</p>
       </div>
        
       <div className="section7-box rounded-xl px-5 py-12 bg-white flex flex-col justify-between">
        <img src="https://tax2win.in/assets-new/img/new-theme/icon_upload.svg" alt="Upload Form 16" title="Upload Form 16" loading="lazy" width="57" height="57" className="icon"/>
       <h2 className="text-2xl font-bold mb-3 mt-2">Avoid Late Filing Fee</h2>
        <p className="mb-4 text-lg">Failure to file your Income Tax Return (ITR) on time may result in a
        penalty of up to INR 5,000.</p>
       </div>

       <div className="section7-box rounded-xl px-5 py-12 bg-white flex flex-col justify-between">
        <img src="https://tax2win.in/assets-new/img/new-theme/icon_upload.svg" alt="Upload Form 16" title="Upload Form 16" loading="lazy" width="57" height="57" className="icon"/>
       <h2 className="text-2xl font-bold mb-3 mt-2">Obtaining Visa  </h2>
        <p className="mb-4 text-lg">Foreign consulates may require the submission of your Income Tax
        Returns as part of the visa application process.</p>
       </div>

       <div className="section7-box rounded-xl px-5 py-12 bg-white flex flex-col justify-between">
        <img src="https://tax2win.in/assets-new/img/new-theme/icon_upload.svg" alt="Upload Form 16" title="Upload Form 16" loading="lazy" width="57" height="57" className="icon"/>
       <h2 className="text-2xl font-bold mb-3 mt-2">Easy Loan Approval </h2>
        <p className="mb-4 text-lg">An Income Tax Return is a crucial document for obtaining loan approval.</p>
       </div>

      </div>
    </div>
  )
}

export default Component7
