import React from 'react'
import "./taxplan.css"

const TaxPlan = () => {
  return (
    <>
      
      {/* Are you struggling with one of these  */}
      <div className="question-section py-20 flex flex-col items-center text-center">
        <h1 className='text-4xl font-semibold mb-8 xl:px-72 lg:px-52 md:px-32 sm:px-16 px-4'>Are you struggling with one of these questions? You definitely need Tax Planning!
        </h1>
        <div className="questions flex  gap-5 justify-center ">
            <div className="question p-7  bg-white rounded-xl flex flex-col items-center gap-3">
                <img src="https://static.wixstatic.com/media/5ef7f2_8211b2d01a444993b58d4a289f54906b~mv2.png/v1/fill/w_64,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Flexible-working-condition.png" alt="" />
                <p className='font-semibold text-lg'>
                Is there a way to minimise my tax liability as a professional or a business owner?</p>
            </div>
            <div className="question p-7  bg-white rounded-xl flex flex-col items-center gap-3">
                <img src="https://static.wixstatic.com/media/5ef7f2_504dc95375a54eedbdf35f200bbb3587~mv2.png/v1/fill/w_48,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cutting-edge-tools.png" alt="" />
                <p className='font-semibold text-lg'>What may be the consequences of the new tax regulations and laws on my status as a taxpayer?</p>
            </div>
            <div className="question p-7  bg-white rounded-xl flex flex-col items-center gap-3">
                <img src="https://static.wixstatic.com/media/5ef7f2_7562af5585a945bcba45800377956811~mv2.png/v1/fill/w_70,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Maximize-your-earnings.png" alt="" />
                <p className='font-semibold text-lg'>How to handle taxes from my foreign income and assets, and tax treaties between India and other countries?</p>
            </div>
            
        </div>
      </div>
      
    </>
  )
}

export default TaxPlan
