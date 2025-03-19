"use client";

import "./nav.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect, useRef , useContext } from "react";
import { LoggedDataContext } from "../context/Context"; // Import Context
import { useRouter } from 'next/navigation';

const Taxreturn_Nav = () => {

  const router = useRouter();
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const [isKnowledgeDropdownOpen, setIsKnowledgeDropdownOpen] = useState(false);
  const [isGuidesDropdownOpen, setIsGuidesDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // For user profile dropdown

  const productsRef = useRef(null);
  const toolsRef = useRef(null);
  const knowledgeRef = useRef(null);
  const guidesRef = useRef(null);
  const profileRef = useRef(null); // Reference for profile dropdown

  const { loggedUserData } = useContext(LoggedDataContext); // Access context data
    const { updateLoggedUserData } = useContext(LoggedDataContext);
  
    const handleLogout = () => {
      updateLoggedUserData(null); // Clear Context API
      localStorage.removeItem("user"); // Clear Local Storage
      router.push('/');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productsRef.current && !productsRef.current.contains(event.target) &&
        toolsRef.current && !toolsRef.current.contains(event.target) &&
        knowledgeRef.current && !knowledgeRef.current.contains(event.target) &&
        guidesRef.current && !guidesRef.current.contains(event.target)
      ) {
        setIsProductsDropdownOpen(false);
        setIsToolsDropdownOpen(false);
        setIsKnowledgeDropdownOpen(false);
        setIsGuidesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className="Navbar-oute bg-white flex items-center justify-between lg:px-32 px-4 py-3 ">
      <div className="nav-logo">
        <a href="\homepage">
        <h2 className="font-bold text-3xl logo">File Your <span className="Blue">Tax</span></h2>
        </a>
      </div>

      <GiHamburgerMenu
        className="hamburger text-3xl cursor-pointer lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <div className={`navbar-items ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex lg:flex-row gap-6  lg:static absolute top-16 left-0 lg:top-auto lg:left-auto
       bg-white lg:bg-transparent w-full lg:w-auto py-7 lg:py-0 lg:px-6 md:px-1 px-1 lg:px-0 mt-5 md:mt-5 lg:mt-0`}>
        
        {/* <div className="font-medium">Log In</div> */}
        {/* Conditionally Render Login/Signup or Profile Button */}
        {loggedUserData ? (
          // Profile Button with Dropdown
          <div className="relative" ref={profileRef}>
            <div
              className="user-profile flex items-center gap-3 cursor-pointer"
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"  height={28} width={28}// Replace with user avatar if available
                alt="User Profile"
                className="rounded-full"
              />
             
            </div>
            {isProfileDropdownOpen && (
              <div className="dropdown bg-white shadow-lg rounded-lg absolute top-full mt-2 right-0 p-6">
                {/* <p><strong>Name:</strong> {loggedUserData.firstName} {loggedUserData.lastName}</p>
                <p><strong>Email:</strong> {loggedUserData.email}</p>
                <p><strong>Phone:</strong> {loggedUserData.phoneNumber}</p> */}
                  <div className="drop-items flex flex-col gap-2">
                 <a href="./user-profile">  <div className="flex gap-4 p-2 rounded drop-item"> <img src="https://tax2win.in/assets-new/img/new-theme/profile.svg" alt="" height={17} width={17} /><p className="text-sm ">My Profile</p></div></a>
                  <div className="flex gap-4 p-2 rounded drop-item cursor-pointer" onClick={handleLogout} > <img src="https://tax2win.in/assets-new/img/new-theme/logout.svg" alt="" height={17} width={17} /><p className="text-sm ">Logout</p></div>
                  </div>
              </div>
            )}
          </div>
        ) : (
          // Log In and Sign Up Buttons
          <>
            <Link href="/login">Log In</Link>
            <Link href="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Taxreturn_Nav;

