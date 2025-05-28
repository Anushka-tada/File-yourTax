"use client";
import React, { useState } from 'react';
import "./pricing.css";
import ItrFilling from './ItrFilling';
import TaxPlanning from './TaxPlanning';
import GST from './GST';
import Notice from './Notice';
import ITRfiling from './ITRfiling';

const Pricing = () => {
    const [activeComponent, setActiveComponent] = useState('ITR Filling');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'ITR Filling':
                return <ITRfiling/>
            case 'Tax Planning':
                return <TaxPlanning />;
            case 'GST':
                return <GST />;
            case 'Notice':
                return <Notice />;
            default:
                return <p className="text-white">Select a service to view details.</p>;
        }
    };

    return (
        <div>
            <div className="pricing-section flex flex-col text-center items-center">
                <div className="pricing-text">
                    <h1 className="font-semibold text-5xl text-white pricing-h">
                    Get top-quality tax services at unbeatable prices.
                    </h1>
                    <p className="text-xl mt-3 text-white">
                        Pick a service and choose a plan that’s right for you.
                    </p>
                </div>
                <div className="price-btns flex justify-center gap-3 mt-5">
                    <div
                        className={` flex items-center justify-center cursor-pointer ${activeComponent === 'ITR Filling' ? 'price-btn' : 'price-btn2'
                            }`}
                        onClick={() => setActiveComponent('ITR Filling')}
                    >
                        <p className="text-white">ITR Filling</p>
                    </div>
                    <div
                        className={` flex items-center justify-center cursor-pointer ${activeComponent === 'Tax Planning' ? 'price-btn' : 'price-btn2'
                            }`}
                        onClick={() => setActiveComponent('Tax Planning')}
                    >
                        <p className="text-white">Tax Planning</p>
                    </div>
                    <div
                        className={`flex items-center justify-center cursor-pointer ${activeComponent === 'GST' ? 'price-btn' : 'price-btn2'
                            }`}
                        onClick={() => setActiveComponent('GST')}
                    >
                        <p className="text-white">GST</p>
                    </div>
                    <div
                        className={` flex items-center justify-center cursor-pointer ${activeComponent === 'Notice' ? 'price-btn' : 'price-btn2'
                            }`}
                        onClick={() => setActiveComponent('Notice')}
                    >
                        <p className="text-white">Notice</p>
                    </div>
                </div>
            </div>
               
            <div className="price-component">
                {renderComponent()}
            </div>
        </div>
    );
};

export default Pricing;
