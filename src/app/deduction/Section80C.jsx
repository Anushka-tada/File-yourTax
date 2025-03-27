// import React from 'react'
// import "./deduction.css"

// const Section80C = () => {
//   return (
//     <>
//       <div className="80C-form mt-5">
         
        

//         <div className='flex flex-col items-start mt-6'>
//         <p className='font-semibold'>Enter your tax saving investment details like PPF investment, Fixed Deposits etc. </p>
//          <div className="80c-inputs flex flex-wrap justify-center gap-5 mt-6">
//             <div className="c-imput flex flex-col gap-1 items-start">
//                 <label htmlFor="">LIC</label>
//                 <input type="" className='p-3 rounded-lg' />
//             </div>

//             <div className="c-imput flex flex-col gap-1  items-start">
//                 <label htmlFor="">PF</label>
//                 <input type="" className='p-3 rounded-lg' />
//             </div>

//             <div className="c-imput flex flex-col gap-1  items-start">
//                 <label htmlFor="">PPF</label>
//                 <input type="" className='p-3 rounded-lg' />
//             </div>


//             <div className="c-imput flex flex-col gap-1 items-start">
//                 <label htmlFor="">Principal Repayment on housing Loan</label>
//                 <input type="" className='p-3 rounded-lg' />
//             </div>

//             <div className="c-imput flex flex-col gap-1  items-start">
//                 <label htmlFor="">FDR (Tax Savings)</label>
//                 <input type="" className='p-3 rounded-lg' />
//             </div>

//             <div className="c-imput flex flex-col gap-1  items-start">
//                 <label htmlFor="">NSC</label>
//                 <input type="" className='p-3 rounded-lg' />
//             </div>


//             <div className="c-imput flex flex-col gap-1 items-start">
//                 <label htmlFor="">Tuition fees</label>
//                 <input type="" className='p-3 rounded-lg' />
//             </div>

//             <div className="c-imput flex flex-col gap-1  items-start">
//                 <label htmlFor="">Premium paid to Annuity</label>
//                 <input type="" className='p-3 rounded-lg' />
//             </div>

//             <div className="c-imput flex flex-col gap-1  items-start">
//                 <label htmlFor="">Other 80C Deductions</label>
//                 <input type="" className='p-3 rounded-lg' />
//             </div>
//          </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Section80C

"use client"

import React, { useState, useEffect } from 'react';
import "./deduction.css";

const Section80C = ({ handleDataUpdate }) => {
  const [data, setData] = useState({
    lic: "",
    pf: "",
    ppf: "",
    housingLoan: "",
    fdr: "",
    nsc: "",
    tuitionFees: "",
    annuityPremium: "",
    otherDeductions: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Instead of triggering `handleDataUpdate` on every render, only trigger it when `data` changes
  useEffect(() => {
    handleDataUpdate(data); // Updates parent component's state
  }, [data]); // Only runs when `data` changes

  return (
    <>
      <div className="80C-form mt-5">
        <div className='flex flex-col items-start mt-6'>
          <p className='font-semibold'>Enter your tax saving investment details like PPF investment, Fixed Deposits etc.</p>
          <div className="80c-inputs flex flex-wrap justify-center gap-5 mt-6">
            <div className="c-imput flex flex-col gap-1 items-start">
              <label htmlFor="lic">LIC</label>
              <input name="lic" value={data.lic} onChange={handleChange} className='p-3 rounded-lg' />
            </div>

            <div className="c-imput flex flex-col gap-1 items-start">
              <label htmlFor="pf">PF</label>
              <input name="pf" value={data.pf} onChange={handleChange} className='p-3 rounded-lg' />
            </div>

            <div className="c-imput flex flex-col gap-1 items-start">
              <label htmlFor="ppf">PPF</label>
              <input name="ppf" value={data.ppf} onChange={handleChange} className='p-3 rounded-lg' />
            </div>

            <div className="c-imput flex flex-col gap-1 items-start">
              <label htmlFor="housingLoan">Principal Repayment on housing Loan</label>
              <input name="housingLoan" value={data.housingLoan} onChange={handleChange} className='p-3 rounded-lg' />
            </div>

            <div className="c-imput flex flex-col gap-1 items-start">
              <label htmlFor="fdr">FDR (Tax Savings)</label>
              <input name="fdr" value={data.fdr} onChange={handleChange} className='p-3 rounded-lg' />
            </div>

            <div className="c-imput flex flex-col gap-1 items-start">
              <label htmlFor="nsc">NSC</label>
              <input name="nsc" value={data.nsc} onChange={handleChange} className='p-3 rounded-lg' />
            </div>

            <div className="c-imput flex flex-col gap-1 items-start">
              <label htmlFor="tuitionFees">Tuition Fees</label>
              <input name="tuitionFees" value={data.tuitionFees} onChange={handleChange} className='p-3 rounded-lg' />
            </div>

            <div className="c-imput flex flex-col gap-1 items-start">
              <label htmlFor="annuityPremium">Premium paid to Annuity</label>
              <input name="annuityPremium" value={data.annuityPremium} onChange={handleChange} className='p-3 rounded-lg' />
            </div>

            <div className="c-imput flex flex-col gap-1 items-start">
              <label htmlFor="otherDeductions">Other 80C Deductions</label>
              <input name="otherDeductions" value={data.otherDeductions} onChange={handleChange} className='p-3 rounded-lg' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section80C;
