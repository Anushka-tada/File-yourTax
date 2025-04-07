"use client"

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./popup.css";
import axios from "axios"; 


const Popup = ({ visible, onClose }) => {
  const [popupData, setPopupData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPopupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Button Click
  const handleHireClick =  async () => {
    console.log("Popup Data:", popupData);
    // Optionally reset the form after console logging
    try{
        const response = await axios.post("https://backend-data-five.vercel.app/api/enquiry/create", popupData);

        console.log("API Response:", response.data);
       if(response.data.statusCode == '200'){
        setPopupData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        
          onClose();
       }

    }
    catch(error){
        console.log(error)
    }
  };

  if (!visible) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
          onClick={onClose}
        >
          ✖
        </button>
        <div className="connect-popup py-4 flex flex-col items-center">
          <h1 className="px-2 font-semibold text-xl">
            Enter your details to help us connect with you
          </h1>
          <form className="flex flex-col items-center mt-4 gap-3">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              value={popupData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="py-2 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              value={popupData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="py-2 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Mobile Input */}
            <input
              type="text"
              name="phone"
              value={popupData.phone}
              onChange={handleInputChange}
              placeholder="Mobile"
              className="py-2 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Message Input */}
            <input
              type="text"
              name="message"
              value={popupData.message}
              onChange={handleInputChange}
              placeholder="Message"
              className="py-2 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </form>

          {/* Hire Button */}
          <div
            className="hire-btn rounded-full flex justify-center mt-4 bg-blue-500 cursor-pointer"
            onClick={handleHireClick} // Call the handleHireClick function
          >
            <p className="px-4 py-2 font-semibold text-white">Hire a Tax Expert</p>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("popup-root") // Render into popup-root in layout.js
  );
};

export default Popup;
