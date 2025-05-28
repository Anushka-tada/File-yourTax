
"use client"
import React, { useEffect, useState } from 'react';
import "./pricing.css"

const ITRfiling = () => {

    const [pricingData, setPricingData] = useState([]);

    // Fetch data from API
    useEffect(() => {
        fetch('https://backend-data-five.vercel.app/api/pricing/all')
          .then((response) => response.json())
          .then((apiResponse) => {
            console.log('Fetched Data:', apiResponse);
            setPricingData(apiResponse.data); // Extract the 'data' property
          })
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
      
  return (
    <div>
           <div>
             <div className="itr-section flex-wrap flex gap-5 items-center justify-center">
                     <div className='p-2'>
                     <h2 className='text-3xl font-semibold text-white mb-3'>ITR Filing</h2>
                      <p className=' text-white text-sm itr-para' >Relax and unwind—let us handle your tax filing hassle-free. Our experts ensure you save both time
                      and money</p>
                     </div>

                     <div className='flex flex-wrap justify-center itr-inner gap-4 p-2'>
                     <div className="flex gap-2 items-center">
                     <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                        <p className='text-lg text-white'>1-1 Expert Assistance</p>
                        </div>
                        <div className="flex gap-2 items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                        <p className='text-lg text-white'>Tax Return Preparation</p>
                        </div>
                        <div className="flex gap-2 items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                        <p className='text-lg text-white'>Notices Mangement</p>
                        </div>
                     </div>
                </div>

            <div className="filling-page flex flex-col items-center xl:mx-40 lg:mx-32 md:mx-20 sm:mx-16 mx-3 my-7 px-8 rounded-lg py-6 ">
                <h1 className='font-bold text-4xl pricing-heading my-5 text-center'>Designed to meet your specific needs.</h1>
                <div className="all-pricings p-5 flex justify-center gap-3 flex-wrap">
  {/* Map pricing data */}
  {pricingData.map((item, index) => (
    <div className="pricing p-4 flex flex-col justify-between rounded-md" key={index}>
      <div>
        <img src={item.image} alt={item.title} className='price-top-img' />
        <h4 className="text-xl font-semibold mt-2 mb-4">{item.title}</h4>
        <p className="mt-2 text-sm">{item.subtitle}</p>
        <div className="price flex gap-3 items-center">
          <p className="text-5xl font-semibold text-blue">₹{item.pricing}</p>
          {/* <p className="text-sm">/Year</p> */}
        </div>
       
        {/* <p className="my-4 suited font-bold">SUITED FOR:</p> */}
        {/* Directly render the service sentence */}
        <p className="mt-2 text-sm">{item.service}</p>
        {item.suitedFor && (
          <div className="suited-for mt-4">
            <p className="my-4 suited font-bold">SUITED FOR:</p>
            <ul className="list-disc list-inside">
              {item.suitedFor.map((point, i) => (
               
                <div className='flex gap-3 mt-2 items-center'>
                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                <li key={i} className="mt-1 text-sm">{point}</li>
            </div>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="get-btn flex justify-center mb-4 w-full rounded-md py-2">
        <p className="btn-p">Get Started Now</p>
      </div>
    </div>
  ))}
</div>




               <div className='flex flex-col items-center text-center my-10  xl:mx-40 lg:mx-32 md:mx-20 sm:mx-16 mx-3 gap-2'>
               <p className='text-xl font-semibold'>*For Balance Sheet, Profit & Loss Statement, and Attestation: ₹1000.</p>
                <p className='text-xl font-semibold'>*If you have received any arrears and wish to claim relief, an additional charge of Rs. 499 will apply
                beyond the stated plans.</p>

               </div>
            </div>

        </div>
    </div>
  )
}

export default ITRfiling
