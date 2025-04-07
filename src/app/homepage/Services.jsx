"use client"

import React, { useState } from "react";
import "./Services.css";
import Popup from "../components/Navbar/Popup"; // Importing the reusable Popup component

const Services = () => {
  const [isPopupVisible, setPopupVisible] = useState(false); // State to manage popup visibility

  // Function to show the popup
  const showPopup = () => {
    setPopupVisible(true);
  };

  // Function to hide the popup
  const hidePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="section5 lg:px-24 px-4 py-20">
      <div className="text-center">
        <p className="font-medium mb-3 text-lg section5-p">Popular Services</p>
        <h1 className="section5-heading lg:font-bold md:font-bold font-semibold text-5xl mb-12">
          Income Tax Services Provided by Us
        </h1>
      </div>

      <div className="section5-boxes flex flex-wrap justify-center lg:px-16 lg:gap-5 gap-2">
        <div className="flex flex-wrap justify-center lg:flex-nowrap gap-5">
          {/* 1st Blue Box */}
          <div className="section5-box-1 first-box p-9 rounded-2xl">
            <h1 className="text-white lg:font-bold md:font-bold font-semibold text-4xl mb-6">
              Strategic Tax Planning Services
            </h1>
            <p className="text-white mb-8 text-xl">
              Optimize your tax savings with FileyourTax Tax Advisory Services, providing expert
              guidance on advance tax calculations, property transactions, and other tax-related matters.
            </p>
            {/* Button to trigger popup */}
            <div
              className="section5-btn flex bg-white inline-flex py-3 px-10 gap-3 rounded-full mt-4 cursor-pointer"
              onClick={showPopup}
            >
              <p className="font-medium section5-p">Get Expert Help</p>
              <img
                src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg"
                alt="Tax Planning Services"
                title="Tax Planning Services"
              />
            </div>
          </div>

          {/* 2nd White Box */}
          <div className="section5-box-sameline rounded-xl p-5 bg-white">
            <img
              src="https://tax2win.in/assets-new/img/new-theme/tax-notice-assistance.svg"
              alt="Income Tax Notice Assistance"
              title="Income Tax Notice Assistance"
              loading="lazy"
              width="57"
              height="57"
              className="icon"
            />
            <h2 className="text-2xl font-bold mb-5">Support for Income Tax Notice Resolution</h2>
            <p className="mb-4">
              A dedicated tax expert provides guidance and assistance in navigating and responding
              to notices issued under Sections 139(9), 143(1), high-value transactions, and other
              communications from the Income Tax Department.
            </p>
            <div className="flex gap-2 cursor-pointer"  onClick={showPopup}>
              <p className="text-blue font-bold"> Connect With Tax Experts</p>
              <img
                src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg"
                alt="Income Tax Notice Assistance"
                title="Income Tax Notice Assistance"
                loading="lazy"
                width="20"
                height="20"
                className="icon"
              />
            </div>
          </div>
        </div>

        {/* Remaining Boxes */}
        <div className="section5-box-2 rounded-xl p-5 bg-white flex flex-col justify-between">
          <img
            src="https://tax2win.in/assets-new/img/new-theme/icon-eca.svg"
            alt="Expert Assisted Filing"
            title="Expert Assisted Filing"
            loading="lazy"
            width="57"
            height="57"
            className="icon"
          />
          <div>
            <h2 className="text-2xl font-bold mb-3 mt-2">Professionally Assisted Income Tax Return Filing </h2>
            <p className="mb-4">
              Engage a dedicated eCA for your Income Tax Filing, ensuring a
              seamless and efficient process with accurate calculations to maximize your refund.
            </p>
          </div>
          <div className="flex gap-2">
            <p className="text-blue font-bold">Book eCA Today</p>
            <img
              src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg"
              alt="Income Tax Notice Assistance"
              title="Income Tax Notice Assistance"
              loading="lazy"
              width="20"
              height="20"
              className="icon"
            />
          </div>
        </div>

        <div className="section5-box-2 rounded-xl p-5 bg-white flex flex-col justify-between">
          <img
            src="https://tax2win.in/assets-new/img/new-theme/nri-filing.svg"
            alt="NRI Tax Filing"
            title="NRI Tax Filing"
            loading="lazy"
            width="50"
            height="50"
            className="icon"
          />
          <div>
            <h2 className="text-2xl font-bold mb-3 mt-4">Non-Resident Indian (NRI) Tax Filing Services </h2>
            <p className="mb-4">
              Streamline your Indian tax filing with our expert assistance, encompassing both foreign
              and domestic income. Our online Chartered Accountant ensures full compliance with Income
              Tax laws and helps you claim all eligible tax deductions.
            </p>
          </div>
          <div className="flex gap-2">
            <p className="text-blue font-bold"> Connect Now</p>
            <img
              src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg"
              alt="Income Tax Notice Assistance"
              title="Income Tax Notice Assistance"
              loading="lazy"
              width="20"
              height="20"
              className="icon"
            />
          </div>
        </div>

        <div className="section5-box-2 rounded-xl p-5 bg-white flex flex-col justify-between">
          <img
            src="https://tax2win.in/assets-new/img/new-theme/icon_upload.svg"
            alt="Upload Form 16"
            title="Upload Form 16"
            loading="lazy"
            width="57"
            height="57"
            className="icon"
          />
          <div>
            <h2 className="text-2xl font-bold mb-3">Upload Form 16</h2>
            <p className="mb-4">
              Streamline the Income Tax Return filing process with File Your Tax. Simply submit your
              Form 16, and your ITR will be prepared automatically.
            </p>
          </div>
          <div className="flex gap-2 ">
            <p className="text-blue font-bold">Upload Now</p>
            <img
              src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg"
              alt="Income Tax Notice Assistance"
              title="Income Tax Notice Assistance"
              loading="lazy"
              width="20"
              height="20"
              className="icon"
            />
          </div>
        </div>

        <div className="section5-box-2 rounded-xl p-5 bg-white flex flex-col justify-between">
          <img
            src="https://tax2win.in/assets-new/img/new-theme/capital-gain.svg"
            alt="Capital Gain Tax Filing"
            title="Capital Gain Tax Filing"
            loading="lazy"
            width="55"
            height="55"
            className="icon"
          />
          <div>
            <h2 className="text-2xl font-bold mb-3 mt-2">Capital Gains Tax Filing Services </h2>
            <p className="mb-4">
              Obtain expert tax guidance on transactions related to the sale of property, equity
              shares, mutual fund units, or bonds, in addition to salary or business income.
            </p>
          </div>
          <div className="flex gap-2">
            <p className="text-blue font-bold"> Connect Today</p>
            <img
              src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg"
              alt="Income Tax Notice Assistance"
              title="Income Tax Notice Assistance"
              loading="lazy"
              width="20"
              height="20"
              className="icon"
            />
          </div>
        </div>
      </div>

      {/* Popup Component */}
      <Popup visible={isPopupVisible} onClose={hidePopup} />
    </div>
  );
};

export default Services;
