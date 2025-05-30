"use client";
import "./bookeca.css"



import React, { useState, useEffect } from "react";

const BookeCA = () => {

  const [selectedService, setSelectedService] = useState('');

  const serviceDetails = [
      { 
          name: 'Expert-Assisted ITR Filing', 
          details: [
            'FileyourTax caters to a wide range of taxpayers, including salaried individuals, freelancers, NRIs, and business owners. We handle complex filings involving multiple Form 16s, capital gains, business income, ESOPs, foreign income, clubbing income, and more.', 
            'Our personalized approach helps maximize your tax savings while minimizing penalties. Trust our experienced CAs to file your returns accurately and confidentially, so you can focus on what matters most.'
        ],
          imgUrl: 'https://emailer.tax2win.in/assets/guides/ca-assisted/expert-assisted-itr-filing.png', 
          btn: 'Book eCA Consultation Now'
      },
      { 
          name: 'Revised & Belated Return Filing', 
          details: [
            'Filed your ITR and spotted an error? Don’t wait until it becomes a problem! Correct your mistakes with a revised return and avoid the hassle of an Income Tax Notice. Under Section 139(5) of the Income-Tax Act, 1961, you have the opportunity to amend any errors by filing a revised return, which will overwrite your original submission.', 
            'Remember, the last date to file a revised ITR is 31st December of the relevant assessment year'
        ],
          imgUrl: 'https://emailer.tax2win.in/assets/guides/ca-assisted/revice-return.png',
          btn: 'Revise your ITR' 
      },
      { 
          name: 'Tax Planning and Advisory ', 
          details: [
            'Don’t let a lack of knowledge result in a tax blunder.Take control of your taxes with Fileyourtax’s Tax Consultancy Services.', 
            'Fileyourtax provides comprehensive tax planning services designed to help you strategically manage your finances and optimize your tax savings. Whether you are an individual, business owner, or NRI, our experienced tax advisors help you navigate the complexities of tax laws and regulations' ,
            'Our tax experts navigate through 300+ tax provisions to find the best according to your tax situation. We provide personalized tax planning, investment and retirement planning, and business tax advisory and ensure that clients take advantage of all eligible deductions and credits.'
        ],
          imgUrl: 'https://emailer.tax2win.in/assets/guides/ca-assisted/tax-planning-and-advisory-services.png' ,
           btn: 'Book Tax Consultation'
      },
      { 
          name: '	NRI & Foreign Income Taxation', 
          details: [
            'Fileyourtax offers specialized tax services for Non-Resident Indians (NRIs) and individuals with foreign income. Our expert team provides comprehensive guidance on tax residency status, foreign income taxation, double taxation avoidance, earnings from share trading, property transactions, and interest income.', 
            'Fileyourtax online tax experts also assist with the repatriation of funds, investment planning, and NRI tax filing, ensuring you comply with Indian tax laws and maximize your savings. Tax experts help NRIs save time and effort while reducing the risk of penalties and legal issues due to tax non-compliance.'
        ],
          imgUrl: 'https://emailer.tax2win.in/assets/guides/ca-assisted/nri-foreign-income-taxation.png' ,
           btn: 'Consult Today'
      },
      { 
          name: 'Tax Notice Response & Resolution', 
          details: [
            'The Income Tax Department may issue notices for various reasons, such as errors in original return filing, incomplete tax payments, or late filing. Fileyourtax offers professional assistance in responding to and resolving tax notices, providing you with expert guidance and peace of mind.', 
            'If you receive a tax notice from the Income Tax Department, you will be connected with a tax expert specializing in this area to navigate the process smoothly. Our experienced team will carefully review the notice and assess your situation. We help you understand the notice, gather the required documents, and prepare an appropriate response. Additionally, we also help you with filing a revised or updated return, if required.'
        ],
          imgUrl: 'https://emailer.Fileyourtax.in/assets/guides/ca-assisted/respond-and-resolve-tax-notices.png' ,
           btn: 'Income Tax Notice Assistance'
      },
      { 
          name: 'Updated Return Filling(ITR-U)', 
          details: [
            'If you have missed filing an income tax return or need to correct errors in a previously filed return, updated ITR filing is the solution for you. Taxpayers have a two-year window from the end of the relevant assessment year to file an updated return.', 
            'Fileyourtax’s experienced tax experts are here to help you navigate the updated return process and ensure your filing is done accurately. Whether you need to declare additional income, claim deductions, or rectify any other issues, we guide you every step of the way.'
        ],
          imgUrl: 'https://emailer.Fileyourtax.in/assets/guides/ca-assisted/updated-return-filing-itr-u.png' ,
           btn: 'File Today'
      },
      { 
          name: 'Advance Tax Filing', 
          details: [
            'If you need to pay advance tax, Fileyourtax can help you calculate and file your payments accurately. Advance tax payments are due in four installments throughout the financial year for taxpayers with income other than salary (e.g., business income, rent). Interest u/s 234B and 234C are charged if the advance tax is not paid by the taxpayer at specified due dates.', 
            'Trust Fileyourtax online CA professionals to guide you through the process and ensure you stay on track with your tax obligations.'
        ],
          imgUrl: 'https://emailer.Fileyourtax.in/assets/guides/ca-assisted/advance-tax-filing.png' ,
           btn: 'Pay Advance Tax'
      }
    ]

    useEffect(() => {
      if (!selectedService) {
          setSelectedService(serviceDetails[0].name);
      }
  }, [selectedService]);
  
  return (
    <>
      {/* top CA Consultants section start*/}
      <div className="ca-consultants py-20 lg:px-20 md:px-10 px-4 flex flex-wrap xl:justify-between lf:justify-between md:justify-between  justify-center items-center">
        <div className="ca-text flex flex-col mb-6 ">
          <h1 className='text-4xl'>Top Online CA Consultants for <span className='font-bold py-2 blue-text'>ITR Filing Services in India</span> </h1>
          <div className='inline-flex gap-1 rounded-full shadow py-1 px-5 my-6'>
            <p>4.5</p>
            <img src="https://tax2win.in/assets-new/img/ca-assisted/google-rating.png" alt="" />
            <p>1998 Ratings</p>
          </div>

          <h4 className="text-2xl font-semibold mb-4">Why Choose FileyourTax?</h4>

          <ul>
            <li className='flex gap-3 items-center mb-2 font-semibold'><img src="https://tax2win.in/assets-new/img/landing/common/tick-icon2.png" alt="" />
              <p>Lowest Tax Filing Fees in India</p>
            </li>
            <li className='flex gap-3 items-center mb-2  font-semibold'><img src="https://tax2win.in/assets-new/img/landing/common/tick-icon2.png" alt="" />
              <p>Reliable & Secure ITR Filing Platform</p>
            </li>
            <li className='flex gap-3 items-center  font-semibold'><img src="https://tax2win.in/assets-new/img/landing/common/tick-icon2.png" alt="" />
              <p>Services for All: Freelancers, NRIs, Business Owners, Salaried Professionals</p>
            </li>
          </ul>
        </div>
        <div className="ca-form lg:p-9 md:p-9 p-4 xl:p-9 lg:me-28 shadow-lg rounded-lg flex flex-col items-center">
          <img src="https://tax2win.in/assets-new/img/ca-assisted/offerbookca.png" alt="" className='banner' />
          <h1 className='text-2xl font-bold'>Register</h1>
          <div>
            <input type="text" placeholder='Full Name' className='py-2 px-5 mb-3 mt-8 rounded-md' />
            <input type="text" placeholder='Email Address' className='py-2 px-5 mb-3 rounded-md' />
            <input type="text" placeholder='Mobile Number' className='py-2  px-5 mb-6 rounded-md' />
          </div>
          <p className='font-sm'>By submitting the form, you agree to our
            <span className='text-blue-500'> Terms & Conditions </span> and <span className='text-blue-500'> Privacy Policy</span></p>
          <div className="book-btn rounded-lg mt-6 flex gap-3 justify-center w-full py-3">
            <p className='text-white text-xl'>Book eCA Consultation</p>
            <img src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg" alt="" />
          </div>
          <div className="google-btn rounded-lg flex gap-3 justify-center w-full py-3 mt-4">
            <img src="https://tax2win.in/assets-new/img/google-icon.svg" alt="" height={25} width={25} />
            <p className=' font-semibold text-xl '>Sign in with Google</p>
          </div>
        </div>



      </div>


      {/* ratings section start  */}

      <div className="ratings flex flex-wrap justify-center gap-5 py-14">
        <div className="rating mx-5 flex flex-col justify-center items-center gap-1">
          <img src="https://tax2win.in/assets-new/img/tax-advisory/rating.svg" alt="" />
          <p className='text-xl font-bold mt-2'>4.5</p>
          <p className='text-lg'>Google Rating</p>
        </div>

        <div className="rating mx-5 flex flex-col justify-center items-center gap-1">
          <img src="https://tax2win.in/assets-new/img/tax-advisory/satisfaction.svg" alt="" />
          <p className='text-xl font-bold mt-2'>Over 1 Lakh</p>
          <p className='text-lg'>Satisfied Customers</p>
        </div>

        <div className="rating mx-5 flex flex-col justify-center items-center gap-1">
          <img src="https://tax2win.in/assets-new/img/tax-advisory/already-saved.svg" alt="" />
          <p className='text-xl font-bold mt-2'>₹500+ Crore</p>
          <p className='text-lg'>Saved Already!</p>
        </div>

        <div className="rating mx-5 flex flex-col justify-center items-center gap-1">
          <img src="https://tax2win.in/assets-new/img/tax-advisory/satisfaction.svg" alt="" />
          <p className='text-xl font-bold mt-2'>7+ Years</p>
          <p className='text-lg'> of Industry Experience</p>
        </div>

      </div>

      {/* tax return filling section start */}

      <div className="tax-return-filling flex flex-col justify-center items-center  py-14">
        <div className="text-center">
          <h1 className='text-4xl font-bold py-4' >File Your Tax Online with Expert CA Assistance for Income Tax Return (ITR) Filing</h1>
          <p>Simplify your tax filing with FileyourTax’s expert online CA consultation and seamless ITR filing services.</p>

        </div>
        <div className="features flex  gap-5 mt-7">
          <div className=" flex justify-center flex-wrap gap-5">
            <div className='flex flex-col gap-3 bg-white step1 rounded-2xl p-5 '>
              <div className="flex items-center gap-4">
                <img src="https://tax2win.in/assets-new/img/ca-assisted/accurate-tax-compliant.svg" alt="" height={50} width={50} />
                <h3 className='text-xl font-semibold '>Accurate & Tax Compliant:</h3>
              </div>
              <p className='text-lg'>Our platform automatically imports data from your Form 16/Form 26AS and offers step-by-step assistance throughout the filing process, ensuring accuracy and compliance.</p>
            </div>
            <div className='flex flex-col gap-3 bg-white step1 rounded-2xl p-5 '>
              <div className="flex items-center gap-4">
                <img src="https://tax2win.in/assets-new/img/ca-assisted/online-process.svg" alt="" height={50} width={50} />
                <h3 className='text-xl font-semibold '>Fully Online Process:</h3>
              </div>
              <p className='text-lg'>Enjoy the convenience of a fully assisted online CA service—no visits to tax consultant offices required. Track your e-filing status directly through FileyourTax.</p>
            </div>
            <div className='flex flex-col gap-3 bg-white step1 rounded-2xl p-5'>
              <div className="flex items-center gap-4">
                <img src="https://tax2win.in/assets-new/img/ca-assisted/save-taxes.svg" alt="" height={50} width={50} />
                <h3 className='text-xl font-semibold '>Personalized Tax Advisory:</h3>
              </div>
              <p className='text-lg'>Receive expert advice on tax-saving investments tailored to your profile, along with access to financial tools to manage your wealth more effectively.</p>
            </div>
          </div>
        </div>
      </div>


      {/* how it works section starts */}

      <div className="how-it-works flex flex-col justify-center items-center py-16 ">
        <div className="work-btn px-3 rounded-full inline-flex">
          <p >How it Works</p>
        </div>

        <div className="text-center px-6">
          <h1 className='text-4xl font-bold mt-5'>How our Online CA-Assisted ITR Filing Works?</h1>
        </div>

        <div className="works flex flex-wrap justify-center gap-5 mt-20">
          <div className="work flex flex-wrap lg:flex-nowrap md:flex-nowrap items-start gap-5 rounded-xl p-9">
            <img src="https://tax2win.in/assets-new/img/ca-assisted/hire-your-personal-eca.svg" alt="" width={40} height={40} />
            <div className='flex flex-col gap-4 '>
              <h2 className='text-xl font-bold'>Get Online CA Consultation & Upload Documents</h2>
              <p className='text-lg'>Register with your name, email, and phone number. Pay the professional fee and gain access to your dedicated online CA.</p>
            </div>
          </div>

          <div className="work flex flex-wrap lg:flex-nowrap md:flex-nowrap items-start gap-5 rounded-xl p-9">
            <img src="https://tax2win.in/assets-new/img/ca-assisted/eca-reviews.svg" alt="" width={40} height={40} />
            <div className='flex flex-col gap-4 '>
              <h2 className='text-xl font-bold'>CA Reviews Your Documents & Consults You</h2>
              <p className='text-lg'>Our CA experts meticulously verify your documents and connect with you to discuss income, deductions, and investments to maximize your tax benefits.</p>
            </div>
          </div>

          <div className="work flex flex-wrap lg:flex-nowrap md:flex-nowrap items-start gap-5 rounded-xl p-9">
            <img src="https://tax2win.in/assets-new/img/ca-assisted/relaxicon.svg" alt="" width={40} height={40} />
            <div className='flex flex-col gap-4'>
              <h2 className='text-xl font-bold'>Relax & Let Us Handle the Process</h2>
              <p className='text-lg'>We take care of all complexities—ensuring maximum deductions, verifying your Form 26AS with the tax department, and optimizing your tax savings.</p>
            </div>
          </div>

          <div className="work flex flex-wrap lg:flex-nowrap md:flex-nowrap items-start gap-5 rounded-xl p-9">
            <img src="https://tax2win.in/assets-new/img/ca-assisted/itr-file.svg" alt="" width={40} height={40} />
            <div className='flex flex-col gap-4 '>
              <h2 className='text-xl font-bold'>Approve Your ITR & Complete Filing</h2>
              <p className='text-lg'>You receive a detailed summary of your Income Tax Return for approval. Once approved, your ITR is filed directly from your dashboard.</p>
            </div>
          </div>


        </div>
      </div>

      {/* looking for CA section start */}

      <div className="looking-ca flex flex-col justify-center py-16 xl:px-20 lg:px-20 md:px-10 sm:px-5 px-4">
            <div className="text-center px-7">
                <h1 className='text-4xl font-bold mt-5'>Looking for an Online CA Service / CA Near Me?</h1>
            </div>

            <div className="ca-service-section flex flex-wrap justify-center items-start gap-5 mt-16">
                <div className="ca-services  flex flex-col gap-1">
                    {serviceDetails.map(service => (
                         <div
                         key={service.name}
                         className={`ca-service flex justify-between items-center bg-white p-4 rounded-lg cursor-pointer ${selectedService === service.name ? 'bg-green-100' : ''}`}
                         onClick={() => setSelectedService(service.name)}
                     >
                            <div className="flex gap-4">
                                <img src={service.imgUrl} alt="" height={22} width={22} />
                                <p className='font-semibold'>{service.name}</p>
                            </div>
                            <img src="https://emailer.tax2win.in/assets/guides/ca-assisted/green-arrow.png" alt="" width={24} height={15} />
                        </div>
                    ))}
                </div>

                <div className="services-details d-flex flex-col justify-center p-3 lg:p-12 xl:p-12 md:p-8 sm:p-5 bg-white rounded-xl">
                    {selectedService ? (
                        <>
                        {serviceDetails.find(service => service.name === selectedService)?.details.map((detail, index) => (
                            <p className="text-lg mt-4" key={index}>{detail}</p>
                        ))}
                        <div className="service-btn mt-4">
                            <button className="p-2 px-5 rounded-full mt-3 bg-blue text-white flex gap-3">
                                {serviceDetails.find(service => service.name === selectedService)?.btn}
                                <img src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg" alt="" />
                            </button>
                        </div>
                    </>
                    ) : (
                        <p>Select a service to see the details.</p>
                    )}
                </div>
            </div>
        </div>
    </>
  )
}

export default BookeCA
