// "use client";
// import Link from "next/link";

// import "./navbar.css";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { useState, useEffect, useRef } from "react";

// const Nav = () => {
//   const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
//   const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
//   const [isKnowledgeDropdownOpen, setIsKnowledgeDropdownOpen] = useState(false);
//   const [isGuidesDropdownOpen, setIsGuidesDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const productsRef = useRef(null);
//   const toolsRef = useRef(null);
//   const knowledgeRef = useRef(null);
//   const guidesRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         productsRef.current && !productsRef.current.contains(event.target) &&
//         toolsRef.current && !toolsRef.current.contains(event.target) &&
//         knowledgeRef.current && !knowledgeRef.current.contains(event.target) &&
//         guidesRef.current && !guidesRef.current.contains(event.target)
//       ) {
//         setIsProductsDropdownOpen(false);
//         setIsToolsDropdownOpen(false);
//         setIsKnowledgeDropdownOpen(false);
//         setIsGuidesDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="Navbar-outer flex items-center justify-between lg:px-24 px-4 py-4 ">
//       <div className="nav-logo">
//         <a href="\homepage">
//           <h2 className="font-bold text-3xl logo">File Your <span className="Blue">Tax</span></h2>
//         </a>
//       </div>

//       <GiHamburgerMenu
//         className="hamburger text-3xl cursor-pointer lg:hidden"
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       />

//       <div className={`navbar-items ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex lg:flex-row gap-6 text-lg lg:static absolute top-16 left-0 lg:top-auto lg:left-auto bg-white lg:bg-transparent w-full lg:w-auto py-4 lg:py-0 lg:px-6 md:px-1 px-1 lg:px-0   mt-32 md:mt-32 lg:mt-0`}>
//         <div className="product flex items-center gap-1" ref={productsRef}>
//           <div
//             onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
//             className="cursor-pointer"
//           >
//             Products
//           </div>
//           <RiArrowDropDownLine
//             className="text-3xl"
//             onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
//           />
//           {isProductsDropdownOpen && (
//             <div className="dropdown drop-product bg-white shadow-lg rounded-lg absolute w-full lg:w-auto  text-base ">
//               <ul>
//                 <li className="py-2 hover:bg-gray-100 cursor-pointer hover-text-blue">File Your Return</li>
//                 <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Upload Form 16</li>
//                 <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">CA Assisted Tax Filing</li>
//                 <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Tax Planning Optimiser</li>
//                 <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Refund Status</li>
//                 <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">TDS Solution</li>
//                 <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">NRI Taxes & ITR Filing</li>
//                 <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Tax Advisory Services</li>
//                 <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Capital Gain Tax Filing</li>
//                 <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Income Tax Notices</li>
//               </ul>
//             </div>
//           )}
//         </div>

//         <div className="tools flex items-center gap-1" ref={toolsRef}>
//           <div
//             onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
//             className="cursor-pointer"
//           >
//             Tools
//           </div>
//           <RiArrowDropDownLine
//             className="text-3xl"
//             onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
//           />
//           {isToolsDropdownOpen && (
//             <div className="dropdown drop-tool bg-white shadow-lg rounded-lg absolute  w-full lg:w-auto">
//                 <div className="lists flex text-base ">
//              <ul>

//                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Income Tax Calculator</li>

//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">HRA Calculator</li>

//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Rent Receipt Generator</li>

//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">ITR Eligibility Checker</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Calculator on Section 234F</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">80C Calculator</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Cryptocurrency Tax Calculator</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Simple Interest Calculator</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">80DD Calculator</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Compound Interest Calculator</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Sukanya Samriddhi Yojana Calculator</li>

//                   </ul>
//                   <ul>
//                   <li>Form 12BB</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Gratuity Calculator</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">TDS Calculator</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Transport Allowance Calculator</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Leave Encashment Calculator</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">House Property Calculator</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">80D Calculator</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">80TTU Calculator</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">80U Calculator</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">OLd vs New Tax Slab Regime Calculator</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">IFSC code Search</li>

//                   </ul>
//                   </div>

//                   <div className="more-tax-btn flex items-center gap-2">
//                     <p>More Tax Tools</p>
//                     <img src="https://tax2win.in/assets-new/img/new-theme/g_ghost_arrow.svg" alt="" width="20" height="20"></img>
//                   </div>
//             </div>
//           )}
//         </div>

//         <div className="knowledge flex items-center gap-1" ref={knowledgeRef}>
//           <div
//             onClick={() => setIsKnowledgeDropdownOpen(!isKnowledgeDropdownOpen)}
//             className="cursor-pointer"
//           >
//             Knowledge Center
//           </div>
//           <RiArrowDropDownLine
//             className="text-3xl"
//             onClick={() => setIsKnowledgeDropdownOpen(!isKnowledgeDropdownOpen)}
//           />
//           {isKnowledgeDropdownOpen && (
//             <div className="dropdown bg-white shadow-lg rounded-lg absolute mt-48 lg:mt-48 text-base w-full lg:w-auto ">
//               <ul>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">FAQ</li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Tax Glossary</li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Video Tutorials</li>
//               </ul>
//             </div>
//           )}
//         </div>

//         <div className="guide flex items-center gap-1" ref={guidesRef}>
//           <div
//             onClick={() => setIsGuidesDropdownOpen(!isGuidesDropdownOpen)}
//             className="cursor-pointer"
//           >
//             Guides
//           </div>
//           <RiArrowDropDownLine
//             className="text-3xl"
//             onClick={() => setIsGuidesDropdownOpen(!isGuidesDropdownOpen)}
//           />
//           {isGuidesDropdownOpen && (
//             <div className="dropdown drop-guide bg-white shadow-lg rounded-lg absolute w-full lg:w-auto ">
//                <div className="lists flex text-base gap-4">
//              <ul>

//                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800 font-extrabold">Income Tax Guides</li>

//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Aadhar</li>

//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Capital Gains Income</li>

//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">E-filling of ITR</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">House Property </li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Income Tax Calander</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Income Tax Notices</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Income Tax Refund</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Income Tax Slabs</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Income Tax Verification</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Pan Card</li>
//                     <li  className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Salary Income</li>
//                     <li  className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Section 80 Deductions</li>
//                     <li  className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">TDS</li>

//                   </ul>
//                   <ul>
//                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800 font-extrabold">Form 12BB</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">GST</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">GST System</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">GST Registration</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Input Tax Credit</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">GST Procedure</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">GST Returns</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">GST eWay Bills</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">GST Rates</li>

//                   </ul>
//                   </div>

//             </div>
//           )}
//         </div>

//         <div>Pricing</div>
//         <Link href="\contact"> Contact </Link>
//         <Link href="\login"
//                 > Log In
//                    </Link>
//         <Link href="\signup">Sign Up</Link>
//       </div>
//     </div>
//   );
// };

// export default Nav;



"use client";

import Link from "next/link";
import "./navbar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect, useRef, useContext } from "react";
import { LoggedDataContext } from "../../context/Context"; // Import Context
import { useRouter } from 'next/navigation';

const Nav = () => {
  const router = useRouter();

  // Centralized state to track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  const productsRef = useRef(null);
  const toolsRef = useRef(null);
  const knowledgeRef = useRef(null);
  const guidesRef = useRef(null);
  const serviceRef = useRef(null);
  const profileRef = useRef(null);

  const { loggedUserData } = useContext(LoggedDataContext);
  const { updateLoggedUserData } = useContext(LoggedDataContext);

  const handleLogout = () => {
    updateLoggedUserData(null);
    localStorage.removeItem("user");
    router.push('/');
  };

  const handleDropdownToggle = (dropdownName) => {
    // Toggle the clicked dropdown, and close others
    if (openDropdown === dropdownName) {
      setOpenDropdown(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdown(dropdownName); // Open the clicked dropdown
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productsRef.current && !productsRef.current.contains(event.target) &&
        toolsRef.current && !toolsRef.current.contains(event.target) &&
        knowledgeRef.current && !knowledgeRef.current.contains(event.target) &&
        guidesRef.current && !guidesRef.current.contains(event.target) &&
        serviceRef.current && !serviceRef.current.contains(event.target) &&
        profileRef.current && !profileRef.current.contains(event.target)
      ) {
        setOpenDropdown(null); // Close all dropdowns
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="Navbar-outer flex items-center justify-between lg:px-24 px-4 py-4">
      <div className="nav-logo">
        <a href="\homepage">
          <h2 className="font-bold text-3xl logo">
            FileYour<span className="Blue">Tax</span>
          </h2>
        </a>
      </div>

      <GiHamburgerMenu
        className="hamburger text-3xl cursor-pointer lg:hidden"
        onClick={() => setOpenDropdown(openDropdown === "menu" ? null : "menu")}
      />

      <div
        className={`navbar-items ${openDropdown === "menu" ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row gap-6 text-lg lg:static absolute top-16 left-0 lg:top-auto lg:left-auto bg-white lg:bg-transparent w-full lg:w-auto py-4 lg:py-0 lg:px-6 md:px-1 px-1 lg:px-0 mt-32 md:mt-32 lg:mt-0`}
      >

  {/* service Dropdown */}
  <div className="knowledge flex items-center gap-1" ref={serviceRef}>
          <div
            onClick={() => handleDropdownToggle("service")}
            className="cursor-pointer"
          >
            Services
          </div>
          <RiArrowDropDownLine
            className="text-3xl"
            onClick={() => handleDropdownToggle("service")}
          />
          {openDropdown === "service" && (
            <div className="dropdown bg-white shadow-lg rounded-lg absolute top-28 text-base w-full lg:w-auto ">
              <ul>
              <a href="/service-page"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">ITR Filling</li></a>
                <a href="#"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">TSD Return Filing</li></a>
                <a href="#"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Accounting Services</li></a>
                <a href="/gst-filling"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">GST Filling</li></a>
                <a href="#"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Income Tax Notice </li></a>
                <a href="#"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">HUF Registration & Filing</li></a>
                <a href="#"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Company Resigtration Online</li></a>
                <a href="#"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Appeal </li></a>
                <a href="#"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">PF Withdrawal</li></a>
                <a href="#"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Lower Deduction Certificate </li></a>
                
              </ul>
            </div>
          )}
        </div>


        {/* Products Dropdown */}
        <div className="product flex items-center gap-1" ref={productsRef}>
          <div
            onClick={() => handleDropdownToggle("products")}
            className="cursor-pointer"
          >
            Products
          </div>
          <RiArrowDropDownLine
            className="text-3xl"
            onClick={() => handleDropdownToggle("products")}
          />
          {openDropdown === "products" && (
            <div className="dropdown drop-product bg-white shadow-lg rounded-lg absolute w-full lg:w-auto text-base">
              <ul>
                <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-blue-700">
                  File Your Return
                </li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-blue-700">
                  Upload Form 16
                </li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-blue-700">
                  CA Assisted Tax Filing
                </li>
                {/* <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-blue-700">
                  Tax Planning Optimiser
                </li> */}
                <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-blue-700">
                  Refund Status
                </li>
                {/* <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-blue-700">
                  TDS Solution
                </li> */}
                <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-blue-700">
                  NRI Taxes & ITR Filing
                </li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-blue-700">
                  Tax Advisory Services
                </li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-blue-700">
                  Capital Gain Tax Filing
                </li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-blue-700">
                  Income Tax Notices
                </li>
              </ul>
            </div>
          )}
        </div>


        <Link href="\pricing"> Pricing</Link>


        {/* Knowledge Center Dropdown */}
        <div className="knowledge flex items-center gap-1" ref={knowledgeRef}>
          <div
            onClick={() => handleDropdownToggle("knowledge")}
            className="cursor-pointer"
          >
            Knowledge Center
          </div>
          <RiArrowDropDownLine
            className="text-3xl"
            onClick={() => handleDropdownToggle("knowledge")}
          />
          {openDropdown === "knowledge" && (
            <div className="dropdown bg-white shadow-lg rounded-lg absolute mt-48 lg:mt-48 text-base w-full lg:w-auto ">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">FAQ</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Tax Glossary</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Video Tutorials</li>
              </ul>
            </div>
          )}
        </div>


        

       
        <Link href="\contact"> Contact </Link>

        {/* Conditionally Render Login/Signup or Profile Button */}
        {loggedUserData ? (
          // Profile Button with Dropdown
          <div className="relative" ref={profileRef}>
            <div
              className="user-profile flex items-center gap-3 cursor-pointer"
              onClick={() => handleDropdownToggle("profile")}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" height={28} width={28}
                alt="User Profile"
                className="rounded-full"
              />

            </div>
            {openDropdown === "profile" && (
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

export default Nav;
