// "use client"

// import React, { useState } from 'react';
// import "./bank-detail.css";
// import { useRouter } from 'next/navigation';

// const BankDetails = () => {

//      const router = useRouter();
//   const [bankForms, setBankForms] = useState([{ id: Date.now(), formInputs: [{ id: Date.now() }] }]);

//   const addBankForm = (formId) => {
//     setBankForms(
//       bankForms.map((form) =>
//         form.id === formId
//           ? { ...form, formInputs: [...form.formInputs, { id: Date.now() }] }
//           : form
//       )
//     );
//   };

//   const removeBankForm = (formId, inputId) => {
//     setBankForms(
//       bankForms.map((form) =>
//         form.id === formId
//           ? { ...form, formInputs: form.formInputs.filter((input) => input.id !== inputId) }
//           : form
//       )
//     );
//   };

       
//         const handleSubmit = () => {
         
//           const user = JSON.parse(localStorage.getItem("user")); 
//           if (user && user.email) {
//             const email = user.email;
        
           
//             const progress = JSON.parse(localStorage.getItem("formProgress")) || {};
//             progress[email] = 8; 
//             localStorage.setItem("formProgress", JSON.stringify(progress));
//           }
//           router.push('/prepaid-taxes');
//         };
        

//   return (
//     <div className="bank-details flex flex-col justify-center items-center text-center pt-20">
//       <h1 className="text-2xl font-semibold">ENTER YOUR BANK & AADHAAR DETAILS</h1>
//       <p className="text-xl mt-1">Provide your bank details correctly to receive an income tax refund.</p>

//       <div className="bank-details-form rounded-2xl bg-white p-5 lg:p-10 md:p-10 xl:p-10 mb-7 mt-10">
//         {bankForms.map((form) => (
//           form.formInputs.map((input) => (
//             <div key={input.id} className="form-inputs flex flex-col items-start mb-5">
//               <h2 className='text-2xl font-semibold'>Bank Details-To Receive Income Tax Refund</h2>
//               <div className="bank-inputs flex flex-wrap gap-5 mt-8">
//                 <div className="bank-input flex flex-col items-start gap-1">
//                   <label htmlFor="">IFS Code of the Bank</label>
//                   <input type="text" className="p-3 rounded-lg" />
//                 </div>

//                 <div className="bank-input flex flex-col items-start gap-1">
//                   <label htmlFor="">Name of the Bank</label>
//                   <input type="text" className="p-3 rounded-lg" />
//                 </div>

//                 <div className="bank-input flex flex-col items-start gap-1">
//                   <label htmlFor="">Account Number</label>
//                   <input type="text" className="p-3 rounded-lg" />
//                 </div>

//                 <div className="bank-input flex flex-col items-start gap-1">
//                   <label htmlFor="">Account Type</label>
//                   <select id="" className="p-3 rounded-lg">
//                     <option value="">Savings Account</option>
//                     <option value="">Cash Credit Account</option>
//                     <option value="">Current Account</option>
//                     <option value="">Over Draft Account</option>
//                     <option value="">Non Resident Account</option>
//                     <option value="">Other</option>
//                   </select>
//                 </div>
//               </div>

//               {form.formInputs.length > 1 && (
//                 <div className="remove-bank flex justify-end my-3">
//                   <button
//                     className="remove-btn rounded-lg shadow px-3 py-2 bg-red-100 text-white"
//                     onClick={() => removeBankForm(form.id, input.id)}
//                   >
//                    <img src="https://tax2win.in/assets-new/img/new-theme/diy-flow/trash.svg" alt="" />
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))
//         ))}

//         <div className="add-bank flex justify-end my-7">
//           <button
//             className="add-btn rounded-full shadow px-8 py-2 bg-blue text-white"
//             onClick={() => addBankForm(bankForms[0].id)}
//           >
//             + Add Bank
//           </button>
//         </div>
//       </div>

//       <div className="aadhaar-details-form flex flex-col items-start rounded-2xl bg-white p-5 lg:p-10 md:p-10 xl:p-10 mb-7 ">
//         <h2 className='text-xl font-semibold'>Aadhaar Details </h2>
//         <div className="Aadhar-input flex flex-col items-start gap-1">
//           <label htmlFor="">Aadhaar Card / Enrollment Number </label>
//           <input type="text" className="p-3 rounded-lg" />
//         </div>
//       </div>

//       <div className="financial-btns flex flex-wrap justify-between mb-10">
//         <a href="\deduction">
//           <div className="back-btn flex items-center gap-3 py-3 px-10 mb-4 bg-white rounded-md">
//           <img src="https://media-hosting.imagekit.io//69ad5096714e471b/arrow-left.png?Expires=1836968249&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UbyR63UpwFKqNYhmOCzwA20u9i9m-8NefJS86pMPpxEWQoLF7fazDhSEfVF3vcKzDD5KH1Os3RCGguGvQGqvEYT6cp~8YwgtE6-ppFllVcZE-BwmH0A8nC5R3BrWIg40ANZQl2~qQG-iQVh0KCttfOkpBTvQTPTPbr~GKD2OgeWEIjqgUOzTcJyI0~tMjClIigEsSZ25AJSyZgMhnUIUjXMkScOIGm84wTr4ZOzRzWrw5fgv3hHp4063bIA4VC-fseCnC-nZ5LXjYWngvRYrQvpjXMtaXKsZadXkEoGDjrB1p1leTI9GqYN~AVEtGW4WqrUvxNkXxVwyj9DXyFzULQ__" alt="" height={23} width={23} />
//             <p className="text-blue">Back</p>
//           </div>
//         </a>
//         <div className="other-btns flex flex-wrap gap-4">
//           <div className="get-button px-10 py-3 rounded-md">
//             <p className="text-white font-semibold">GET CA ASSISTED</p>
//           </div>
         
//             <div className="continue-btn flex gap-3 items-center px-10 py-3 rounded-md" onClick={handleSubmit}>
//               <p className="text-white font-semibold">CONTINUE</p>
//               <img src="https://tax2win.in/assets-new/img/diy-landing/bdark-arrow.svg" alt="" />
//             </div>
         
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BankDetails;

"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import "./bank-detail.css";
import axios from "axios"; 
import { useParams } from 'next/navigation';

const BankDetails = () => {
  const router = useRouter();

  const [isLoading , setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    bankForms: [
      { ifsc: "",
       bankName: "",
        accountNumber: "",
         accountType: "" }
    ],
    aadhaarNumber: "" 
  });

 const { id } = useParams();
      console.log(id);

  // Function to add a new bank form
  const addBankForm = () => {
    setFormData({
      ...formData,
      bankForms: [
        ...formData.bankForms,
        { ifsc: "", bankName: "", accountNumber: "", accountType: "" }
      ]
    });
  };

  // Function to remove a specific bank form
  const removeBankForm = (index) => {
    const updatedBankForms = formData.bankForms.filter((_, formIndex) => formIndex !== index);
    setFormData({
      ...formData,
      bankForms: updatedBankForms
    });
  };

  // Function to handle input changes for bank details
  const handleBankInputChange = (index, field, value) => {
    const updatedBankForms = [...formData.bankForms];
    updatedBankForms[index][field] = value;
    setFormData({
      ...formData,
      bankForms: updatedBankForms
    });
  };

  // Function to handle Aadhaar input changes
  const handleAadhaarChange = (value) => {
    setFormData({
      ...formData,
      aadhaarNumber: value
    });
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    // console.log("Submitted Form Data:", formData);   
   
    try {
      setIsLoading(true);
      const response = await axios.put(`https://backend-data-five.vercel.app/api/itr/update/${id}`, formData);

      console.log("API Response:", response.data);

      // Redirect to the next form
      router.push(`/prepaid-taxes/${id}`);
    } catch (error) {
      console.error("Error while calling the API:", error.response?.data || error.message);
    }
  };

  return (
    <>
     {isLoading ? (
        <div className="loading-indicator flex flex-col items-center justify-center">
          <img src="/assest/animation.gif" alt="Loading..." width="80" height="80" />
          <p className="text-lg font-semibold mt-3">Please wait, loading...</p>
        </div>
      ) :
      (
    <div className="bank-details flex flex-col justify-center items-center text-center pt-20">
      <h1 className="text-2xl font-semibold">ENTER YOUR BANK & AADHAAR DETAILS</h1>
      <p className="text-xl mt-1">Provide your bank details correctly to receive an income tax refund.</p>

      <div className="bank-details-form rounded-2xl bg-white p-5 lg:p-10 md:p-10 xl:p-10 mb-7 mt-10">
        {formData.bankForms.map((form, index) => (
          <div key={index} className="form-inputs flex flex-col items-start mb-5">
            <h2 className='text-2xl font-semibold'>Bank Details-To Receive Income Tax Refund</h2>
            <div className="bank-inputs flex flex-wrap gap-5 mt-8">
              <div className="bank-input flex flex-col items-start gap-1">
                <label>IFS Code of the Bank</label>
                <input
                  type="text"
                  className="p-3 rounded-lg"
                  value={form.ifsc}
                  onChange={(e) => handleBankInputChange(index, "ifsc", e.target.value)}
                />
              </div>

              <div className="bank-input flex flex-col items-start gap-1">
                <label>Name of the Bank</label>
                <input
                  type="text"
                  className="p-3 rounded-lg"
                  value={form.bankName}
                  onChange={(e) => handleBankInputChange(index, "bankName", e.target.value)}
                />
              </div>

              <div className="bank-input flex flex-col items-start gap-1">
                <label>Account Number</label>
                <input
                  type="text"
                  className="p-3 rounded-lg"
                  value={form.accountNumber}
                  onChange={(e) => handleBankInputChange(index, "accountNumber", e.target.value)}
                />
              </div>

              <div className="bank-input flex flex-col items-start gap-1">
                <label>Account Type</label>
                <select
                  className="p-3 rounded-lg"
                  value={form.accountType}
                  onChange={(e) => handleBankInputChange(index, "accountType", e.target.value)}
                >
                  <option value="">Select Account Type</option>
                  <option value="Savings Account">Savings Account</option>
                  <option value="Cash Credit Account">Cash Credit Account</option>
                  <option value="Current Account">Current Account</option>
                  <option value="Over Draft Account">Over Draft Account</option>
                  <option value="Non Resident Account">Non Resident Account</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {formData.bankForms.length > 1 && (
        <div className="remove-bank flex justify-end my-3">
          <button
            className="remove-btn rounded-lg shadow px-3 py-2 bg-red-100 text-white"
            onClick={() => removeBankForm(index)}
          >
            <img src="https://tax2win.in/assets-new/img/new-theme/diy-flow/trash.svg" alt="Remove Bank Form" />
          </button>
        </div>
      )}
          </div>
        ))}

        <div className="add-bank flex justify-end my-7">
          <button
            className="add-btn rounded-full shadow px-8 py-2 bg-blue text-white"
            onClick={addBankForm}
          >
            + Add Bank
          </button>
        </div>
      </div>

      <div className="aadhaar-details-form flex flex-col items-start rounded-2xl bg-white p-5 lg:p-10 md:p-10 xl:p-10 mb-7">
        <h2 className='text-xl font-semibold'>Aadhaar Details</h2>
        <div className="Aadhar-input flex flex-col items-start gap-1">
          <label>Aadhaar Card / Enrollment Number</label>
          <input
            type="text"
            className="p-3 rounded-lg"
            value={formData.aadhaarNumber}
            onChange={(e) => handleAadhaarChange(e.target.value)}
          />
        </div>
      </div>

      <div className="financial-btns flex flex-wrap justify-between mb-10">
        <a href="/deduction">
          <div className="back-btn flex items-center gap-3 py-3 px-10 mb-4 bg-white rounded-md">
          <img src="/assest/left-arrow.png" alt="" height={23} width={18} />
            <p className="text-blue">Back</p>
          </div>
        </a>
        <div className="other-btns flex flex-wrap gap-4">
          <div className="continue-btn flex justify-center gap-3 items-center px-10 py-3 rounded-md" onClick={handleSubmit}>
            <p className="text-white font-semibold">CONTINUE</p>
            <img src="/assest/arrow-right.png" alt="Continue" width="26" height="26"></img>
          </div>
        </div>
      </div>
    </div>
      )}

    </>
  )
};

export default BankDetails;

