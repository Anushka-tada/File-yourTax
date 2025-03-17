"use client";

import React, { useState } from 'react';
import "./Signup.css";
import { signupServ } from "../services/authentication.service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const Sign_Form = () => {

  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await signupServ(formData);
      console.log(response);
      
      if(response.data.statusCode == '200' || response.data.statusCode == '201'){
        // Store email in session storage
        sessionStorage.setItem('email', formData.email);
        toast.success(response.data.message);
        router.push('/otp-verify');
       }
       else{
        toast.error(response.data.message);
       }
    

    } catch (error) {
      console.log(error);
      toast.error('Signup failed. Please try again.');
    }

    console.log(formData);
  };

  return (
    <div className="Sign-Form flex flex-col items-center text-center py-20 px-4 mb-7">
      <ToastContainer />
      <h1 className="text-3xl sign-heading font-semibold lg:w-1/3 md:w-1/3">Sign Up</h1>
      <p className="text-lg mb-12 mt-3">Join our 1M+ customers who eFile with us</p>
      <div className="sign-social-btns flex gap-4 mb-4">
        <div className="sign-google flex gap-2 bg-white py-3 px-10 shadow-md rounded-lg">
          <img src="https://tax2win.in/assets-new/img/signup/btn_google_light_normal.svg" width="20px" height="20px" alt="" />
          <p className="text-lg">Google</p>
        </div>
      </div>
      <p className="mb-3">or</p>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <div className="flex gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="py-3 px-5 lg:px-7 md:px-7 w-full rounded-lg bg-transparent text-lg mb-3 lg:w-44 md:w-44"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="py-3 px-5 lg:px-7 md:px-7 w-full rounded-lg bg-transparent text-lg mb-3 lg:w-44 md:w-44"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="py-3 px-7 w-full rounded-lg bg-transparent text-lg mb-3 lg:w-96 md:w-96"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Mobile Number"
            className="py-3 px-7 w-full rounded-lg bg-transparent text-lg mb-3 lg:w-96 md:w-96"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="py-3 px-7 w-full rounded-lg bg-transparent text-lg md:w-96 lg:w-96"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" className="sign-btn py-3 px-9 text-lg text-white rounded-lg font-medium mt-5 mb-3 md:w-96 lg:w-96 w-full mx-2">
            Sign Up
          </button>
        </div>
      </form>
      <p className="font-bold">
        Already have an account? <a href="./login">  <span className="sign-green">Log In</span> </a>
      </p>
    </div>
  );
};

export default Sign_Form;
