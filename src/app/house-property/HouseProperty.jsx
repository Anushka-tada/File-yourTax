

"use client"

import "./houseproperty.css";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from "axios"; 
import { useParams } from 'next/navigation';

const HouseProperty = () => {

    const router = useRouter();
    // for self occupied
    const [showYesContent, setShowYesContent] = useState(false);
    const [selectedButton, setSelectedButton] = useState('no');

    // for let out
    const [showLetYesContent, setShowLetYesContent] = useState(false);
    const [LetselectedButton, setLetSelectedButton] = useState('no');
    const [LetOutContent, setLetOutContent] = useState('no');
    const [letOutSections, setLetOutSections] = useState(1);

     const { id } = useParams();
                console.log(id);

    const addLetOutSection = () => {
        setFormData((prevData) => ({
            ...prevData,
            tenants: [...prevData.tenants, { name: "", pan: "", rent: "" }], // Add a new tenant object
        }));
        setLetOutSections(letOutSections + 1); // Increment section count
    };
    
    const removeLetOutSection = () => {
        if (letOutSections > 1) {
            setFormData((prevData) => ({
                ...prevData,
                tenants: prevData.tenants.slice(0, -1), // Remove the last tenant object
            }));
            setLetOutSections(letOutSections - 1); // Decrement section count
        }
    };
    

    const [formData, setFormData] = useState({
        housePropertyType: "self",
        pincode: "",
        address: "",
        estimatedRent: "",
        tenants: [{ name: "", pan: "", rent: "" }],
        loanTaken: "no",
        interestOnLoan: "",
        repairLoan: "",
        preConstructionInterest: "",
        propertyTaxPaid: "no",
        propertyTaxAmount: "",
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleTenantChange = (index, field, value) => {
        const updatedTenants = [...formData.tenants];
        updatedTenants[index][field] = value;
        setFormData((prevData) => ({ ...prevData, tenants: updatedTenants }));
    };


    const handleSubmit = async (e) => {

       

        const user = JSON.parse(localStorage.getItem("user")); // Retrieve user info
        if (user && user.email) {
            const email = user.email;
            const progress = JSON.parse(localStorage.getItem("formProgress")) || {};
            progress[email] = 6; // Set progress to Form 6 (deduction)
            localStorage.setItem("formProgress", JSON.stringify(progress));
        }

        console.log("Form Data:", formData);
        try {
            
            const response = await axios.put( `https://backend-data-five.vercel.app/api/itr/update/${id}`, formData  );
        
            console.log("API Response:", response.data);
        
            // Redirect to the next form upon success
            router.push(`/deduction/${id}`);
          } catch (error) {
            console.error("Error while calling the API:", error.response?.data || error.message);  
          }
    };


//     const handleBack = () => {
//   router.push(`/basic-details2/${id}`);
// }

    return (
        <>
            <div className="house-property flex flex-col justify-center items-center text-center pt-20">
                <h1 className="text-2xl font-semibold">ENTER OWNED HOUSE PROPERTY DETAILS-RENT RECEIVED OR HOME LOAN INTEREST PAID</h1>
                <p className="text-xl mt-1">Enter details about all your Self occupied / Let out property.</p>

                <div className="house-propery-form rounded-2xl bg-white p-5 lg:p-8 md:p-8 xl:p-8 mb-7 mt-10 flex flex-col ">
                    <div className="flex flex-wrap justify-around py-4 types-imput items-center">
                        <label htmlFor="house-property-type" className="text-xl font-semibold mb-3">Types of House Property</label>
                        <select id="house-property-type" className="p-3 rounded-lg" onChange={(e) => {
                            const selectedValue = e.target.value;
                            // Update formData
                            setFormData((prevData) => ({
                                ...prevData,
                                housePropertyType: selectedValue,
                            }));
                            // Update LetOutContent
                            setLetOutContent(e.target.value);
                        }}>
                            <option value="self">Self Occupied</option>
                            <option value="let">Let Out</option>
                            <option value="deemed">Deemed Let Out</option>
                        </select>
                    </div>

                    <div className="address pb-5 flex flex-col items-start">
                        <h3 className="text-xl font-semibold mb-6 mt-4">Address details</h3>
                        <div className="address-inputs flex flex-wrap gap-4">
                            <div className="flex flex-col items-start">
                                <label htmlFor="pincode">Pincode</label>
                                <input id="pincode" type="text" className="p-3 rounded-lg mt-1 add-inpt" value={formData.pincode}
                                    onChange={handleInputChange} />
                            </div>
                            <div className="flex flex-col items-start">
                                <label htmlFor="address">Address</label>
                                <input id="address" type="text" className="p-3 rounded-lg mt-1 add-inpt" value={formData.address}
                                    onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>


                    {/* content for Deemed let out option */}

                    {LetOutContent === 'deemed' && (
                        <>
                            <div className="deemed-content flex justify-start mt-6 gap-5 pb-5 ">
                                <div className="yes-input flex flex-col">
                                    <label htmlFor="estimatedRent" className="text-xl font-semibold">Estimated rent receivable *</label>
                                    <input id="estimatedRent" type="text" className="p-3 rounded-lg mt-3" value={formData.estimatedRent}
                                        onChange={handleInputChange} />
                                </div>
                            </div>
                        </>
                    )}

                    {/* content for let out option */}

                    {LetOutContent === 'let' && (
                        <>
                            <div className="deemed-content  mt-6 flex flex-col items-start pb-5 ">
                                <h2 className="text-xl font-semibold">Tenant Details</h2>
                                {formData.tenants.map((tenant, index) => (
    <div key={index} className="deemed-inputs flex flex-wrap justify-start mt-3 gap-5">
        <div className="yes-input flex flex-col items-start">
            <label htmlFor={`tenant-name-${index}`}>Name of Tenant*</label>
            <input
                id={`tenant-name-${index}`}
                type="text"
                className="p-3 rounded-lg mt-3"
                value={tenant.name} // Bind value
                onChange={(e) => handleTenantChange(index, "name", e.target.value)}
            />
        </div>

        <div className="yes-input flex flex-col items-start">
            <label htmlFor={`tenant-pan-${index}`}>PAN of Tenant (optional)</label>
            <input
                id={`tenant-pan-${index}`}
                type="text"
                className="p-3 rounded-lg mt-3"
                value={tenant.pan} // Bind value
                onChange={(e) => handleTenantChange(index, "pan", e.target.value)}
            />
        </div>

        <div className="yes-input flex flex-col items-start">
            <label htmlFor={`rent-received-${index}`}>Rent Received *</label>
            <input
                id={`rent-received-${index}`}
                type="text"
                className="p-3 rounded-lg mt-3"
                value={tenant.rent} // Bind value
                onChange={(e) => handleTenantChange(index, "rent", e.target.value)}
            />
        </div>
    </div>
))}


                            </div>
                            <div className="flex justify-end gap-4 mt-4">
                                <button onClick={addLetOutSection} className="p-1 px-3  text-2xl font-bold  rounded-lg bg-blue text-white">+ </button>
                                <button onClick={removeLetOutSection} className="p-1 px-3 text-2xl font-bold rounded-lg bg-gray-300 text-black">- </button>
                            </div>
                        </>
                    )}

                    {/* self yes no section */}
                    <div className="loan-input flex flex-wrap justify-between mt-9">
                        <h2 className="text-xl font-semibold">Have you taken any loan to buy the property?</h2>
                        <div className="loan-btns flex gap-4 mt-3">
                            <div
                                className={`yes-btn rounded-full shadow px-8 py-1 ${selectedButton === 'no' ? 'bg-blue' : ''}`}
                                onClick={() => {
                                    setShowYesContent(false);
                                    setSelectedButton('no');
                                    setFormData((prevData) => ({ ...prevData, loanTaken: "no", interestOnLoan: "", repairLoan: "", preConstructionInterest: "" }));
                                }}
                            >
                                <p className={`${selectedButton === 'no' ? 'text-white' : ''}`}>No</p>
                            </div>
                            <div
                                className={`yes-btn rounded-full shadow px-8 py-1 ${selectedButton === 'yes' ? 'bg-blue' : ''}`}
                                onClick={() => {
                                    setShowYesContent(true);
                                    setSelectedButton('yes');
                                    setFormData((prevData) => ({ ...prevData, loanTaken: "yes" }));
                                }}
                            >
                                <p className={`${selectedButton === 'yes' ? 'text-white' : ''}`}>Yes</p>
                            </div>
                        </div>
                    </div>

                    {showYesContent && (
                        <div className="yes-content flex flex-wrap mt-6 gap-5">
                            <div className="yes-input flex flex-col items-start">
                                <label htmlFor="interest-on-loan">Interest on Loan for purchase of house property</label>
                                <input
                                    id="interest-on-loan"
                                    type="text"
                                    className="p-3 rounded-lg mt-1"
                                    value={formData.interestOnLoan}
                                    onChange={(e) =>
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            interestOnLoan: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                            <div className="yes-input flex flex-col items-start">
                                <label htmlFor="repair-loan">Interest on Loan for repair/renewal or reconstruction</label>
                                <input
                                    id="repair-loan"
                                    type="text"
                                    className="p-3 rounded-lg mt-1"
                                    value={formData.repairLoan}
                                    onChange={(e) =>
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            repairLoan: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                            <div className="yes-input flex flex-col items-start">
                                <label htmlFor="pre-construction-interest">Pre Construction Period Interest</label>
                                <input
                                    id="pre-construction-interest"
                                    type="text"
                                    className="p-3 rounded-lg mt-1"
                                    value={formData.preConstructionInterest}
                                    onChange={(e) =>
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            preConstructionInterest: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                    )}

                    {/* let out yes no section */}
                    {(LetOutContent === 'let' || LetOutContent === 'deemed') && (
                        <>
                            <div className="loan-input flex flex-wrap justify-between mt-9">
                                <h2 className="text-xl font-semibold">Property tax paid?</h2>
                                <div className="loan-btns flex gap-4 mt-3">
                                    <div
                                        className={`yes-btn rounded-full shadow px-8 py-1 ${LetselectedButton === 'no' ? 'bg-blue' : ''}`}
                                        onClick={() => {
                                            setShowLetYesContent(false);
                                            setLetSelectedButton('no');
                                            setFormData((prevData) => ({
                                                ...prevData,
                                                propertyTaxPaid: "no",
                                                propertyTaxAmount: "", // Reset the amount when "No" is selected
                                            }));
                                        }}
                                    >
                                        <p className={`${LetselectedButton === 'no' ? 'text-white' : ''}`}>No</p>
                                    </div>
                                    <div
                                        className={`yes-btn rounded-full shadow px-8 py-1 ${LetselectedButton === 'yes' ? 'bg-blue' : ''}`}
                                        onClick={() => {
                                            setShowLetYesContent(true);
                                            setLetSelectedButton('yes');
                                            setFormData((prevData) => ({
                                                ...prevData,
                                                propertyTaxPaid: "yes",
                                            }));
                                        }}
                                    >
                                        <p className={`${LetselectedButton === 'yes' ? 'text-white' : ''}`}>Yes</p>
                                    </div>
                                </div>
                            </div>

                            {showLetYesContent && (
                                <div className="yes-content flex justify-start mt-3 gap-5">
                                    <div className="yes-input flex flex-col">
                                        <label htmlFor="property-tax-amount">Property Tax/ Municipal Tax Paid By Owner *</label>
                                        <input
                                            id="property-tax-amount"
                                            type="text"
                                            className="p-3 rounded-lg mt-1"
                                            value={formData.propertyTaxAmount}
                                            onChange={(e) =>
                                                setFormData((prevData) => ({
                                                    ...prevData,
                                                    propertyTaxAmount: e.target.value,
                                                }))
                                            }
                                        />
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                </div>


                <div className="add-property flex xl:justify-end lg:justify-end md:justify-end sm:justify-end justify-center mb-5">
                    <div className="add-btn rounded-full shadow px-8 py-2">
                        <p className="text-white">+ Add House Property</p>
                    </div>
                </div>

                <div className="financial-btns flex flex-wrap justify-between mb-10">
                   
                        <div className="back-btn flex items-center gap-3 py-3 px-10 mb-4 bg-white rounded-md cursor-pointer">
                        <img src="/assest/left-arrow.png" alt="" height={23} width={18} />
                            <p className="text-blue">Back</p>
                        </div>
                   
                    <div className="other-btns flex flex-wrap gap-4">
                        <div className="get-button px-10 py-3 rounded-md">
                            <p className="text-white font-semibold">GET CA ASSISTED</p>
                        </div>

                        <div className="continue-btn flex gap-3 items-center px-10 py-3 rounded-md cursor-pointer" onClick={handleSubmit}>
                            <p className="text-white font-semibold">CONTINUE</p>
                            <img src="/assest/arrow-right.png" alt="Continue" width="26" height="26"></img>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default HouseProperty;
