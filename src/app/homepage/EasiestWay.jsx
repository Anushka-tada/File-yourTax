// "use client";
// import "./EasiestWay.css";
// import { useContext } from "react";
// import { LoggedDataContext } from "../context/Context"; // Import Context
// import { useRouter } from "next/navigation";

// const EasiestWay = () => {
//   const { loggedUserData } = useContext(LoggedDataContext); // Access context data
//   const router = useRouter();

//   const handleGST = () => {
//     if (loggedUserData) {
//       // If user is logged in, navigate to the tax-return page
//       router.push("/tax-return");
//     } else {
//       // If user is not logged in, navigate to the login page
//       router.push("/login");
//     }
//   };

//   return (
//     <div className="section-1 flex flex-wrap md:flex-wrap lg:flex-nowrap lg:px-24 px-4 items-center pt-9 gap-10 pb-20">
//       <div className="section1-text">
//         <p className="ITR-btn inline-flex px-6 py-2 rounded-full mb-9">ITR Filing</p>
//         <h1 className="section1-heading">
//           Easiest Way of Income Tax e-filing in <span className="india">India</span>
//         </h1>
//         <div className="rating flex flex-wrap text-lg gap-20 mt-6">
//           <div className="rating-1 flex flex-wrap">
//             <img
//               src="https://tax2win.in/assets-new/img/new-theme/google-review.svg"
//               alt="4.8 Google Rating"
//             />
//             <p>
//               <span className="font-bold">4.8</span> Google Rating
//             </p>
//           </div>
//           <div className="rating-2 flex flex-wrap">
//             <img
//               src="https://tax2win.in/assets-new/img/new-theme/google-review.svg"
//               alt="4.8 Google Rating"
//             />
//             <p>
//               <span className="font-bold">1+ Million</span> Trusted Users
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="section1-boxes flex flex-wrap md:flex-nowrap lg:flex-nowrap gap-4">
//         <div className="box1 p-4 py-5 pb-5 rounded-xl">
//           <img
//             src="https://tax2win.in/assets-new/img/new-theme/self-filing-blue.svg"
//             alt="File Income Tax Yourself"
//             className="icon mt-10"
//             width="66"
//             height="66"
//           />
//           <h2 className="text-white text-3xl mt-2">File Your GST</h2>
//           <p className="text-white mt-2">
//             It&rsquo;s quick, easy, and takes only 4 minutes to file your income tax return.
//             ITR filing plans start at just ₹49.
//           </p>
//           <div className="btn-div bg-white hover:bg-sky-100 cursor-pointer py-3 inline-flex px-12 rounded-full mt-4" onClick={handleGST}>
//             <div className="flex gap-3">
//               <p className="eCA">File GST Now</p>
//               <img
//                 src="https://tax2win.in/assets-new/img/new-theme/bdark-arrow.svg"
//                 alt="File Income Tax Yourself"
//               ></img>
//             </div>
//           </div>
//         </div>

//         <div className="box-2 p-4 rounded-xl pb-8">
//           <div className="box2-imgs flex justify-between items-end">
//             <img
//               src="https://tax2win.in/assets-new/img/new-theme/hire-eca-green.svg"
//               alt="Get a personal eCA"
//               className="icon"
//               width="66"
//               height="66"
//             />
//             <img
//               src="https://tax2win.in/assets-new/img/new-theme/15off-2025.svg"
//               alt="15% OFF"
//             />
//           </div>
//           <h2 className="text-white text-3xl mt-2">Get eCA for ITR Filing</h2>
//           <p className="text-white mt-2">
//             Hire personal eCA to do Income Tax Filing for you. It is convenient & fast with
//             maximum refund calculated for you.
//           </p>
//           <a href="\book-eCA">
//             <div className="btn-div flex bg-white hover:bg-sky-100 inline-flex py-3 px-12 gap-3 rounded-full mt-4">
//               <p className="eCA">Book eCA Now</p>
//               <img
//                 src="https://tax2win.in/assets-new/img/new-theme/bdark-arrow.svg"
//                 alt="File Income Tax Yourself"
//               ></img>
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EasiestWay;



"use client";
import "./EasiestWay.css";
import { useContext } from "react";
import { LoggedDataContext } from "../context/Context"; // Import Context
import { useRouter } from "next/navigation";

const EasiestWay = () => {
  const { loggedUserData } = useContext(LoggedDataContext); // Access logged-in user data
  const router = useRouter();

  // Function to get the next form's URL based on progress
  const getNextFormUrl = (email) => {
    const progress = JSON.parse(localStorage.getItem("formProgress")) || {};
    const nextForm = progress[email] || 1; // Default to Form 1 if no progress exists

    // Form URLs mapping
    const formUrls = {
      1: "/tax-return",
      2: "/financial-details",
      3: "/basic-details",
      4: "/basic-details2",
      5: "/house-property",
      6: "/deduction",
      7: "/bank-details",
      8: "/prepaid-tax",
      9: "/extra-detail",
    };

    return formUrls[nextForm];
  };

  const handleGST = () => {
    if (loggedUserData) {
      // If user is logged in, fetch the next form based on progress
      const email = loggedUserData.email;
      const nextFormUrl = getNextFormUrl(email);
      // router.push(nextFormUrl); // Redirect to the user's next form
      router.push("/tax-return"); 
    } else {
      // If user is not logged in, navigate to the login page
      router.push("/login");
    }
  };

  return (
    <div className="section-1 flex flex-wrap md:flex-wrap lg:flex-nowrap lg:px-24 px-4 items-center pt-9 gap-10 pb-20">
      <div className="section1-text">
        <p className="ITR-btn inline-flex px-6 py-2 rounded-full mb-9">ITR Filing</p>
        <h1 className="section1-heading">
        The most convenient and efficient way to e-file your Income Tax Return in<span className="india">India</span>
        </h1>
        <div className="rating flex flex-wrap text-lg gap-20 mt-6">
          <div className="rating-1 flex flex-wrap">
            <img
              src="https://tax2win.in/assets-new/img/new-theme/google-review.svg"
              alt="4.8 Google Rating"
            />
            <p>
              <span className="font-bold">4.8</span> Google Rating
            </p>
          </div>
          <div className="rating-2 flex flex-wrap">
            <img
              src="https://tax2win.in/assets-new/img/new-theme/google-review.svg"
              alt="4.8 Google Rating"
            />
            <p>
              <span className="font-bold">20k+</span> Trusted Users
            </p>
          </div>
        </div>
      </div>

      <div className="section1-boxes flex flex-wrap md:flex-nowrap lg:flex-nowrap gap-4">
        <div className="box1 p-4 py-5 pb-5 rounded-xl flex flex-col justify-end">
          <img
            src="https://tax2win.in/assets-new/img/new-theme/self-filing-blue.svg"
            alt="File Income Tax Yourself"
            className="icon mt-10"
            width="66"
            height="66"
          />
          <h2 className="text-white text-3xl mt-2">File Your GST</h2>
          <p className="text-white mt-2">
          Effortless and reliable GST return filing with a trusted provider. GST filing plans start at just ₹499 per month.
          </p>
          <div className="btn-div1 bg-white hover:bg-sky-100 cursor-pointer py-3 inline-flex gap-3 px-12 rounded-full mt-4 mb-4"
              onClick={handleGST}>
            
              <p className="eCA">File GST Now</p>
              <img
                src="https://tax2win.in/assets-new/img/new-theme/bdark-arrow.svg"
                alt="File Income Tax Yourself"
              ></img>
            
          </div>
        </div>

        <div className="box-2 p-4 rounded-xl pb-8">
          <div className="box2-imgs flex justify-between items-end">
            <img
              src="https://tax2win.in/assets-new/img/new-theme/hire-eca-green.svg"
              alt="Get a personal eCA"
              className="icon"
              width="66"
              height="66"
            />
            <img
              src="https://tax2win.in/assets-new/img/new-theme/15off-2025.svg"
              alt="15% OFF"
            />
          </div>
          <h2 className="text-white text-3xl mt-2">Get eCA for ITR Filing</h2>
          <p className="text-white mt-2">
          Hire a personal eCA for your Income Tax Filing. Enjoy a convenient, fast, and efficient
          process with maximum refund calculations.
          </p>
          <a href="\book-eCA">
            <div className="btn-div1 flex bg-white hover:bg-sky-100 inline-flex py-3 px-12 gap-3 rounded-full mt-4">
              <p className="eCA">Book eCA Now</p>
              <img
                src="https://tax2win.in/assets-new/img/new-theme/bdark-arrow.svg"
                alt="File Income Tax Yourself"
              ></img>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EasiestWay;

