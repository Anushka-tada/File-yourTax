import React from 'react'
import "./company.css";

const CompanyRegistration = () => {
  return (
    <div>
      <div className="company-section flex flex-col items-center py-28 px-4">

        <div className="company-inner">
          <h1 className='text-4xl font-semibold mb-8 '>Simplifying the Online Company Registration Process</h1>
          <div className='flex flex-col items-start'>
            <p className=''>Are you confused about picking the right structure for your business? We are here to guide you, from choosing the business
              structure to completing the registration process in a few clicks.</p>
            <div className="tds-btn flex py-3 justify-center rounded-md mt-9">
              <h5>contact Us </h5>
            </div>

          </div>
        </div>

      </div>

      {/* 2nd section guides */}

      <div className="guide-section flex flex-wrap md:flex-nowrap px-3">
        <div className="image-section flex flex-col items-center pb-10">
          <img src="https://static.wixstatic.com/media/ef5ab1_8fb5e457bfdd43d3b928a1d8f9c684fe~mv2.png/v1/fill/w_600,h_530,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/company-registration_edited.png" alt="" />
          <p className='font-semibold text-center '>At FileYourTax, we guide you through the entire process, making it a breeze for business owners and ensuring compliance.</p>
        </div>

        <div className="text-section ">
          <div className="guides flex flex-col justify-center items-center py-16 gap-10">
            <div className="guide flex gap-4 ">
              <img src="https://static.wixstatic.com/media/ef5ab1_445a1c654ecd406b8dd97f35214421f1~mv2.png/v1/fill/w_110,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/rating.png" alt="" width={80} />
              <p className='text-lg font-semibold'>Are you worried about  choosing the appropriate company form for your enterprise?</p>
            </div>
            <div className="guide flex gap-4">
              <img src="https://static.wixstatic.com/media/ef5ab1_c07b43f252d64bc6b07fcff20d70b2b1~mv2.png/v1/fill/w_110,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/registration.png" alt="" width={80} />
              <p className='text-lg font-semibold'>Do you lack knowledge about the registration process?</p>
            </div>
            <div className="guide flex gap-4">
              <img src="https://static.wixstatic.com/media/ef5ab1_869d0e55f2fb46299a9206a42cf061d6~mv2.png/v1/fill/w_110,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/guidelines.png" alt="" width={80} />
              <p className='text-lg font-semibold'>Do you have no idea regarding compliance with regulations and guidelines?
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* steps of registration section */}

      <div className='regist-steps-section flex flex-col items-center text-center py-20 xl:px-40 lg:px-10'>
        <h1 className='text-4xl font-semibold mb-16'>Steps of Registration and Incorporation</h1>
        <div className="regist-steps flex flex-wrap justify-center gap-9">
          <div className="regist-step p-5 pt-9 relative flex flex-col items-center">
            <img src="https://static.wixstatic.com/media/ef5ab1_310032e5355e4eedb996c22a5f3363fd~mv2.png/v1/fill/w_71,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png" alt="" width={57} className='absolute' />
            <h3 className=' font-semibold'>Select an Appropriate Business Structure</h3>
            <p >Choosing the right business structure is the first step in this process. Sole proprietorships, Public Limited Companies, One-Person Companies (OPCs),
              Limited Liability Partnerships (LLPs), and Private Limited Companies are common options. Since every structure has a unique set of benefits
              and drawbacks, careful thought is essential.</p>
          </div>

          <div className="regist-step p-5 pt-9  relative flex flex-col items-center">
            <img src="https://static.wixstatic.com/media/ef5ab1_7fe1199e660e43a9b517710829a1e038~mv2.png/v1/fill/w_71,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png" alt="" width={57} className='absolute ' />
            <h3 className=' font-semibold'>Select Business Name</h3>
            <p>Choosing a name for your business is essential. While deciding on a business name, remember that it has to be original and not
              violate any already-registered trademarks. Following the selection of a suitable name, registration with the appropriate
              authorities is required.</p>
          </div>

          <div className="regist-step p-5 pt-9  relative flex flex-col items-center">
            <img src="https://static.wixstatic.com/media/ef5ab1_c1fd13e7233044dda48ba9dd5437b986~mv2.png/v1/fill/w_71,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3.png" alt="" width={57} className='absolute ' />
            <h3 className=' font-semibold'>Get Director Identification Number (DIN)</h3>
            <p>The Director Identification Number (DIN) is a crucial document that must be submitted to the appropriate authorities.
              It acts as a distinctive identity for those who want to
              become directors of a corporation. Obtaining a DIN is a prerequisite for anyone looking to become a director inside an organisation.</p>
          </div>

          <div className="regist-step p-5 pt-9  relative flex flex-col items-center">
            <img src="https://static.wixstatic.com/media/ef5ab1_aa8cd4c02a0444fb94f3fbd22545ab71~mv2.png/v1/fill/w_71,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4.png" alt="" width={57} className='absolute ' />
            <h3 className=' font-semibold' >Obtain Digital Signature Certificate (DSC)</h3>
            <p>Because business registration is done online, all parties involved in the company must have digital signatures.
              They can put on the various papers that need
              to be submitted via the MCA portal during the registration process.</p>
          </div>

          <div className="regist-step p-5 pt-9  relative flex flex-col items-center">
            <img src="https://static.wixstatic.com/media/ef5ab1_2a5a3354c9454a1880ccd3f64de79a7f~mv2.png/v1/fill/w_71,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5.png" alt="" width={57} className='absolute ' />
            <h3 className=' font-semibold' >Register on the MCA (Ministry of Corporate Affairs) Portal</h3>
            <p>Submission of the SPICe+ form via the MCA portal with the necessary papers is necessary in order to commence the company
              registration procedure. The company's director must first register on the MCA portal in order to use a variety of
              electronic services, such as form submission and public document access, and to help streamline this procedure.</p>
          </div>

          <div className="regist-step p-5 pt-9  relative flex flex-col items-center">
            <img src="https://static.wixstatic.com/media/ef5ab1_b011cb58c9074b75ad6e7835a27bffd6~mv2.png/v1/fill/w_71,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6.png" alt="" width={57} className='absolute ' />
            <h3 className=' font-semibold'>SGet a Certificate of Incorporation</h3>
            <p>Finally, the application is reviewed by the Registrar of Companies after the necessary paperwork is received.
              The Registrar issues a Certificate of Incorporation of the Company if it is successful.</p>
          </div>
        </div>
      </div>


      {/* pricing-section */}

      <div className="pricing-section flex flex-col items-center py-20 xl:px-40 lg:px-10 text-center">
        <h1 className='text-4xl font-semibold mb-16' >FileYourTax Pricing</h1>
        <div className="company-pricings flex gap-5 flex-wrap justify-center">
          <div className="company-pricing py-5 px-2 flex flex-col items-center text-center gap-3">
            <p className='text-xl font-semibold'>Plan amount for OPC Registration</p>
           <div>
           <h1 className='text-4xl font-bold'>₹15,999/-</h1>
           <p className='text-sm'>*Exclusive stamp duty</p>
           </div>
            <div className="pricing-btn py-2 mt-3 flex justify-center">
              <p className='text-white' >I am Interested</p>
            </div>
          </div>

          <div className="company-pricing py-5 px-2 flex flex-col items-center text-center gap-3">
            <p className='text-xl font-semibold '>Plan amount for LLP Registration</p>
            <div>
            <h1 className='text-4xl font-bold'>₹11,999/-</h1>
            <p className='text-sm'>*Exclusive stamp duty</p>
            </div>
            <div className="pricing-btn py-2 mt-3 flex justify-center">
              <p className='text-white'>I am Interested</p>
            </div>
          </div>

          <div className="company-pricing py-5 px-2 flex flex-col items-center text-center gap-3">
            <p className='text-xl font-semibold'>Plan amount for PLC Registration</p>
            <div>
            <h1 className='text-4xl font-bold'>₹12,999/-</h1>
            <p className='text-sm'>*Exclusive stamp duty</p>
            </div>
            <div className="pricing-btn py-2 mt-3 flex justify-center">
              <p className='text-white' >I am Interested</p>
            </div>
          </div>

          <div className="company-pricing py-5 px-2 flex flex-col items-center text-center gap-3">
            <p className='text-xl font-semibold'>Cost of Public Limited Company Registration</p>
           <div>
           <h1 className='text-4xl font-bold'>₹10,000/-</h1>
           <p className='text-sm'>*Exclusive stamp duty</p>
           </div>
            <div className="pricing-btn py-2 mt-3 flex justify-center">
              <p className='text-white' >I am Interested</p>
            </div>
          </div>

        </div>

        <p className='text-sm mt-10 px-3'>Prices shown above may vary. Please click here to contact our tax  experts for complete pricing details.</p>
        <p className='text-sm px-3'>The cost varies depending on the authorised capital, professional fees, stamp duty and the number of directors and members.</p>
      </div>
    </div>
  )
}

export default CompanyRegistration;
