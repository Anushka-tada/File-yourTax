'use client';

import React, { createContext, useState } from 'react';

// Create Context
export const LoggedDataContext = createContext();

// Provider Component
export const LoggedDataProvider = ({ children }) => {
  const [loggedUserData, setLoggedUserData] = useState(null); // Store user data

  // Function to update user data globally
  const updateLoggedUserData = (data) => {
    setLoggedUserData(data);
    console.log('Logged-in user data stored in context:', data);
  };

  return (
    <LoggedDataContext.Provider value={{ loggedUserData, updateLoggedUserData }}>
      {children}
    </LoggedDataContext.Provider>
  );
};
