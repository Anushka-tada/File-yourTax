"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./financial.css";
import axios from "axios";
import { useParams } from "next/navigation";

const Financial = () => {
  const { id } = useParams();
  console.log(id);

    const [isLoading , setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    financialYear: "2024-2025",
    panNumber: "",
    dateOfBirth: "",
  });

  const [errors, setErrors] = useState({
    panNumber: "",
    dateOfBirth: "",
  });

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

    if (!formData.panNumber || formData.panNumber.length !== 10) {
      isValid = false;
      newErrors.panNumber = "Please enter a valid 10-character PAN number.";
    }

    if (!formData.dateOfBirth || !/^\d{2}-\d{2}-\d{4}$/.test(formData.dateOfBirth)) {
      isValid = false;
      newErrors.dateOfBirth = "Please enter a valid date (dd-mm-yyyy).";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleContinue = async () => {
    if (!validateForm()) {
      return; // Stop the function if validation fails
    }

    console.log(formData);

    try {
      setIsLoading(true);
      const response = await axios.put(
        `https://backend-data-five.vercel.app/api/itr/update/${id}`,
        formData
      );

      console.log("Data sent successfully:", response.data);

      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.email) {
        const email = user.email;

        // Update user's progress in localStorage
        const progress = JSON.parse(localStorage.getItem("formProgress")) || {};
        progress[email] = 3; // Set next form (Form 3) as the current progress for this user
        localStorage.setItem("formProgress", JSON.stringify(progress));
      }

      // Navigate to the next form
      router.push(`/basic-details/${id}`);
    } catch (error) {
      console.error("Error sending data to the API:", error);
    }
  };

  return (
    <div className='page'>
     {isLoading ? (
        <div className="loading-indicator flex flex-col items-center justify-center">
          <img src="/assest/animation.gif" alt="Loading..." width="80" height="80" />
          <p className="text-lg font-semibold mt-3">Please wait, loading...</p>
        </div>
      ) :
      (
      <div className="financial-details flex flex-col justify-center items-center text-center pt-20">
        <h1 className="text-2xl font-semibold">START YOUR INCOME TAX RETURN FILING</h1>
        <p className="text-xl mt-1">Let us do the paperwork.</p>

        <div className="financial-form rounded-2xl bg-white p-10 mb-7 mt-10">
          <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap gap-5 mb-4">
            <div className="inputs input-1 flex flex-col">
              <label htmlFor="financialYear" className="mb-1">Financial Year</label>
              <select
                name="financialYear"
                className="p-3 rounded-lg year"
                value={formData.financialYear}
                onChange={handleChange}
              >
                <option value="2024-2025">2024-2025</option>
                <option value="2023-2024">2023-2024</option>
                <option value="2022-2023">2022-2023</option>
                <option value="2021-2022">2021-2022</option>
              </select>
            </div>
            <div className="inputs input-1 flex flex-col">
              <label htmlFor="panNumber" className="mb-1">PAN NUMBER</label>
              <input
                type="text"
                name="panNumber"
                className="p-3 rounded-lg"
                value={formData.panNumber}
                onChange={handleChange}
              />
              {errors.panNumber && <span className="text-red-500">{errors.panNumber}</span>}
            </div>
          </div>
          <div className="input input-2 flex flex-col">
            <label htmlFor="dateOfBirth" className="mb-1">Date of Birth</label>
            <input
              type="text"
              name="dateOfBirth"
              className="p-3 rounded-lg"
              placeholder="dd-mm-yyyy"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            {errors.dateOfBirth && <span className="text-red-500">{errors.dateOfBirth}</span>}
          </div>
        </div>

        <div className="financial-btns flex flex-wrap justify-center lg:justify-between md:justify-between xl:justify-between sm:justify-between mb-10">
          <a href="\tax-return">
            <div className="back-btn flex items-center gap-3 py-3 px-10 mb-4 bg-white rounded-md">
            <img src="/assest/left-arrow.png" alt="" height={23} width={18} />
              <p className="text-blue">Back</p>
            </div>
          </a>

          <div className="other-btns flex flex-wrap justify-center gap-4">
            {/* <div className="get-button px-10 py-3 rounded-md">
              <p className="text-white font-semibold">GET CA ASSISTED</p>
            </div> */}
            <div
              onClick={handleContinue}
              className="continue-btn flex gap-3 justify-center items-center px-10 py-3 rounded-md cursor-pointer">
              <p className="text-white font-semibold">CONTINUE</p>
              <img src="/assest/arrow-right.png" alt="Continue" width="26" height="26"></img>
            </div>
          </div>
        </div>
      </div>
      )
    }
    </div>
  );
};

export default Financial;
