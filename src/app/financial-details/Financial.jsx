"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import "./financial.css";
import axios from "axios";
import { useParams } from 'next/navigation';

const Financial = () => {

    const { id } = useParams();
    console.log(id);

  const [formData, setFormData] = useState({
    financialYear: "2024-2025",
    panNumber: "",
    dateOfBirth: ""
  });

  const router = useRouter(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // const handleContinue = () => {
  //   console.log(formData);
  //  router.push('/basic-details'); 
  // };
  const handleContinue = async () => {
    console.log(formData);

    try {
        // POST data to the API
        const response = await axios.put(`https://backend-data-five.vercel.app/api/itr/update/${id}`, formData);

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
        router.push('/basic-details');
    } catch (error) {
        console.error("Error sending data to the API:", error);
    }
};


  return (
    <>
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
            </div>
          </div>
          <div className="input input-2 flex flex-col">
            <label htmlFor="dateOfBirth" className="mb-1">Date of birth</label>
            <input
              type="text"
              name="dateOfBirth"
              className="p-3 rounded-lg"
              placeholder="dd-mm-yyyy"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="financial-btns flex flex-wrap justify-center lg:justify-between md:justify-between xl:justify-between sm:justify-between mb-10">
          <a href="\tax-return">
            <div className="back-btn flex items-center gap-3 py-3 px-10 mb-4 bg-white rounded-md">
              <img src="https://media-hosting.imagekit.io//69ad5096714e471b/arrow-left.png?Expires=1836968249&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UbyR63UpwFKqNYhmOCzwA20u9i9m-8NefJS86pMPpxEWQoLF7fazDhSEfVF3vcKzDD5KH1Os3RCGguGvQGqvEYT6cp~8YwgtE6-ppFllVcZE-BwmH0A8nC5R3BrWIg40ANZQl2~qQG-iQVh0KCttfOkpBTvQTPTPbr~GKD2OgeWEIjqgUOzTcJyI0~tMjClIigEsSZ25AJSyZgMhnUIUjXMkScOIGm84wTr4ZOzRzWrw5fgv3hHp4063bIA4VC-fseCnC-nZ5LXjYWngvRYrQvpjXMtaXKsZadXkEoGDjrB1p1leTI9GqYN~AVEtGW4WqrUvxNkXxVwyj9DXyFzULQ__" alt="" height={23} width={23} />
              <p className="text-blue">Back</p>
            </div>
          </a>

          <div className="other-btns flex flex-wrap justify-center gap-4">
            <div className="get-button px-10 py-3 rounded-md">
              <p className="text-white font-semibold">GET CA ASSISTED</p>
            </div>
            <div
              onClick={handleContinue}
              className="continue-btn flex gap-3 items-center px-10 py-3 rounded-md cursor-pointer"
            >
              <p className="text-white font-semibold">CONTINUE</p>
              <img src="https://tax2win.in/assets-new/img/diy-landing/bdark-arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Financial;
