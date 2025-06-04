"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import "./Efilling.css"
import axios from "axios";

const Efilling_platform = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    salaryPension: false,
    houseProperty: true,
    businessProfession: false,
    capitalGains: false,
    otherSources: false,
    foreignSource: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value === 'Yes',
    });
  };

  const router = useRouter();


  const handleContinue = async () => {



    const dataToStore = {
      isSalary: formData.salaryPension,
      isHouseProperty: formData.houseProperty,
      isProfession: formData.businessProfession,
      isCapitalGain: formData.capitalGains,
      isOtherSource: formData.otherSources,
      isForeignSource: formData.foreignSource,
    };


    // console.log(dataToStore);

    try {
      setIsLoading(true);
      const response = await axios.post("https://backend-data-five.vercel.app/api/itr/create", dataToStore);

      console.log("Data sent successfully:", response.data);
      const userId = response.data.data._id;


      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.email) {
        const email = user.email;

        // Update user's progress in localStorage
        const progress = JSON.parse(localStorage.getItem("formProgress")) || {};
        progress[email] = 2;
        localStorage.setItem("formProgress", JSON.stringify(progress));
      }


      router.push(`/financial-details/${userId}`);
    } catch (error) {

      console.error("Error sending data to the API:", error);
    }
    // finally {
    //   setIsLoading(false); 
    // }
  };


  return (
    <div className='page'>

      {/* income tax return e-filling */}
      {isLoading ? (
        <div className="loading-indicator flex flex-col items-center justify-center">
          <img src="/assest/animation.gif" alt="Loading..." width="80" height="80" />
          <p className="text-lg font-semibold mt-3">Please wait, loading...</p>
        </div>
      ) :
        (
          <>
            <div className='eFilling-outer flex flex-col items-center py-8 px-4'>
              <h1 className='font-bold text-3xl mb-3'>Income Tax eFiling Platform</h1>
              <p className='text-lg'>File Your Tax makes Income Tax Return (ITR) filing simple, secure, and efficient. Begin your tax filing journey with ease.</p>
              <p className='text-lg mb-5'>Select your sources of income to proceed with ITR filing:</p>

              <div className="efilling-questions bg-white p-5 rounded-md lg:w-3/4 md:w-11/12">
                {/* Q1 */}
                <div className="efill-que flex flex-wrap justify-between py-5 relative">
                  <p className='text-xl font-semibold mb-2 lg:mb-0 md:mb-0'>Q1. Do you have income from Salary or Pension?</p>
                  <div className='flex gap-3 font-bold text-lg'>
                    <div className='flex gap-1 items-center'>
                      <input type="radio" name="salaryPension" value="Yes" className='h-5 w-5 custom-radio' onChange={handleChange} />
                      <p>Yes</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <input type="radio" name="salaryPension" value="No" className='h-5 w-5 custom-radio' defaultChecked onChange={handleChange} />
                      <p>No</p>
                    </div>
                    <div className="relative group">
                      <div className='bg-gray-200 rounded-full p-2 cursor-pointer'>
                        <img src="https://tax2win.in/assets-new/img/source-of-income/info.svg" width="10" alt="info" />
                      </div>
                      <div className="absolute top-10 right-0 z-10 hidden group-hover:block bg-white text-sm text-gray-700 p-3 rounded-md shadow-lg w-72">
                      Includes monthly salary, allowances, or pension income.
                      </div>
                    </div>
                  </div>
                </div>

                
                {/* Q2 */}
                <div className="efill-que flex flex-wrap justify-between py-5 relative">
                  <p className='text-xl font-semibold mb-2 lg:mb-0 md:mb-0'>Q2. Do you have income from House Property (e.g., rental income or housing loan benefits)?</p>
                  <div className='flex gap-3 font-bold text-lg'>
                    <div className='flex gap-1 items-center'>
                      <input type="radio" name="houseProperty" value="Yes" className='h-5 w-5 custom-radio' defaultChecked onChange={handleChange} />
                      <p>Yes</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <input type="radio" name="houseProperty" value="No" className='h-5 w-5 custom-radio' onChange={handleChange} />
                      <p>No</p>
                    </div>
                    <div className="relative group">
                      <div className='bg-gray-200 rounded-full p-2 cursor-pointer'>
                        <img src="https://tax2win.in/assets-new/img/source-of-income/info.svg" width="10" alt="info" />
                      </div>
                      <div className="absolute top-10 right-0 z-10 hidden group-hover:block bg-white text-sm text-gray-700 p-3 rounded-md shadow-lg w-72">
                      Covers rental income and interest on home loan deductions.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q3 */}
                <div className="efill-que flex flex-wrap justify-between py-5 relative">
                  <p className='text-xl font-semibold mb-2 lg:mb-0 md:mb-0'>Q3. Do you have income from Business or Profession?</p>
                  <div className='flex gap-3 font-bold text-lg'>
                    <div className='flex gap-1 items-center'>
                      <input type="radio" name="businessProfession" value="Yes" className='h-5 w-5 custom-radio' onChange={handleChange} />
                      <p>Yes</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <input type="radio" name="businessProfession" value="No" className='h-5 w-5 custom-radio' defaultChecked onChange={handleChange} />
                      <p>No</p>
                    </div>
                    <div className="relative group">
                      <div className='bg-gray-200 rounded-full p-2 cursor-pointer'>
                        <img src="https://tax2win.in/assets-new/img/source-of-income/info.svg" width="10" alt="info" />
                      </div>
                      <div className="absolute top-10 right-0 z-10 hidden group-hover:block bg-white text-sm text-gray-700 p-3 rounded-md shadow-lg w-72">
                        Includes income from self-employment, freelancing, consultancy, or any business operations.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q4 */}
                <div className="efill-que flex flex-wrap justify-between py-5 relative">
                  <p className='text-xl font-semibold mb-2 lg:mb-0 md:mb-0'>Q4. Do you have income from Capital Gains (e.g., sale of shares, mutual funds, or property)?</p>
                  <div className='flex gap-3 font-bold text-lg'>
                    <div className='flex gap-1 items-center'>
                      <input type="radio" name="capitalGains" value="Yes" className='h-5 w-5 custom-radio' onChange={handleChange} />
                      <p>Yes</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <input type="radio" name="capitalGains" value="No" className='h-5 w-5 custom-radio' defaultChecked onChange={handleChange} />
                      <p>No</p>
                    </div>
                    <div className="relative group">
                      <div className='bg-gray-200 rounded-full p-2 cursor-pointer'>
                        <img src="https://tax2win.in/assets-new/img/source-of-income/info.svg" width="10" alt="info" />
                      </div>
                      <div className="absolute top-10 right-0 z-10 hidden group-hover:block bg-white text-sm text-gray-700 p-3 rounded-md shadow-lg w-72">
                        Pertains to profits from the sale of capital assets.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q5 */}
                <div className="efill-que flex flex-wrap justify-between py-5 relative">
                  <p className='text-xl font-semibold mb-2 lg:mb-0 md:mb-0'>Q5. Do you have income from Other Sources?</p>
                  <div className='flex gap-3 font-bold text-lg'>
                    <div className='flex gap-1 items-center'>
                      <input type="radio" name="otherSources" value="Yes" className='h-5 w-5 custom-radio' onChange={handleChange} />
                      <p>Yes</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <input type="radio" name="otherSources" value="No" className='h-5 w-5 custom-radio' defaultChecked onChange={handleChange} />
                      <p>No</p>
                    </div>
                    <div className="relative group">
                      <div className='bg-gray-200 rounded-full p-2 cursor-pointer'>
                        <img src="https://tax2win.in/assets-new/img/source-of-income/info.svg" width="10" alt="info" />
                      </div>
                      <div className="absolute top-10 right-0 z-10 hidden group-hover:block bg-white text-sm text-gray-700 p-3 rounded-md shadow-lg w-72">
                   Includes interest income, dividends, gifts, winnings, etc.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q6 */}
                <div className="efill-que flex flex-wrap justify-between py-5 relative">
                  <p className='text-xl font-semibold mb-2 lg:mb-0 md:mb-0'>Q6. Do you have income from Foreign Sources?</p>
                  <div className='flex gap-3 font-bold text-lg'>
                    <div className='flex gap-1 items-center'>
                      <input type="radio" name="foreignSource" value="Yes" className='h-5 w-5 custom-radio' onChange={handleChange} />
                      <p>Yes</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <input type="radio" name="foreignSource" value="No" className='h-5 w-5 custom-radio' defaultChecked onChange={handleChange} />
                      <p>No</p>
                    </div>
                    <div className="relative group">
                      <div className='bg-gray-200 rounded-full p-2 cursor-pointer'>
                        <img src="https://tax2win.in/assets-new/img/source-of-income/info.svg" width="10" alt="info" />
                      </div>
                      <div className="absolute top-10 right-0 z-10 hidden group-hover:block bg-white text-sm text-gray-700 p-3 rounded-md shadow-lg w-72">
                       Includes foreign salary, foreign investments, or assets held abroad.
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div onClick={handleContinue} className="continue-btn flex justify-center gap-3 py-3 px-20 rounded mt-7 cursor-pointer">
                <p className='text-white'>CONTINUE</p>
                <img src="/assest/arrow-right.png" alt="Continue" width="26" height="26"></img>
              </div>

              {/* <a href="\financial-details">
<div onClick={handleContinue} className="continue-btn flex flex-wrap gap-3 py-3 px-20 rounded mt-7 cursor-pointer">
          <p className='text-white'>CONTINUE</p>
          <img src="https://tax2win.in/assets-new/img/diy-landing/nex-arrow.svg" alt="Continue" width="21" height="21"></img>
        </div>

</a> */}
               <h3 className='text-xl font-semibold my-8 mt-14'>Trusted by Millions, Backed by Expertise</h3>

              <div className="efilling-rates flex justify-center flex-wrap gap-7 pb-14">
                <div className="efilling-rate ">
                  <img src="https://tax2win.in/assets-new/img/tax-advisory/rating.svg" width="40" height="40" alt="4.9 Google Rating" title="4.9 Google Rating" />
                <div className='mt-2'>
                    <p><span className='font-bold'>4.9/5 Google Rating</span></p>
                    <p>Highly rated by our valued users.</p>
                </div>
                </div>
                <div className="efilling-rate">
                  <img src="https://tax2win.in/assets-new/img/tax-advisory/satisfaction.svg" width="40" height="40" alt="1+ Million satisfied customers" title="1+ Million satisfied customers" />
                 <div className='mt-2'> <p><span className='font-bold'>1+ Lakh Satisfied Customers</span></p>
                  <p>Reliably serving taxpayers across India.</p></div>
                </div>
                <div className="efilling-rate ">
                  <img src="https://tax2win.in/assets-new/img/tax-advisory/already-saved.svg" width="40" height="40" alt="2500 Cr. Saved Already!" title="2500 Cr. Saved Already!" />
                  <div className='mt-2'>
                                      <p><span className='font-bold'>₹ 500+ Crore in Taxes Saved</span></p>
                                      <p>Including over ₹100 Crore saved in the past year and ₹1 Lakh for many individual users!</p>
                  </div>
                </div>
                <div className="efilling-rate ">
                  <img src="https://tax2win.in/assets-new/img/tax-advisory/experiance.svg" width="40" height="40" alt="10+ Years of Industry Experience" title="10+ Years of Industry Experience" />
                <div className='mt-2'>
                    <p><span className='font-bold'>7 Years of Industry Experience</span></p>
                    <p>Established and trusted for reliable ITR filing and tax solutions.</p>
                </div>
                </div>
              </div>

               <h1 className='text-2xl font-semibold mb-4'>Hire an Expert Chartered Accountant</h1>

              <div className="looking-CA flex flex-wrap justify-center rounded-lg p-7 text-white gap-3">
                <img src="https://tax2win.in/assets-new/img/diy-landing/hireca.svg" alt="Hire Expert CA" width="55" />
              <div className='lg:me-32' >
                  <p className='text-2xl text-white font-bold'>Need a dedicated CA to manage your taxes? We’ve got you covered.</p>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex ">
                      <img src="https://tax2win.in/assets-new/img/diy-landing/list_arrow.svg" alt="" />
                      <p className=' text-white'> Comprehensive Tax Support</p>
                    </div>
                    <div className="flex ">
                      <img src="https://tax2win.in/assets-new/img/diy-landing/list_arrow.svg" alt="" />
                      <p className='text-white'> Reliable & Secure Service</p>
                    </div>
                    <div className="flex ">
                      <img src="https://tax2win.in/assets-new/img/diy-landing/list_arrow.svg" alt="" />
                      <p className='text-white'> Affordable Filing Fees</p>
                    </div>
                  </div>
                </div>

                <div className="looking-btn flex  bg-white lg:px-5 md:px-5 px-2 lg:w-72 gap-2 justify-center py-3 rounded-full">
                  <p className='font-semibold text-lg text-black'>Talk to a Professional</p>
                  <img src="https://tax2win.in/assets-new/img/diy-landing/bdark-arrow.svg"></img>
                </div>

              </div>


            </div>

            {/* Made a mistake in your FIled ITR section */}

            <div className="made-a-mistake-outer flex flex-col justify-center items-center py-9">
              <h1 className='font-bold text-4xl my-14'>Made an Error in Your Filed ITR? File a Revised Return Today</h1>
              <div className="revised-returns flex flex-wrap justify-center gap-5 ">
                <div className="revised-return p-5 rounded-3xl">
                  <img src="https://tax2win.in/assets-new/img/diy-landing/pre-fill-data-from-it-department.svg" alt="" />
                  <h3 className='text-xl font-bold mb-2 mt-2'>Eligibility</h3>
                  <p className='text-xl  mb-2'>Any taxpayer who has filed an original income tax return under Section 139(1) or a belated return under Section 139(4) of the Income Tax Act, 1961, is entitled to file a revised return to correct or update the previously submitted information.</p>

                </div>

                <div className="revised-return p-5 rounded-3xl">
                  <img src="https://tax2win.in/assets-new/img/new-theme/icon_upload.svg" alt="" />
                  <h3 className='text-xl font-bold mb-2 mt-2'>Filing Process</h3>
                  <p className='text-xl  mb-2'>Filing a revised return with File Your Tax is straightforward: simply select ‘Revised Return’ on the ITR Details page and update the necessary information accurately.
If you find tax filing complex or need assistance, our team of experts is readily available to guide you. Connect with us today for seamless support.
</p>
                </div>

                <div className="revised-return p-5 rounded-3xl">
                  <img src="https://tax2win.in/assets-new/img/new-theme/diy-filing.svg" alt="" />
                  <h3 className='text-xl font-bold mb-2 mt-2'>Reasons for filing Revised Return</h3>
                  <p className='text-xl  mb-2'>Rectification of errors, overlooked tax deductions, unreported income, updates to personal information, and similar corrections.</p>
                </div>

                <div className="revised-return p-5 rounded-3xl">
                  <img src="https://tax2win.in/assets-new/img/new-theme/tax-notice-assistance.svg" alt="" />
                  <h3 className='text-xl font-bold mb-2 mt-2'>Deadline</h3>
                  <p className='text-xl  mb-2'>The revised return must be filed on or before December 31 of the relevant assessment year.</p>
                </div>
              </div>
            </div>

            {/* Find ITR Filling Plans Section start */}

            <div className="Itr-plans-section flex flex-col justify-center items-center py-14  mt-7 px-3">
              <h1 className='font-extrabold text-4xl mb-4'>Discover the Ideal ITR Filing Solution Tailored to Your Requirements</h1>
              <p className='text-2xl mb-2 font-semibold text-center' >Explore our bespoke income tax return filing plans crafted to meet your unique financial profile and ensure accurate, hassle-free compliance.</p>

              <div className="itr-plans mt-14 flex flex-wrap gap-5">
                <div className="itr-plan rounded-2xl p-7">
                  <div className="flex justify-end">
                    <div className="itrfilling-btn inline-flex px-5 py-1  rounded-full mb-6 ">
                      <p className='font-bold'>#itrfiling</p>
                    </div>
                  </div>
                  <h2 className='font-semibold text-2xl mb-3'>eCA Assisted - Standard Plan</h2>
                  <p className='font-bold mb-2'>Applicable For:</p>
                  <div className='flex gap-3 mb-2'>
                    <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
                    <p className=''>	Individuals with Income from Salary</p>
                  </div>
                  <div className='flex gap-3 mb-2'>
                    <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
                    <p>	Income from House Property</p>
                  </div>
                  <div className='flex gap-3 mb-3'>
                    <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
                    <p>	Income from Interest and Other Sources</p>
                  </div>
                  <p className='mb-2 font-bold '>Services Included:</p>
                  <div className='flex gap-3 mb-2'>
                    <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
                    <p>	Seamless e-filing of Income Tax Return for one Assessment Year</p>
                  </div>
                  <div className='flex gap-3 mb-2'>
                    <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
                    <p>	Expert recommendations to maximize tax deductions</p>
                  </div>
                  <div className='flex gap-3 mb-2'>
                    <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
                    <p>	Automatic import of Form 26AS data</p>
                  </div>
                  <div className='flex gap-3 mb-2'>
                    <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
                    <p>	Guidance and assistance for tax payments</p>
                  </div>
                  <div className='flex gap-3 mb-3 pb-6'>
                    <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
                    <p>	Access to an expanded suite of self-help tools for a smooth filing experience</p>
                  </div>

                  {/* <p className='text-red-700 text-xl strike mt-7'>₹1499</p> */}
                  <div className='flex justify-between align-middle'>
                    <p className='text-4xl font-bold'>₹1499</p>
                    <div className="buy-btn inline-flex px-4 py-1 font-bold rounded-full">
                      <p>Buy Now</p>
                    </div>
                  </div>
                  <p className='mb-8'>₹1000 Including of Tax</p>
                </div>


                {/* <div className="itr-plan-2 rounded-2xl p-7">
                  <div className="flex justify-end">
                    <div className="itrfilling-btn inline-flex px-5 py-1 bg-blue rounded-full mb-6 ">
                      <p className='font-bold'>#efiling</p>
                    </div>
                  </div>
                  <h2 className='font-semibold text-2xl mb-3 text-white'>File ITR Yourself</h2>
                  <p className=' mb-2 text-white'> Includes income from Salary, House Property, Capital Gain/Loss, Mutual Funds, Properties,
                    Presumptive Tax u/s 44AD & 44ADA, and Other Sources.</p>

                  <div className='plan flex justify-between mb-3 mt-3 pt-2'>
                    <p className='text-sm text-white'> Income 0 - 10K</p>
                    <div className="free-btn py-1 px-4 bg-amber-400 rounded-full">
                      <p className='font-semiblod'>Free</p>
                    </div>
                  </div>
                  <div className="plan mb-3 pt-2">
                    <div className="flex justify-between mb-1">
                      <p className='text-xl text-white font-semibold'>Basic</p>
                      <div className="flex gap-2">
                        <p className='text-white strike' >₹99</p>
                        <div className="bg-white rounded-full  px-4">
                          <p className='text-lg text-blue'>₹49</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className='text-sm text-white'>Income 10K - 1L</p>
                      <p className='text-sm text-white'>+ Taxes</p>
                    </div>
                  </div>

                  <div className="plan mb-3 pt-2">
                    <div className="flex justify-between mb-1">
                      <p className='text-xl text-white font-semibold'> Standard</p>
                      <div className="flex gap-2">
                        <p className='text-white strike' >₹449</p>
                        <p className='text-2xl text-white font-bold'>₹382</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className='text-sm text-white'>Income 1L - 5L</p>
                      <p className='text-sm text-white'>+ Taxes</p>
                    </div>
                  </div>

                  <div className="plan mb-3 pt-2">
                    <div className="flex justify-between mb-1">
                      <p className='text-xl text-white font-semibold '>Advance</p>
                      <div className="flex gap-2">
                        <p className='text-white strike' >₹649</p>
                        <p className='text-2xl text-white font-bold'>₹552</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className='text-sm text-white'>Income 5L - 10L</p>
                      <p className='text-sm text-white'>+ Taxes</p>
                    </div>
                  </div>

                  <div className="plan mb-3 pt-2">
                    <div className="flex justify-between mb-1">
                      <p className='text-xl text-white  font-semibold'>Premium</p>
                      <div className="flex gap-2">
                        <p className='text-white strike ' >₹1499</p>
                        <p className='text-2xl text-white font-bold'>₹1274</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className='text-sm text-white'>Income 10L+</p>
                      <p className='text-sm text-white'>+ Taxes</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="filling-now-btn bg-white inline-flex py-2 px-5 rounded-full gap-4 mt-8">
                      <p className='text-lg font-semibold '>Start Filling Now</p>
                      <img src="	https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg" alt="" />
                    </div>
                  </div>

                </div> */}


                <div className="itr-plan rounded-2xl p-7">
                  <div className="flex justify-end">
                    <div className="itrfilling-btn inline-flex px-5 py-1  rounded-full mb-6 ">
                      <p className='font-bold'>#fileincometaxreturn</p>
                    </div>
                  </div>
                  <h2 className='font-semibold text-2xl mb-3'>eCA Assisted – Capital Gains Plan</h2>
                  <p className='font-bold mb-2'>Suitable For:</p>
                  <div className='flex gap-3 mb-2'>
                    <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
                    <p>Individuals receiving salary income from multiple employers</p>
                  </div>
                  <div className='flex gap-3 mb-2'>
                    <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
                    <p>Capital gains arising from securities, real estate, mutual funds, and cryptocurrency transactions</p>
                  </div>
                  <div className='flex gap-3 mb-3'>
                    <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
                    <p>Business income and interest income</p>
                  </div>
                  <p className='mb-2 font-bold '>Plan Features:</p>
                  <div className='flex gap-3 mb-2'>
                    <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
                    <p>	Expert-assisted e-filing of Income Tax Return for one assessment year</p>
                  </div>
                  <div className='flex gap-3 mb-2'>
                    <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
                    <p>	Claim relief under Section 89 for salary arrears, advance salary, or other eligible adjustments</p>
                  </div>
                  <div className='flex gap-3 mb-2'>
                    <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
                    <p>	Seamless integration and import of Form 26AS for accurate tax data reconciliation</p>
                  </div>
                  <div className='flex gap-3 mb-2'>
                    <img src="https://tax2win.in/assets-new/img/diy-landing/arrow-green.svg" alt="" />
                    <p>	Access to an enhanced suite of self-service tools designed to simplify your filing processt</p>
                  </div>

                  <p className='text-red-700 text-xl strike mt-7'>₹7500</p>
                  <div className='flex justify-between align-middle'>
                    <p className='text-4xl font-bold'>₹5000</p>
                    <div className="buy-btn inline-flex px-4 py-1 font-bold rounded-full">
                      <p>Buy Now</p>
                    </div>
                  </div>
                  <p className='mb-8'>Inclusive of applicable taxes</p>
                </div>

              </div>
            </div>


            {/* Faqs section start from here */}

            <div className="Faq-section pt-28">
              <div className="faq-head flex justify-center">
                <h1 className='text-4xl font-bold mb-10'>FAQs on Income Tax Return Filing</h1>
              </div>

              <div className="faq pb-7 mt-6">
                <p className="que text-2xl font-bold mb-2">What is ITR filing?</p>
                <p className="ans ">Income Tax Return (ITR) filing refers to the process of submitting your tax returns electronically through the government’s e-filing portal
                   or authorized platforms. It is a mandatory compliance requirement for taxpayers to declare their income and taxes paid.</p>
              </div>

              <div className="faq pb-7 mt-6">
                <p className="que text-2xl font-bold mb-2">What are the documents required to file ITR?</p>
                <p className="ans mb-3">The following documents are typically needed for filing your Income Tax Return:</p>
                <ul>
                  <li> ● Form 16 (Tax Deducted at Source certificate from employer)</li>
                  <li>● 	Aadhaar Card and PAN Card</li>
                  <li> ● Salary Slips</li>
                  <li>●   Bank interest certificates</li>
                  <li>● TDS certificate issued by banks and others</li>
                  <li> ● Annual Information Statement (AIS)</li>
                  <li> ● 	Proofs of tax-saving investments (e.g., LIC, PPF, ELSS)</li>
                  <li>●Capital gains statement</li>
                  <li>● Details of foreign assets and investments if any</li>
                  <li>● Form 26AS (consolidated tax statement)</li>
                </ul>
              </div>
              <div className="faq pb-7 mt-6">
                <p className="que text-2xl font-bold mb-2">What are the benefits of filing an ITR?</p>
                <p className="ans mb-3">Filing your Income Tax Return offers several advantages, including:</p>
                <ul>
                  <li>● •	Facilitates easy loan approval</li>
                  <li>●•	Serves as valid proof of income and address</li>
                  <li>●•	Speeds up income tax refund processing</li>
                  <li>● •	Enables carrying forward of losses for set-off in future years</li>
                  <li>● •	Assists in purchasing term insurance policies</li>
                  <li>● •	Helps avoid penalties and legal consequences due to non-filing</li>
                  <li>● •	Simplifies visa application processes</li>
           
                </ul>
              </div>

              <div className="faq pb-7 mt-6">
                <p className="que text-2xl font-bold mb-2">Which ITR form should I choose for e-filing?</p>
                <p className="ans mb-3">There are seven types of ITR forms in India, each catering to different taxpayer profiles:</p>
                <ul>
                  <li>● <b><a className="link-p" href="">ITR 1 (Sahaj):</a></b>For salaried individuals or pensioners with income up to ₹50 lakh from salary, one house property, and other sources (excluding lottery and horse racing income). Not applicable to NRIs.</li>
                  <li>● <b><a className="link-p" href="">ITR 2:</a></b>For individuals and Hindu Undivided Families (HUFs) with income above ₹50 lakh, income from multiple house properties, capital gains, or foreign assets. Suitable for NRIs.</li>
                  <li>● <b><a className="link-p" href="">ITR 3:</a></b>: For individuals and HUFs with income from business or profession (including sole proprietorships).</li>
                  <li>● <b><a className="link-p" href="">ITR 4: (Sugam):</a></b>For individuals/businesses with presumptive income having turnover up to ₹2 crore or professional income up to ₹50 lakh.</li>
                  <li>● <b><a className="link-p" href="">ITR 5:</a></b> For firms, LLPs, AOPs, BOIs, cooperative societies, and other entities.</li>
                  <li>● <b><a className="link-p" href="">ITR 6:</a></b>For trusts, political parties, scientific research institutions, universities, business trusts, and other entities required to file returns under Sections 139(4A) to 139(4F).</li>
                </ul>
              </div>


              <div className="faq pb-7 mt-6">
                <p className="que text-2xl font-bold mb-2">How Can I File my ITR Myself?</p>
                <p className="ans ">Yes, taxpayers can file their ITR independently either through the official Income Tax Department portal or through platforms like File Your Tax, which offers an intuitive, AI-powered DIY filing experience. Simply enter your basic salary and personal details, and the system will select the appropriate ITR form, compute your tax liability, and assist with filing.</p>
              </div>

              <div className="faq pb-7 mt-6">
                <p className="que text-2xl font-bold mb-2">What if I missed filing my ITR?</p>
                <p className="ans">If you miss the original filing deadline, you can still file a belated return with a penalty. The last date for filing a belated return is 31st December of the relevant assessment year.</p>
              </div>

              <div className="faq pb-7 mt-6">
                <p className="que text-2xl font-bold mb-2">What is the late fee for ITR Filing?</p>
                <p className="ans">Under Section 234F of the Income Tax Act, a penalty is levied for late filing:</p>
                <ul>
                  <li>●	Up to ₹5,000 if filed after the due date but before 31st December.</li>
                  <li>●	Up to ₹10,000 for returns filed after 31st December but before the end of the assessment year.</li>
                  <p>The exact penalty depends on the delay duration and income level.</p>
                </ul>
              </div>

              <div className="faq pb-7 mt-6">
                <p className="que text-2xl font-bold mb-2">Can I file a revised return after 31st July?</p>
                <p className="ans">Yes, you can file a revised return to correct errors or omissions in your original ITR. The deadline for filing a revised return is 31st December of the relevant assessment year.</p>
              </div>

              <div className="faq pb-7 mt-6">
                <p className="que text-2xl font-bold mb-2">Is e-filing of ITR mandatory?</p>
                <p className="ans">Yes, e-filing is mandatory for individuals whose gross total income exceeds the basic exemption limit. Under the old tax regime, the limit is ₹2.5 lakh for individuals below 60 years and ₹3 lakh for senior citizens. Under the new tax regime (effective FY 2025-26), the exemption limit for individuals below 60 has been raised to ₹4 lakh.</p>
         

              </div>

              <div className="faq pb-7 mt-6">
                <p className="que text-2xl font-bold mb-2">Can I file ITR without Form 16?</p>
                <p>Yes, you can file your ITR without Form 16. In such cases, use Form 26AS to verify TDS details and refer to the Annual Information Statement (AIS) for income details. You may also request Form 16 from your employer for convenience.</p>
              </div>

              <div className="faq pb-7 mt-6">
                <p className="que text-2xl font-bold mb-2">What is the basic exemption limit for filing an ITR?</p>
                <p>In India, the basic exemption limit for filing an Income Tax Return (ITR) varies depending on the chosen tax regime (old or new) and the taxpayer's age.</p>

                <p className='text-xl font-semibold mb-3 mt-4'>Tax slabs under the new tax regime (FY 2025-26)</p>

                <table className="table-1 table-auto border-collapse border border-gray-300 mb-5">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-4 py-2 text-left font-bold">Income Range</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-bold">Tax Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 ">0-4 lakh</td>
                      <td className="border border-gray-300 px-4 py-2">Nil</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 ">4-8 lakh</td>
                      <td className="border border-gray-300 px-4 py-2">5%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 ">8-12 lakh</td>
                      <td className="border border-gray-300 px-4 py-2">10%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 ">12-16 lakh</td>
                      <td className="border border-gray-300 px-4 py-2">15%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 ">16-20 lakh</td>
                      <td className="border border-gray-300 px-4 py-2">20%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 ">20-24 lakh</td>
                      <td className="border border-gray-300 px-4 py-2">25%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 ">Above 24 lakh</td>
                      <td className="border border-gray-300 px-4 py-2">30%</td>
                    </tr>
                  </tbody>
                </table>

                <div className="table-2-outer flex flex-wrap gap-4 mt-10">
                  <div>
                    <p className=' text-xl font-semibold mb-3'>New Regime (FY 2024-25)</p>

                    <table className="table-2 table-auto w-full border-collapse border border-gray-300 mb-5">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="border border-gray-300 px-4 py-2 text-left font-bold">Range of Income (Rs.)</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-bold">Tax Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 ">Up to 3,00,000</td>
                          <td className="border border-gray-300 px-4 py-2">NIL</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 ">3,00,000-7,00,000</td>
                          <td className="border border-gray-300 px-4 py-2">5%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 ">7,00,000-10,00,000</td>
                          <td className="border border-gray-300 px-4 py-2">10%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 ">10,00,000-12,00,000</td>
                          <td className="border border-gray-300 px-4 py-2">15%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 ">12,00,000-15,00,000</td>
                          <td className="border border-gray-300 px-4 py-2">20%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 ">Above 15,00,000</td>
                          <td className="border border-gray-300 px-4 py-2">30%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <p className='text-xl font-semibold mb-3'>Old Regime (FY 2024-25)</p>

                    <table className="table-2 table-auto w-full border-collapse border border-gray-300 mb-5">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="border border-gray-300 px-4 py-2 text-left font-bold">Range of Income (Rs.)</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-bold">Tax Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 ">Up to 2,50,000</td>
                          <td className="border border-gray-300 px-4 py-2">Nil</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 ">2,50,000-5,00,000</td>
                          <td className="border border-gray-300 px-4 py-2">5%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 ">5,00,000-10,00,000</td>
                          <td className="border border-gray-300 px-4 py-2">20%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 ">Above 10,00,000</td>
                          <td className="border border-gray-300 px-4 py-2">30%</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

              <div className="faq pb-7 mt-6">
                <p className="que text-2xl font-bold mb-2">What is the last date to e-verify the ITR?</p>
                <p>The ITR must be e-verified within 30 days from the date of filing</p>
              </div>

              <div className="faq pb-7 mt-6">
                <p className="que text-2xl font-bold mb-2">How can I check my income tax refund status?</p>
                <p>You can track the status of your income tax refund via FileyourTax’s refund status tool or directly on the Income Tax Department’s official portal.</p>
              </div>


              <div className="faq pb-7 mt-6">
                <p className="que text-2xl font-bold mb-2">Are there any charges for filing ITR through File Your Tax?</p>
                <p className='mb-2'>File Your Tax offers a fast, secure, and user-friendly platform to file your ITR within minutes. A nominal platform usage fee applies to cover the service and support provided.</p>
              </div>

              <div className="faq pb-7 mt-6">
                <p className="que text-2xl font-bold mb-2">What is a rebate under Section 87A and who is eligible?</p>
                <p className='mb-2'>Under Section 87A, resident individuals with total income up to ₹5,00,000 (old regime) or ₹7,00,000 (new regime) are eligible for a rebate on their tax liability:</p>
                <ul className='mb-2'>
                  <li>● 	The rebate is the lower of:</li>
                  <li> ● 100% of income tax liability, or</li>
                  <li> ● ₹12,500 (old regime) / ₹25,000 (new regime).</li>
                </ul>

                {/* <p className='mb-2'>Further, a maximum rebate of Rs. 25,000 is allowed under section 87A from the amount of
                  income tax on total income, which is chargeable to tax under new tax regime. However, this rebate is allowed if the total
                  income of assessee chargeable to tax under section 115BAC(1A) is up to Rs. 7,00,000.</p> */}

                <h3>Budget 2025 Update:</h3>
                <p className='mb-2'>For FY 2025-26 onwards, salaried individuals under the new tax regime enjoy a tax-free income threshold of ₹12,75,000, and the Section 87A rebate has been increased to ₹60,000, offering significant relief.</p>
{/* 
                <p className='mb-2'>The changes announced in Budget 2025 will be applicable from FY 2025-26 onwards.</p> */}
              </div>


            </div>
          </>
        )
      }




    </div>
  )
}

export default Efilling_platform



