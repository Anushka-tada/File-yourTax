"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./basic-form.css";
import axios from "axios";
import { useParams } from "next/navigation";

const BasicForm = () => {
  const [formData, setFormData] = useState({
    pincode: "",
    address1: "",
    address2: "",
  });

  const [errors, setErrors] = useState({
    pincode: "",
    address1: "",
  });

  const { id } = useParams();
  console.log(id);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Clear error when user types
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.pincode || !/^\d{6}$/.test(formData.pincode)) {
      isValid = false;
      newErrors.pincode = "Please enter a valid 6-digit pincode.";
    }

    if (!formData.address1) {
      isValid = false;
      newErrors.address1 = "This field is required.";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop the function if validation fails
    }

    console.log("Form Data:", formData);

   
    const user = JSON.parse(localStorage.getItem("user")); 
    if (user && user.email) {
      const email = user.email;

      const progress = JSON.parse(localStorage.getItem("formProgress")) || {};
      progress[email] = 5; 
      localStorage.setItem("formProgress", JSON.stringify(progress));
    }

    try {
     
      const response = await axios.put(
        `https://backend-data-five.vercel.app/api/itr/update/${id}`,  formData );

      console.log("API Response:", response.data);

     
      router.push(`/house-property/${id}`);
    } catch (error) {
      console.error("Error while calling the API:", error.response?.data || error.message);
    }
  };

  const handleBack = () => {
    router.push(`/basic-details/${id}`);
  };

  return (
    <>
      <div className="basic-form-section flex flex-col justify-center items-center text-center pt-20">
        <h1 className="text-2xl font-semibold">ENTER PERMANENT/CURRENT ADDRESS DETAILS</h1>
        <p className="text-xl mt-1">We'll keep it a secret.</p>

        <div className="basic-form-outer rounded-2xl bg-white p-5 lg:p-8 md:p-8 xl:p-8 mb-7 mt-10 flex flex-col items-start">
          <div className="basic-form">
            <div className="input flex flex-col items-start mb-4">
              <label htmlFor="pincode">Pincode*</label>
              <input
                type="text"
                name="pincode"
                className="p-3 rounded-lg"
                value={formData.pincode}
                onChange={handleChange}
              />
              {errors.pincode && <span className="text-red-500">{errors.pincode}</span>}
            </div>

            <div className="flex flex-wrap gap-5">
              <div className="input flex flex-col items-start">
                <label htmlFor="address1">Flat / Door / Building *</label>
                <input
                  type="text"
                  name="address1"
                  className="p-3 rounded-lg"
                  value={formData.address1}
                  onChange={handleChange}
                />
                {errors.address1 && <span className="text-red-500">{errors.address1}</span>}
              </div>

              <div className="input flex flex-col items-start">
                <label htmlFor="address2">Building / Village</label>
                <input
                  type="text"
                  name="address2"
                  className="p-3 rounded-lg"
                  value={formData.address2}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="financial-btns flex flex-wrap justify-between mb-10">
          <div
            className="back-btn flex items-center gap-3 py-3 px-10 mb-4 bg-white rounded-md"
            onClick={handleBack}
          >
            <img src="/assest/left-arrow.png" alt="" height={23} width={18} />
            <p className="text-blue">Back</p>
          </div>

          <div className="other-btns flex flex-wrap gap-4">
            {/* <div className="get-button px-10 py-3 rounded-md">
              <p className="text-white font-semibold">GET CA ASSISTED</p>
            </div> */}

            <div
              className="continue-btn flex gap-3 items-center px-10 py-3 rounded-md"
              onClick={handleSubmit}
            >
              <p className="text-white font-semibold">CONTINUE</p>
              <img src="/assest/arrow-right.png" alt="Continue" width="26" height="26"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicForm;
