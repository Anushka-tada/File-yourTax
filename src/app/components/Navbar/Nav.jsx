

// "use client";

// import Link from "next/link";
// import "./navbar.css";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { useState, useEffect, useRef, useContext } from "react";
// import { LoggedDataContext } from "../../context/Context"; // Import Context
// import { useRouter } from 'next/navigation';

// const Nav = () => {
//   const router = useRouter();

//   // Centralized state to track which dropdown is open
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);


//   const productsRef = useRef(null);
//   const toolsRef = useRef(null);
//   const knowledgeRef = useRef(null);
//   const guidesRef = useRef(null);
//   const serviceRef = useRef(null);
//   const profileRef = useRef(null);

//   const { loggedUserData } = useContext(LoggedDataContext);
//   const { updateLoggedUserData } = useContext(LoggedDataContext);

//   const handleLogout = () => {
//     updateLoggedUserData(null);
//     localStorage.removeItem("user");
//     router.push('/');
//   };

//   const handleDropdownToggle = (dropdownName) => {
//     if (openDropdown === dropdownName) {
//       setOpenDropdown(null);
//     } else {
//       setOpenDropdown(dropdownName);
//     }
//   };
  

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         productsRef.current && !productsRef.current.contains(event.target) &&
//         toolsRef.current && !toolsRef.current.contains(event.target) &&
//         knowledgeRef.current && !knowledgeRef.current.contains(event.target) &&
//         guidesRef.current && !guidesRef.current.contains(event.target) &&
//         serviceRef.current && !serviceRef.current.contains(event.target) &&
//         profileRef.current && !profileRef.current.contains(event.target)
//       ) {
//         setOpenDropdown(null); // Close all dropdowns
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="Navbar-outer flex items-center justify-between lg:px-24 px-4 py-4 relative">
//       <div className="nav-logo">
//         <a href="\homepage">
//           <h2 className="font-bold text-3xl logo">
//             FileYour<span className="Blue">Tax</span>
//           </h2>
//         </a>
//       </div>

//       <GiHamburgerMenu
//         className="hamburger text-3xl cursor-pointer lg:hidden"
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       />

//       <div
//         className={`navbar-items ${isMenuOpen ?  "flex" : "hidden"
//           } flex-col lg:flex lg:flex-row gap-6 text-lg lg:static absolute top-16 left-0 lg:top-auto lg:left-auto bg-white lg:bg-transparent w-full lg:w-auto py-4 lg:py-0 lg:px-6 md:px-1 px-1 lg:px-0 `}
//       >

//   {/* service Dropdown */}
//   <div className="knowledge flex items-center gap-1" ref={serviceRef}>
//           <div
//             onClick={() => handleDropdownToggle("service")}
//             className="cursor-pointer"
//           >
//             Services
//           </div>
//           <RiArrowDropDownLine
//             className="text-3xl"
//             onClick={() => handleDropdownToggle("service")}
//           />
//           {openDropdown === "service" && (
//             <div className="dropdown bg-white shadow-lg rounded-lg absolute top-16 text-base w-full lg:w-auto ">
//               <ul>
//                 <a href="/service-page"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">ITR Filling</li></a>
//                 <a href="/tds-return"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">TDS Return Filing</li></a>
//                 <a href="/company-registration"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Company Registration Online</li></a>
//                 <a href="/accounting-service"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Accounting Services</li></a>
//                 <a href="/gst-filling"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">GST Filling</li></a>
//               </ul>
//             </div>
//           )}
//         </div>


//         {/* Products Dropdown */}
//         <div className="product flex items-center gap-1" ref={productsRef}>
//           <div
//             onClick={() => handleDropdownToggle("products")}
//             className="cursor-pointer"
//           >
//             Products
//           </div>
//           <RiArrowDropDownLine
//             className="text-3xl"
//             onClick={() => handleDropdownToggle("products")}
//           />
//           {openDropdown === "products" && (
//             <div className="dropdown drop-product bg-white shadow-lg rounded-lg absolute w-full lg:w-auto text-base">
//               <ul>
//               <a href="/file-yout-return">  <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">
//                   File Your Return
//                 </li></a>
//                <a href="/upload"> <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">
//                   Upload Form 16
//                 </li></a>
//               <a href="/book-eCA">
//                   <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">
//                   CA Assisted Tax Filing
//                 </li>
//               </a>
//                 {/* <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-blue-700">
//                   Tax Planning Optimiser
//                 </li> */}
//                <a href="/refund-status">
//                  <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">
//                   Refund Status
//                 </li>
//                </a>
//                 {/* <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-blue-700">
//                   TDS Solution
//                 </li> */}
//                <a href="/nri"> <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">
//                   NRI Taxes & ITR Filing
//                 </li></a>
//               <a href="/tax-advisory">  <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">
//                   Tax Advisory Services
//                 </li></a>
//               <a href="/capital-gain">
//                   <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">
//                   Capital Gain Tax Filing
//                 </li>
//               </a>
//               <a href="/income-tax-notice">  <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">
//                   Income Tax Notices
//                 </li></a>
//               </ul>
//             </div>
//           )}
//         </div>


//         <Link href="\pricing"> Pricing</Link>


//         {/* Knowledge Center Dropdown */}
//         <div className="knowledge flex items-center gap-1" ref={knowledgeRef}>
//           <div
//             onClick={() => handleDropdownToggle("knowledge")}
//             className="cursor-pointer"
//           >
//             Knowledge Center
//           </div>
//           <RiArrowDropDownLine
//             className="text-3xl"
//             onClick={() => handleDropdownToggle("knowledge")}
//           />
//           {openDropdown === "knowledge" && (
//             <div className="dropdown bg-white shadow-lg rounded-lg absolute mt-48 lg:mt-48 text-base w-full lg:w-auto ">
//               <ul>
//                <a href="faq"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">FAQ</li></a>
//                <a href="tax-glossary"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Tax Glossary</li></a>
//          <a href="/vedio-tutorial">       <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Video Tutorials</li></a>
//               </ul>
//             </div>
//           )}
//         </div>


        

       
//         <Link href="\contact"> Contact </Link>

//         {/* Conditionally Render Login/Signup or Profile Button */}
//         {loggedUserData ? (
//           // Profile Button with Dropdown
//           <div className="relative" ref={profileRef}>
//             <div
//               className="user-profile flex items-center gap-3 cursor-pointer"
//               onClick={() => handleDropdownToggle("profile")}
//             >
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" height={28} width={28}
//                 alt="User Profile"
//                 className="rounded-full"
//               />

//             </div>
//             {openDropdown === "profile" && (
//               <div className="dropdown bg-white shadow-lg rounded-lg absolute top-full mt-2 right-0 p-6">
//                 {/* <p><strong>Name:</strong> {loggedUserData.firstName} {loggedUserData.lastName}</p>
//                 <p><strong>Email:</strong> {loggedUserData.email}</p>
//                 <p><strong>Phone:</strong> {loggedUserData.phoneNumber}</p> */}
//                 <div className="drop-items flex flex-col gap-2">
//                   <a href="./user-profile">  <div className="flex gap-4 p-2 rounded drop-item"> <img src="https://tax2win.in/assets-new/img/new-theme/profile.svg" alt="" height={17} width={17} /><p className="text-sm ">My Profile</p></div></a>
//                   <div className="flex gap-4 p-2 rounded drop-item cursor-pointer" onClick={handleLogout} > <img src="https://tax2win.in/assets-new/img/new-theme/logout.svg" alt="" height={17} width={17} /><p className="text-sm ">Logout</p></div>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : (
//           // Log In and Sign Up Buttons
//           <>
//             <Link href="/login">Log In</Link>
//             <Link href="/signup">Sign Up</Link>
//           </>
//         )}
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);


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
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  const navRef = useRef(null);

  

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


  return (
    <div className="Navbar-outer flex items-center justify-between lg:px-24 px-4 py-4 relative">
      <div className="nav-logo">
        <a href="\homepage">
          <h2 className="font-bold text-3xl logo">
            FileYour<span className="Blue">Tax</span>
          </h2>
        </a>
      </div>

      <GiHamburgerMenu
        className="hamburger text-3xl cursor-pointer lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <div
        ref={navRef}
        className={`navbar-items ${isMenuOpen ?  "flex" : "hidden"
          } flex-col lg:flex lg:flex-row gap-6 text-lg lg:static absolute top-16 left-0 lg:top-auto lg:left-auto bg-white lg:bg-transparent w-full lg:w-auto py-4 lg:py-0 lg:px-6 md:px-1 px-1 lg:px-0 `}
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
            <div className="dropdown bg-white shadow-lg rounded-lg absolute top-16 text-base w-full lg:w-auto ">
              <ul>
                <a href="/service-page"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">ITR Filling</li></a>
                <a href="/tds-return"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">TDS Return Filing</li></a>
                <a href="/company-registration"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Company Registration Online</li></a>
                <a href="/accounting-service"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Accounting Services</li></a>
                <a href="/gst-filling"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">GST Filling</li></a>
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
            <div className="dropdown drop-product bg-white shadow-lg rounded-lg absolute w-full lg:w-auto text-base z-20">
              <ul>
              <a href="/file-yout-return">  <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">
                  File Your ITR
                </li></a>
               <a href="/upload"> <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">
                  Upload Form 16
                </li></a>
              <a href="/book-eCA">
                  <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">
                  CA Assisted Tax Filing
                </li>
              </a>
                {/* <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-blue-700">
                  Tax Planning Optimiser
                </li> */}
               <a href="/refund-status">
                 <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">
                  Refund Status
                </li>
               </a>
               <a href="/tds-solution">
                 <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">
                  TDS Solution
                </li>
               </a>
               <a href="/nri"> <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">
                  NRI Taxes & ITR Filing
                </li></a>
              <a href="/tax-advisory">  <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">
                  Tax Advisory Services
                </li></a>
              <a href="/capital-gain">
                  <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">
                  Capital Gain Tax Filing
                </li>
              </a>
              <a href="/income-tax-notice">  <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">
                  Income Tax Notices
                </li></a>
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
            <div className="dropdown bg-white shadow-lg rounded-lg absolute mt-32 lg:mt-32 text-base w-full lg:w-auto ">
              <ul>
               <a href="faq"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">FAQ</li></a>
               <a href="tax-glossary"> <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Tax Glossary</li></a>
         {/* <a href="/vedio-tutorial"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-cyan-800">Video Tutorials</li></a> */}
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
