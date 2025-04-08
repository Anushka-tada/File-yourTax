"use client";

import { useState, useEffect } from 'react';
import "./otp.css";
import { otpVerificationServ } from "../services/authentication.service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const OTP = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [email, setEmail] = useState('');

  const router = useRouter();

  // Fetch email from session storage 
  useEffect(() => {
    const storedEmail = sessionStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 1) { // Only allow numeric input and ensure it is a single digit
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
          
      // Automatically move to the next input field
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    
   // Create an object with otpValue and email
     const otpData = {
      email: email,
      otp: otpValue,
    };
      
    try{
      console.log('OTP Data:', otpData);
       let response = await otpVerificationServ(otpData);
       if(response.data.statusCode == '200'){
        toast.success(response.data.message);
        router.push('/login');
       }
       else{
        toast.error(response.data.message);
       }
       
    }
    catch(error){
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">OTP Verification</h1>
        <p className="text-gray-700">Enter the OTP we have sent to your registered email </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-8 py-8 px-5">
          <div className="flex gap-4">
            <input
              id="otp-input-0"
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={otp[0]}
              onChange={(e) => handleChange(e, 0)}
              autoComplete="off"
            />
            <input
              id="otp-input-1"
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={otp[1]}
              onChange={(e) => handleChange(e, 1)}
              autoComplete="off"
            />
            <input
              id="otp-input-2"
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={otp[2]}
              onChange={(e) => handleChange(e, 2)}
              autoComplete="off"
            />
            <input
              id="otp-input-3"
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={otp[3]}
              onChange={(e) => handleChange(e, 3)}
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="otp-submit text-white py-2 px-4 rounded-md transition duration-300"
          >
            Verify & Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTP;
