import axios from "axios";

import { BASE_URL } from ".././utils/apibaseurlConfiguration";

// const token = localStorage.getItem("token");

// const getConfig = () => {
//   return {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Accept: "application/json",
//       Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
//     },
//   };
// };
export const loginServ = async (formData) => {
  try {
    const response = await axios.post(BASE_URL + "user/login", formData);
    return response;
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const signupServ = async (formData) => {
    try {
      const response = await axios.post(BASE_URL + "user/sign-up", formData);
      return response;
    } catch (error) {
      // Handle error (e.g., log or throw an error)
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  export const otpVerificationServ = async (formData) => {
    try {
      const response = await axios.post(BASE_URL + "user/verify-otp", formData);
      return response;
    } catch (error) {
      // Handle error (e.g., log or throw an error)
      console.error("Error fetching data:", error);
      throw error;
    }
  };
