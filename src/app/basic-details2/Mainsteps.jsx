// import React from 'react'
// import "./mainstep.css"

// const Mainsteps = () => {
//   return (
//     <div className="main-steps-container">
//       <div className="main-steps py-3">
//         <ul className='flex gap-3 '>
//           <a href="\tax-Retun" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>Source of Income</li></a>
//           <a href="\financial-details" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>Financial Details</li></a>
//           <a href="\basic-details" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>Basic Details</li></a>
//           <a href="\basic-details2" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>Basic Details 2</li></a>
//           <a href="\house-property" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>House Property Income</li></a>
//           <a href="\deduction" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>Deduction</li></a>
//           <a href="\bank-details" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>Bank Details</li></a>
//           <a href="\prepaid-taxes" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>Prepaid Taxes</li></a>
//           <a href="\extra-details" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>Extra Details</li></a>
//           <a href="" className='px-3 py-1 bg-white rounded-full'><li className='text-sm'>Computation Details</li></a>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Mainsteps;


"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation"; // usePathname for route detection, useRouter for navigation
import "./mainstep.css";

const Mainsteps = () => {
  const router = useRouter(); // Hook to handle navigation
  const pathname = usePathname(); // Hook to get the current route

  const handleStepClick = (step) => {
    router.push(step); // Navigate to the clicked route
  };

  return (
    <div className="main-steps-container">
      <div className="main-steps py-3">
        <ul className="flex gap-3">
          <button
            onClick={() => handleStepClick("/tax-Retun")}
            className={`px-3 py-1 rounded-full ${
              pathname === "/tax-Retun" ? "bg-sky-950 text-white" : "bg-white"
            }`}
          >
            <li className="text-sm">Source of Income</li>
          </button>
          <button
            onClick={() => handleStepClick("/financial-details")}
            className={`px-3 py-1 rounded-full ${
              pathname === "/financial-details" ? "bg-sky-950 text-white" : "bg-white"
            }`}
          >
            <li className="text-sm">Financial Details</li>
          </button>
          <button
            onClick={() => handleStepClick("/basic-details")}
            className={`px-3 py-1 rounded-full ${
              pathname === "/basic-details" ? "bg-sky-950 text-white" : "bg-white"
            }`}
          >
            <li className="text-sm">Basic Details</li>
          </button>
          <button
            onClick={() => handleStepClick("/basic-details2")}
            className={`px-3 py-1 rounded-full ${
              pathname === "/basic-details2" ? "bg-sky-950 text-white" : "bg-white"
            }`}
          >
            <li className="text-sm">Basic Details 2</li>
          </button>
          <button
            onClick={() => handleStepClick("/house-property")}
            className={`px-3 py-1 rounded-full ${
              pathname === "/house-property" ? "bg-sky-950 text-white" : "bg-white"
            }`}
          >
            <li className="text-sm">House Property Income</li>
          </button>
          <button
            onClick={() => handleStepClick("/deduction")}
            className={`px-3 py-1 rounded-full ${
              pathname === "/deduction" ? "bg-sky-950 text-white" : "bg-white"
            }`}
          >
            <li className="text-sm">Deduction</li>
          </button>
          <button
            onClick={() => handleStepClick("/bank-details")}
            className={`px-3 py-1 rounded-full ${
              pathname === "/bank-details" ? "bg-sky-950 text-white" : "bg-white"
            }`}
          >
            <li className="text-sm">Bank Details</li>
          </button>
          <button
            onClick={() => handleStepClick("/prepaid-taxes")}
            className={`px-3 py-1 rounded-full ${
              pathname === "/prepaid-taxes" ? "bg-sky-950 text-white" : "bg-white"
            }`}
          >
            <li className="text-sm">Prepaid Taxes</li>
          </button>
          <button
            onClick={() => handleStepClick("/extra-details")}
            className={`px-3 py-1 rounded-full ${
              pathname === "/extra-details" ? "bg-sky-950 text-white" : "bg-white"
            }`}
          >
            <li className="text-sm">Extra Details</li>
          </button>
          <button
            onClick={() => handleStepClick("/computation-details")}
            className={`px-3 py-1 rounded-full ${
              pathname === "/computation-details" ? "bg-sky-950 text-white" : "bg-white"
            }`}
          >
            <li className="text-sm">Computation Details</li>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Mainsteps;
