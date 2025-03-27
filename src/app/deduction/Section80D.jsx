"use client";

import React, { useState } from 'react';
import "./deduction.css";

const Section80D = ({ handleDataUpdate }) => {
    const [forms, setForms] = useState([
        { 
            isPolicyHolderSenior: 'no', 
            insuranceType: '', 
            preventiveHealthCheckUp: '', 
            medicalExpenditure: '', 
            medicalInsurancePremium: '' 
        }
    ]);

    const handleAddForm = () => {
        setForms([
            ...forms, 
            { 
                isPolicyHolderSenior: 'no', 
                insuranceType: '', 
                preventiveHealthCheckUp: '', 
                medicalExpenditure: '', 
                medicalInsurancePremium: '' 
            }
        ]);
    };

    const handleRemoveForm = () => {
        if (forms.length > 1) {
            setForms(forms.slice(0, -1));
        }
    };

    const handleButtonClick = (index, value) => {
        const newForms = [...forms];
        newForms[index].isPolicyHolderSenior = value; // Updates senior citizen status
        setForms(newForms);
    };

    const handleInputChange = (index, fieldName, value) => {
        const newForms = [...forms];
        newForms[index][fieldName] = value;
        setForms(newForms);
        handleDataUpdate(newForms); // Pass updated data to the parent component
    };

    return (
        <>
            {forms.map((form, index) => (
                <div className="80D-form mt-5" key={index}>
                    <div className='flex gap-5 items-center flex-wrap'>
                        <div className="D-input flex flex-col gap-1 items-start mt-6">
                            <label htmlFor={`insurance-type-${index}`}>Medical Insurance</label>
                            <select
                                id={`insurance-type-${index}`}
                                className="p-3 rounded-lg"
                                value={form.insuranceType}
                                onChange={(e) => handleInputChange(index, 'insuranceType', e.target.value)}
                            >
                                <option value="">Select Policy type</option>
                                <option value="for-self-spouse-children">For Self, Spouse and Dependent children</option>
                                <option value="for-parents">For Parents</option>
                            </select>
                        </div>

                        <div className="D-input flex flex-wrap justify-between items-center gap-5 policy-holder">
                            <p className='text-lg font-bold'>Is any of the policy holder aged 60 years or more</p>
                            <div className="btns flex gap-4 mt-3">
                                <div
                                    className={`yes-btn rounded-full cursor-pointer shadow px-8 py-1 ${form.isPolicyHolderSenior === 'no' ? 'bg-green-700' : ''}`}
                                    onClick={() => handleButtonClick(index, 'no')}
                                >
                                    <p className={`${form.isPolicyHolderSenior === 'no' ? 'text-white' : ''}`}>No</p>
                                </div>
                                <div
                                    className={`yes-btn rounded-full cursor-pointer shadow px-8 py-1 ${form.isPolicyHolderSenior === 'yes' ? 'bg-green-700' : ''}`}
                                    onClick={() => handleButtonClick(index, 'yes')}
                                >
                                    <p className={`${form.isPolicyHolderSenior === 'yes' ? 'text-white' : ''}`}>Yes</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6">
                        <div className="D-input flex flex-col gap-1 items-start mt-4">
                            <label htmlFor={`preventive-health-checkup-${index}`}>Preventive Health Check Up</label>
                            <input
                                type="text"
                                id={`preventive-health-checkup-${index}`}
                                className="p-3 rounded-lg"
                                value={form.preventiveHealthCheckUp}
                                onChange={(e) => handleInputChange(index, 'preventiveHealthCheckUp', e.target.value)}
                            />
                        </div>

                        {form.isPolicyHolderSenior === 'yes' && (
                            <div className="D-input flex flex-col gap-1 items-start mt-4">
                                <label htmlFor={`medical-expenditure-${index}`}>Medical Expenditure</label>
                                <input
                                    type="text"
                                    id={`medical-expenditure-${index}`}
                                    className="p-3 rounded-lg"
                                    value={form.medicalExpenditure}
                                    onChange={(e) => handleInputChange(index, 'medicalExpenditure', e.target.value)}
                                />
                            </div>
                        )}

                        <div className="D-input flex flex-col gap-1 items-start mt-4">
                            <label htmlFor={`medical-insurance-premium-${index}`}>Medical Insurance Premium</label>
                            <input
                                type="text"
                                id={`medical-insurance-premium-${index}`}
                                className="p-3 rounded-lg"
                                value={form.medicalInsurancePremium}
                                onChange={(e) => handleInputChange(index, 'medicalInsurancePremium', e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex justify-end gap-4 mt-5">
                <button onClick={handleAddForm} className="bg-green-700 text-white px-4 py-2 rounded-lg text-xl font-bold">+</button>
                <button onClick={handleRemoveForm} className="bg-gray-300 text-black px-4 py-2 rounded-lg text-xl font-bold">-</button>
            </div>
        </>
    );
};

export default Section80D;
