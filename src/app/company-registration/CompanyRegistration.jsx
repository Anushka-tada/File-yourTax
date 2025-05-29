import React from 'react'
import "./company.css";

const CompanyRegistration = () => {
  return (
    <div>
      <div className="company-section flex flex-col items-center py-28 px-4">

        <div className="company-inner">
          <h1 className='text-4xl font-semibold mb-8 '>The
Smart Way to Register Your Company Online</h1>
          <div className='flex flex-col items-start'>
            <p className=''>&quot;Confused about the best structure for your business? Let us simplify it for you—from
choosing the right entity to registering your company online with ease.</p>
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
          <p className='font-semibold text-center '>At FileYourTax, we make the entire process smooth and stress-free for business owners,
while keeping you fully compliant every step of the way.</p>
        </div>

        <div className="text-section ">
          <div className="guides flex flex-col justify-center items-center py-16 gap-10">
            <div className="guide flex gap-4 ">
              <img src="https://static.wixstatic.com/media/ef5ab1_445a1c654ecd406b8dd97f35214421f1~mv2.png/v1/fill/w_110,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/rating.png" alt="" width={80} />
              <p className='text-lg font-semibold'>Choosing the right company structure doesn’t have to be stressful—we’re here to guide
you.</p>
            </div>
            <div className="guide flex gap-4">
              <img src="https://static.wixstatic.com/media/ef5ab1_c07b43f252d64bc6b07fcff20d70b2b1~mv2.png/v1/fill/w_110,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/registration.png" alt="" width={80} />
              <p className='text-lg font-semibold'>Don’t know where to start with company registration? We’ve got you covered.</p>
            </div>
            <div className="guide flex gap-4">
              <img src="https://static.wixstatic.com/media/ef5ab1_869d0e55f2fb46299a9206a42cf061d6~mv2.png/v1/fill/w_110,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/guidelines.png" alt="" width={80} />
              <p className='text-lg font-semibold'>From regulations to registrations, we simplify every step for you.
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
            <h3 className=' font-semibold'>Choosing the Right Business Structure</h3>
            <p >Choosing the right business structure is the first and most crucial step in starting your
enterprise. Common options include Sole Proprietorships, One Person Companies (OPCs), Limited
Liability Partnerships (LLPs), Private Limited Companies, and Public Limited Companies. Each
structure comes with its own advantages and limitations, so it’s important to evaluate them
carefully based on your business goals, liability preferences, compliance requirements, and
scalability plans.</p>
          </div>

          <div className="regist-step p-5 pt-9  relative flex flex-col items-center">
            <img src="https://static.wixstatic.com/media/ef5ab1_7fe1199e660e43a9b517710829a1e038~mv2.png/v1/fill/w_71,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png" alt="" width={57} className='absolute ' />
            <h3 className=' font-semibold'>Choose a Suitable Business Name</h3>
            <p>Choosing a name for your business is a crucial step. Your business name must be unique
and should not infringe upon any existing trademarks. Once you have selected a suitable and
original name, it must be registered with the relevant authorities to secure your brand identity
legally.</p>
          </div>

          <div className="regist-step p-5 pt-9  relative flex flex-col items-center">
            <img src="https://static.wixstatic.com/media/ef5ab1_c1fd13e7233044dda48ba9dd5437b986~mv2.png/v1/fill/w_71,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3.png" alt="" width={57} className='absolute ' />
            <h3 className=' font-semibold'>Obtain Your Director Identification Number (DIN)</h3>
            <p>The Director Identification Number (DIN) is a vital document issued by the appropriate
authorities. It serves as a unique identifier for individuals aspiring to become directors of a

company. Obtaining a DIN is mandatory for anyone who wishes to be appointed as a director in an
organization.</p>
          </div>

          <div className="regist-step p-5 pt-9  relative flex flex-col items-center">
            <img src="https://static.wixstatic.com/media/ef5ab1_aa8cd4c02a0444fb94f3fbd22545ab71~mv2.png/v1/fill/w_71,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4.png" alt="" width={57} className='absolute ' />
            <h3 className=' font-semibold' >Acquire Your Digital Signature Certificate (DSC)</h3>
            <p>Since business registration is conducted online, all individuals involved with the company
must have Digital Signature Certificates (DSCs). These digital signatures are used to electronically
sign the various documents that need to be submitted through the MCA portal during the
registration process.</p>
          </div>

          <div className="regist-step p-5 pt-9  relative flex flex-col items-center">
            <img src="https://static.wixstatic.com/media/ef5ab1_2a5a3354c9454a1880ccd3f64de79a7f~mv2.png/v1/fill/w_71,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5.png" alt="" width={57} className='absolute ' />
            <h3 className=' font-semibold' >Register with the Ministry of Corporate Affairs Online</h3>
            <p>To initiate the company registration process, the SPICe+ form must be submitted through
the MCA portal along with the required documents. Before this, the company’s directors need to
register on the MCA portal to access various online services—such as form submission and public
document retrieval—which helps streamline the entire procedure.</p>
          </div>

          <div className="regist-step p-5 pt-9  relative flex flex-col items-center">
            <img src="https://static.wixstatic.com/media/ef5ab1_b011cb58c9074b75ad6e7835a27bffd6~mv2.png/v1/fill/w_71,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6.png" alt="" width={57} className='absolute ' />
            <h3 className=' font-semibold'>Certificate of Incorporation: Finalizing Your Company Registration</h3>
            <p>Finally, once all the required documents have been submitted, the Registrar of Companies
reviews the application. If everything is in order, the Registrar issues the Certificate of
Incorporation, officially recognizing the company.</p>
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
            <p className='text-xl font-semibold'>Plan amount for Private Limited Registration</p>
            <div>
            <h1 className='text-4xl font-bold'>₹11,999/-</h1>
            <p className='text-sm'>*Exclusive stamp duty</p>
            </div>
            <div className="pricing-btn py-2 mt-3 flex justify-center">
              <p className='text-white' >I am Interested</p>
            </div>
          </div>

          <div className="company-pricing py-5 px-2 flex flex-col items-center text-center gap-3">
            <p className='text-xl font-semibold'>Cost of Company Registration</p>
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
