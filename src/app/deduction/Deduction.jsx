// "use client"

// import React, { useState } from 'react';
// import "./deduction.css";
// import Section80C from './Section80C';
// import Section80D from './Section80D';
// import Donation from './Donation';
// import Other from './Other';
// import { useRouter } from 'next/navigation';

// const Deduction = () => {

//      const router = useRouter();
//     const [selectedSection, setSelectedSection] = useState('Section80C');

//     const renderSelectedSection = () => {
//         switch (selectedSection) {
//             case 'Section80C':
//                 return <Section80C />;
//             case 'Section80D':
//                 return <Section80D />;
//             case 'Donation':
//                 return <Donation />;
//             case 'Other':
//                 return <Other />;
//             default:
//                 return <Section80C />;
//         }
//     };

//     //    const handleSubmit = () => {
//     //      router.push('/bank-details');
//     //    }

//     const handleSubmit = () => {
//         // Get logged-in user's email from localStorage
//         const user = JSON.parse(localStorage.getItem("user")); // Retrieve user info
//         if (user && user.email) {
//           const email = user.email;
      
//           // Update the user's progress in localStorage
//           const progress = JSON.parse(localStorage.getItem("formProgress")) || {};
//           progress[email] = 7; // Set progress to Form 7 (bank-details)
//           localStorage.setItem("formProgress", JSON.stringify(progress));
//         }
      
//         // Redirect to the next form
//         router.push('/bank-details');
//       };
      

//     return (
//         <>
//             <div className="deduction-section flex flex-col justify-center items-center text-center pt-20 ">
//                 <h1 className="text-2xl font-semibold">ENTER TAX SAVING DEDUCTIONS</h1>
//                 <p className="text-xl mt-1">We're here to help you to get maximum deductions on your TAX</p>

//                 <div className="deduction-form relative rounded-2xl bg-white p-5 lg:p-8 md:p-8 xl:p-8 mb-7 mt-20 flex flex-col">
//                     <div className="flex justify-center">
//                         <div className="form-options flex flex-wrap justify-center gap-2 bg-white  px-2 rounded-full shadow-md ">
//                             <div
//                                 className={`form-option px-6 py-1 rounded-full cursor-pointer mb-2 mt-2 ${selectedSection === 'Section80C' ? 'bg-blue text-white' : ''}`}
//                                 onClick={() => setSelectedSection('Section80C')}
//                             >
//                                 <p className='text-lg'>Section 80C</p>
//                             </div>
//                             <div
//                                 className={`form-option px-6 py-1 rounded-full cursor-pointer mb-2 mt-2 ${selectedSection === 'Section80D' ? 'bg-blue text-white' : ''}`}
//                                 onClick={() => setSelectedSection('Section80D')}
//                             >
//                                 <p className='text-lg'>Section 80D</p>
//                             </div>
//                             <div
//                                 className={`form-option px-6 py-1 rounded-full cursor-pointer mb-2 mt-2 ${selectedSection === 'Donation' ? 'bg-blue text-white' : ''}`}
//                                 onClick={() => setSelectedSection('Donation')}
//                             >
//                                 <p className='text-lg'>Donation</p>
//                             </div>
//                             <div
//                                 className={`form-option px-6 py-1 rounded-full cursor-pointer mb-2 mt-2 ${selectedSection === 'Other' ? 'bg-blue text-white' : ''}`}
//                                 onClick={() => setSelectedSection('Other')}
//                             >
//                                 <p className='text-lg'>Other</p>
//                             </div>
//                         </div>
//                      </div>

//                     <div className="notes py-6 flex justify-center items-center text-sm rounded-lg mt-5">
//                         <p>Note: In case of New Tax Regime, only deduction u/s 80CCD(2) is allowed. This is available under Other tab.</p>
//                     </div>

//                     {/* Render the selected component */}
//                     {renderSelectedSection()}
//                 </div>

//                 <div className="financial-btns flex flex-wrap justify-between mb-10">
//                     <a href="\house-property">
//                         <div className="back-btn flex items-center gap-3 py-3 px-10 mb-4 bg-white rounded-md">
//                         <img src="https://media-hosting.imagekit.io//69ad5096714e471b/arrow-left.png?Expires=1836968249&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UbyR63UpwFKqNYhmOCzwA20u9i9m-8NefJS86pMPpxEWQoLF7fazDhSEfVF3vcKzDD5KH1Os3RCGguGvQGqvEYT6cp~8YwgtE6-ppFllVcZE-BwmH0A8nC5R3BrWIg40ANZQl2~qQG-iQVh0KCttfOkpBTvQTPTPbr~GKD2OgeWEIjqgUOzTcJyI0~tMjClIigEsSZ25AJSyZgMhnUIUjXMkScOIGm84wTr4ZOzRzWrw5fgv3hHp4063bIA4VC-fseCnC-nZ5LXjYWngvRYrQvpjXMtaXKsZadXkEoGDjrB1p1leTI9GqYN~AVEtGW4WqrUvxNkXxVwyj9DXyFzULQ__" alt="" height={23} width={23} />
//                             <p className="text-blue">Back</p>
//                         </div>
//                     </a>

//                     <div className="other-btns flex flex-wrap gap-4">
//                         <div className="get-button px-10 py-3 rounded-md">
//                             <p className="text-white font-semibold">GET CA ASSISTED</p>
//                         </div>
                        
//                             <div className="continue-btn flex gap-3 items-center px-10 py-3 rounded-md" onClick={handleSubmit}>
//                                 <p className="text-white font-semibold">CONTINUE</p>
//                                 <img src="https://tax2win.in/assets-new/img/diy-landing/bdark-arrow.svg" alt="" />
//                             </div>
                       
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Deduction;

"use client"

import React, { useState } from 'react';
import "./deduction.css";
import Section80C from './Section80C';
import Section80D from './Section80D';
import Donation from './Donation';
import Other from './Other';
import { useRouter } from 'next/navigation';
import axios from "axios"; 
import { useParams } from 'next/navigation';


const Deduction = () => {
    const router = useRouter();
    const [selectedSection, setSelectedSection] = useState('Section80C');
    const [sectionData, setSectionData] = useState({
        Section80C: {},
        Section80D: {},
        Donation: {},
        Other: {}
    });

    const { id } = useParams();

    const handleDataUpdate = (sectionName, data) => {
        setSectionData((prevData) => ({
            ...prevData,
            [sectionName]: data
        }));
    };

    const handleSubmit = async () => {
       
        console.log(sectionData[selectedSection]);

        try {
            
            const response = await axios.put( `https://backend-data-five.vercel.app/api/itr/update/${id}`, sectionData[selectedSection]  );
        
            console.log("API Response:", response.data);
        
            // Redirect to the next form upon success
            router.push(`/bank-details/${id}`);
          } catch (error) {
            console.error("Error while calling the API:", error.response?.data || error.message);  
          }

    };

    const renderSelectedSection = () => {
        switch (selectedSection) {
            case 'Section80C':
                return <Section80C handleDataUpdate={(data) => handleDataUpdate('Section80C', data)} />;
            case 'Section80D':
                return <Section80D handleDataUpdate={(data) => handleDataUpdate('Section80D', data)} />;
            case 'Donation':
                return <Donation handleDataUpdate={(data) => handleDataUpdate('Donation', data)} />;
            case 'Other':
                return <Other handleDataUpdate={(data) => handleDataUpdate('Other', data)} />;
            default:
                return <Section80C handleDataUpdate={(data) => handleDataUpdate('Section80C', data)} />;
        }
    };

    return (
        <div className="deduction-section flex flex-col justify-center items-center text-center pt-20">
            <h1 className="text-2xl font-semibold">ENTER TAX SAVING DEDUCTIONS</h1>
            <p className="text-xl mt-1">We're here to help you to get maximum deductions on your TAX</p>

            <div className="deduction-form relative rounded-2xl bg-white p-5 lg:p-8 md:p-8 xl:p-8 mb-7 mt-20 flex flex-col">
                <div className="flex justify-center">
                    <div className="form-options flex flex-wrap justify-center gap-2 bg-white px-2 rounded-full shadow-md">
                        <div
                            className={`form-option px-6 py-1 rounded-full cursor-pointer mb-2 mt-2 ${selectedSection === 'Section80C' ? 'bg-blue text-white' : ''}`}
                            onClick={() => setSelectedSection('Section80C')}
                        >
                            <p className='text-lg'>Section 80C</p>
                        </div>
                        <div
                            className={`form-option px-6 py-1 rounded-full cursor-pointer mb-2 mt-2 ${selectedSection === 'Section80D' ? 'bg-blue text-white' : ''}`}
                            onClick={() => setSelectedSection('Section80D')}
                        >
                            <p className='text-lg'>Section 80D</p>
                        </div>
                        <div
                            className={`form-option px-6 py-1 rounded-full cursor-pointer mb-2 mt-2 ${selectedSection === 'Donation' ? 'bg-blue text-white' : ''}`}
                            onClick={() => setSelectedSection('Donation')}
                        >
                            <p className='text-lg'>Donation</p>
                        </div>
                        <div
                            className={`form-option px-6 py-1 rounded-full cursor-pointer mb-2 mt-2 ${selectedSection === 'Other' ? 'bg-blue text-white' : ''}`}
                            onClick={() => setSelectedSection('Other')}
                        >
                            <p className='text-lg'>Other</p>
                        </div>
                    </div>
                </div>

                {/* Render the selected component */}
                {renderSelectedSection()}
            </div>

            <div className="financial-btns flex flex-wrap justify-between mb-10">
                <a href="\house-property">
                    <div className="back-btn flex items-center gap-3 py-3 px-10 mb-4 bg-white rounded-md">
                    <img src="/assest/left-arrow.png" alt="" height={23} width={18} />
                        <p className="text-blue">Back</p>
                    </div>
                </a>

                <div className="other-btns flex flex-wrap gap-4">
                    <div className="get-button px-10 py-3 rounded-md">
                        <p className="text-white font-semibold">GET CA ASSISTED</p>
                    </div>

                    <div className="continue-btn flex gap-3 items-center px-10 py-3 rounded-md" onClick={handleSubmit}>
                        <p className="text-white font-semibold">CONTINUE</p>
                        <img src="/assest/arrow-right.png" alt="Continue" width="26" height="26"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deduction;
