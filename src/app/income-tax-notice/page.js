// "use client";
// import React from "react";
// import "./incomeTaxNotices.css";
// import Nav from "../components/Navbar/Nav";
// import Footer from "../homepage/Footer";
// import Need_Support from "../homepage/Need_Support";

// const IncomeTaxNoticesPage = () => {
//   return (
//     <>
//       <Nav />

//       <div className="noticesPage">

//         <header className="noticeHeader">
//           <h1>Understanding Income Tax Notices</h1>
//           <p>
//             Receiving an Income Tax Notice can be alarming, but knowing what it means and how to respond can save you time and stress.
//           </p>
//         </header>

//         <div className="noticeIntro">
//           <p>
//             The Income Tax Department sends notices to taxpayers for various reasons ranging from simple clarifications to serious discrepancies.  
//             This page guides you through common types of notices, their implications, and how to handle them effectively.
//           </p>
//         </div>

//         {/* Types of Notices */}
//         <section className="noticeSection">
//           <h2>Types of Income Tax Notices</h2>
//           <div className="noticeCards">
//             <div className="noticeCard">
//               <h3>1. Notice under Section 143(1)</h3>
//               <p>
//                 This is an intimation after processing your tax return. It confirms if your return has been accepted or if there is a discrepancy.
//               </p>
//             </div>
//             <div className="noticeCard">
//               <h3>2. Notice under Section 142(1)</h3>
//               <p>
//                 Issued when the tax department requires additional information or clarification regarding your filed return.
//               </p>
//             </div>
//             <div className="noticeCard">
//               <h3>3. Notice under Section 148</h3>
//               <p>
//                 Sent when the department believes income has escaped assessment. It reopens assessment for scrutiny.
//               </p>
//             </div>
//             <div className="noticeCard">
//               <h3>4. Notice under Section 274</h3>
//               <p>
//                 Notice for penalties due to non-compliance or errors detected in your tax filings.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* How to Respond */}
//         <section className="noticeSection altBg">
//           <h2>How to Respond to Income Tax Notices</h2>
//           <ol>
//             <li><strong>Read the Notice Carefully:</strong> Understand the exact reason and deadline mentioned.</li>
//             <li><strong>Verify Your Records:</strong> Check your income, deductions, and tax payments for any discrepancies.</li>
//             <li><strong>Seek Expert Advice:</strong> If unsure, consult a tax professional to prepare a response.</li>
//             <li><strong>Respond on Time:</strong> Use the e-filing portal or send a reply as instructed to avoid penalties.</li>
//             <li><strong>Keep Records:</strong> Maintain copies of notices and replies for future reference.</li>
//           </ol>
//         </section>

//         {/* Common Questions */}
//         <section className="noticeSection">
//           <h2>Common Questions About Income Tax Notices</h2>
//           <div className="faqList">
//             <div className="faqItem">
//               <h4>Why did I receive an Income Tax Notice?</h4>
//               <p>Usually due to mismatched information, missing details, or random scrutiny selection.</p>
//             </div>
//             <div className="faqItem">
//               <h4>Is receiving a notice always bad?</h4>
//               <p>No, some notices are just intimation or routine verifications.</p>
//             </div>
//             <div className="faqItem">
//               <h4>How long do I have to respond?</h4>
//               <p>Typically 30 days from the notice date, but this can vary.</p>
//             </div>
//             <div className="faqItem">
//               <h4>Can I file a rectification if there's an error?</h4>
//               <p>Yes, under Section 154 you can request correction for mistakes.</p>
//             </div>
//             <div className="faqItem">
//               <h4>What happens if I ignore a notice?</h4>
//               <p>Penalties, interest, or legal action may follow, so timely response is crucial.</p>
//             </div>
//           </div>
//         </section>

//         {/* Important Tips */}
//         <section className="noticeSection altBg">
//           <h2>Important Tips</h2>
//           <ul>
//             <li>Always keep your PAN and Aadhaar updated.</li>
//             <li>File your returns accurately and on time.</li>
//             <li>Keep all income proofs and receipts organized.</li>
//             <li>Check your income tax portal regularly for notices.</li>
//             <li>Respond professionally and attach relevant documents when replying.</li>
//           </ul>
//         </section>

//         {/* Final Thoughts */}
//         <section className="noticeSection">
//           <h2>Final Thoughts</h2>
//           <p>
//             An Income Tax Notice does not mean guilt. It is often an opportunity to clarify and correct your filings.  
//             Staying informed and responsive protects you from unnecessary hassles and penalties.
//           </p>
//         </section>

//       </div>

//       <Need_Support />
//       <Footer />
//     </>
//   );
// };

// export default IncomeTaxNoticesPage;



"use client";

import React, { useState } from 'react';
import { Search, ArrowRight, CheckCircle, AlertCircle, FileText, CalendarClock, ChevronDown, ChevronUp, Clock, ArrowUpRight } from 'lucide-react';
import "./incomeTaxNotices.css"
import Nav from '../components/Navbar/Nav';
import Footer from '../homepage/Footer';
import Need_Support from '../homepage/Need_Support';

// Data
const noticeData = [
  {
    id: 'notice-143-1a',
    title: 'Section 143(1)(a): Intimation of Adjustment',
    description: ' Nature: Preliminary intimation indicating discrepancies in your filed return such as incorrect claims or mathematical errors.',
    category: 'assessment',
    section: 'Section 143(1)(a) of Income Tax Act',
    priority: 'Medium',
    responseTime: '30 days to respond'
  },
  {
    id: 'notice-143-2',
    title: 'Section 143(2): Scrutiny Assessment',
    description: 'Nature: Issued when your return is selected for scrutiny. Requires submission of additional documentation and clarification.',
    category: 'verification',
    section: 'Section 143(2) of Income Tax Act',
    priority: 'High',
    responseTime: '15 days to respond'
  },
  {
    id: 'notice-139-9',
    title: 'Section 139(9): Defective Return',
    description: 'Nature: Indicates your Income Tax Return is considered defective. You must revise and resubmit the return.',
    category: 'assessment',
    section: 'Section 139(9) of Income Tax Act',
    priority: 'High',
    responseTime: '15 days to respond'
  },
  {
    id: 'notice-154',
    title: 'Section 154: Rectification of Mistake',
    description: 'Nature:  Permits correction of mistakes apparent from records in assessment orders.',
    category: 'assessment',
    section: 'Section 154 of Income Tax Act',
    priority: 'Medium',
    responseTime: '30 days to respond'
  },
  {
    id: 'notice-245',
    title: 'Section 245: Adjustment of Refund Against Outstanding Demand',
    description: 'Nature: Notifies intention to adjust your tax refund against existing tax dues.',
    category: 'refund',
    section: 'Section 245 of Income Tax Act',
    priority: 'Medium',
    responseTime: '30 days to respond'
  },
  {
    id: 'notice-156',
    title: 'Section 156: Demand Notice',
    description: 'Nature: Issued when additional tax liability arises after assessment; mandates payment of specified demand.',
    category: 'demand',
    section: 'Section 156 of Income Tax Act',
    priority: 'High',
    responseTime: '30 days to respond'
  }
];

const categories = [
  { id: 'all', name: 'All Notices' },
  { id: 'assessment', name: 'Assessment' },
  { id: 'verification', name: 'Verification' },
  { id: 'refund', name: 'Refund' },
  { id: 'demand', name: 'Demand' }
];

const faqs = [
  {
    question: "1. What should I do upon receiving a notice under Section 143(2)?",
    answer: "This is a scrutiny notice. Immediate professional consultation is advised to prepare documentation and submit appropriate responses to the assessing officer."
  },
  {
    question: "2. Is a notice issued even if I filed my ITR correctly?",
    answer: ": Yes. Notices may still be issued for random scrutiny, verification, or information requests even if returns are filed correctly."
  },
  {
    question: "3. How can I verify if a notice is authentic?",
    answer: "Use the Document Identification Number (DIN) on the official Income Tax portal to validate the authenticity of the notice."
  },
  {
    question: "4. Can I handle the notice without professional help?",
    answer: "While simple cases can be managed independently, complex notices (e.g., under Sections 143(2), 139(9), or 156) should be handled by qualified professionals to avoid errors."
  }
];

const steps = [
  {
    icon: <FileText className="h-8 w-8 text-[#144047]" />,
    title: "1.	Review and Understand the Notice",
    description: "Read carefully to identify the section, reason, and required actions."
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-[#144047]" />,
    title: "2.	Compile Relevant Documentation",
    description: "Gather documents such as filed ITR, Form 26AS, AIS, TIS, and supporting proofs."
  },
  {
    icon: <CalendarClock className="h-8 w-8 text-[#144047]" />,
    title: "3.	Comply Within the Deadline",
    description: "Respond within the stipulated period to avoid further legal or financial consequences."
  },
  {
    icon: <AlertCircle className="h-8 w-8 text-[#144047]" />,
    title: "4.	Consult a Tax Professional (Recommended)",
    description: "For notices involving scrutiny, demand, or legal interpretation, seek expert consultation for proper representation."
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const filteredNotices = noticeData.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         notice.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTagClass = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'tag-red';
      case 'medium':
        return 'tag-yellow';
      case 'low':
        return 'tag-blue';
      default:
        return 'tag-blue';
    }
  };

  const initialOpenState = Array(10).fill(true);
    const [visibleAnswer, setVisibleAnswer] = useState(initialOpenState);
  
    const toggleAnswer = (index) => {
      setVisibleAnswer((prev) => {
        const newVisible = [...prev];
        newVisible[index] = !newVisible[index]; // Toggle current index
        return newVisible;
      });
    };

  return (

   
    <main className="min-h-screen ">

       <Nav/>
      {/* Hero Section */}
     

     <div >
       <div className="ca-consultants py-20 lg:px-20 md:px-10 px-4 flex flex-wrap xl:justify-between lf:justify-between md:justify-between  justify-center items-center">
        <div className="ca-text flex flex-col mb-6 ">
          <h1 className=" text-5xl font-bold mb-3">Income Tax Notices: Expert Guidance from Assessment to Resolution</h1>
          <p className='text-2xl font-semibold'>Authenticate, Review, and Respond to ITR Notices with Confidence</p>
         
          <p className="text-xl font-semibold my-4 mb-7">
         An Income Tax Notice is a formal communication issued by the Income Tax Department to inform taxpayers about discrepancies, compliance requirements, assessments, or outstanding obligations related to their income tax filings. Prompt and appropriate response is essential to avoid penalties, interest, or legal consequences. </p>

          <ul className="flex gap-3 ">
            <li className="flex gap-3 items-center mb-2 font-semibold">
              <img
                src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/rating.svg"
                alt=""
              />
              <p className="text-lg">
                500+ Notices Successfully Resolved
              </p>
            </li>
            <li className="flex gap-3 items-center mb-2  font-semibold">
              <img
                src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/satisfaction.svg"
                alt=""
              />
              <p className="text-lg">
               1k + Clients Served
              </p>
            </li>
            <li className="flex gap-3 items-center mb-2  font-semibold">
              <img     src="	https://tax2win.in/assets-new/img/new-theme/pricing-landing/experiance.svg"
                alt=""></img>
              <p  className="text-lg">Secure, Confidential & End-to-End Assistance</p>
            </li>
          </ul>
         
        </div>
        <div className="ca-form lg:p-9 md:p-9 p-4 xl:p-9 lg:me-28 shadow-lg rounded-lg flex flex-col items-center">
          <h1 className="text-2xl font-bold">Received an Income Tax Notice? Let Us Help You.</h1>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="py-3 px-5 mb-3 mt-8 rounded-md"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="py-3 px-5 mb-3 rounded-md"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="py-3  px-5 mb-6 rounded-md"
            />
          </div>

          <div className="book-btn rounded-lg mt-6 flex gap-3 justify-center w-full py-3">
            <p className="text-white text-xl">Get Expert Assistance</p>
            <img
              src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg"
              alt=""
            />
          </div>
        </div>
      </div>

     </div>

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-2">Understanding Income Tax Notices</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
           Explore the various types of notices issued under the Income Tax Act and learn how to address each one within the statutory timelines
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search by Section or Keyword"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex-shrink-0">
              <select
                className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Notice Cards */}
        <h1 className='text-center text-2xl font-semibold mt-5'>Common Types of Income Tax Notices & Their Implications</h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <div key={notice.id} className="notice-card group">
                <div className="flex justify-between items-start mb-3">
                  <div className={`tag ${getTagClass(notice.priority)}`}>
                    {notice.priority} Priority
                  </div>
                  <span className="text-gray-400 text-sm flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {notice.responseTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#144047] transition-colors">
                  {notice.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {notice.description}
                </p>
                {/* <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FileText className="h-4 w-4 mr-2" />
                  {notice.section}
                </div> */}
                <div className="mt-auto pt-2 border-t border-gray-100">
                  <a 
                    href={`/guide/${notice.id}`}
                    className="inline-flex items-center text-[#144047] font-medium "
                  >
                  View Complete Guide
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <h3 className="text-xl font-medium text-gray-700">No notices found</h3>
              <p className="text-gray-500 mt-2">Try changing your search criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Guide Section */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Step-by-Step: How to Handle an Income Tax Notice</h2>
            {/* <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these steps to effectively respond to any income tax notice you receive
            </p> */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="btn-primary">
             Download the Complete Response Guide
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container-custom py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to commonly asked questions about income tax notices
          </p>
        </div>
        
        <div className="max-w-8xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                {openFaqIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openFaqIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions about your income tax notice?</p>
          <button className="btn-outline">
            Contact Our Tax Experts
          </button>
        </div> */}
      </div>

      <div className='container-custom py-16 '>
          <div className=" mb-12">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose FileYourTax for Notice Handling?</h2>

         <div className='flex mx-auto gap-3 p-3 border border-teal-100 rounded mb-3'>
           <img src='https://cdn-icons-png.flaticon.com/128/61/61222.png' className='max-w-6 max-h-6'></img>
          <p className=" max-w-2xl  text-xl "> 100% Digital Process – No physical visits required</p>
         </div>

         <div className='flex mx-auto gap-3 p-3 border border-teal-100 rounded mb-3 '>
           <img src='https://cdn-icons-png.flaticon.com/128/61/61222.png' className='max-w-6 max-h-6'></img>
          <p className=" max-w-2xl  text-xl"> CA-Assisted Resolution for Complex Notices</p>
         </div>

         <div className='flex mx-auto gap-3 p-3 border border-teal-100 rounded mb-3 '>
           <img src='https://cdn-icons-png.flaticon.com/128/61/61222.png' className='max-w-6 max-h-6'></img>
          <p className=" max-w-2xl  text-xl ">End-to-End Document Preparation and Filing</p>
         </div>

         <div className='flex mx-auto gap-3 p-3 border border-teal-100 rounded mb-3'>
           <img src='https://cdn-icons-png.flaticon.com/128/61/61222.png' className='max-w-6 max-h-6'></img>
          <p className=" max-w-2xl  text-xl ">Timely Compliance to Prevent Penalties</p>
         </div>
 
         <div className='flex mx-auto gap-3 p-3 border border-teal-100 rounded mb-3 '>
           <img src='https://cdn-icons-png.flaticon.com/128/61/61222.png' className='max-w-6 max-h-6'></img>
          <p className=" max-w-2xl  text-xl ">Transparent Pricing, No Hidden Costs</p>
         </div>
        </div>

           <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need Immediate Assistance with a Tax Notice?</p>
          <button className="btn-outline">
        Schedule Your Consultation Now
          </button>
        </div>
      </div>

      <div className="section10 py-16 lg:px-24 px-4 text-center">
      <div className="section9-Faqs">

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(0)}>
          <p className="text-xl font-bold question"> What should I do if I receive an income tax notice? </p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[0] &&
          <div className="answer text-left my-3">
            <p className="text-base mb-2">Receiving an income tax notice can be concerning, but it’s important to stay calm. Begin by thoroughly reviewing the notice to understand the reason it was issued, the section of the Income Tax Act involved, and the response timeline. Verify the details mentioned and identify the documents or clarifications required. Ensure you respond within the stipulated time to avoid penalties or further proceedings. For complex or technical matters, it is advisable to seek assistance from a qualified tax professional to ensure proper compliance and representation.</p>
           
          </div>}


        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(1)}>
          <p className="text-xl font-bold question"> How much time do I have to respond to a notice?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[1] &&
          <div className="answer text-left my-3">
            <p className="text-base mb-3">The time to respond varies by notice type. Generally, you have 7 to 30 days to respond. The specific deadline will be mentioned in your notice. It's crucial to respond within this timeframe to avoid penalties.</p>

           
          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(2)}>
          <p className="text-xl font-bold question"> How much time do I have to respond to an income tax notice?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[2] &&
          <div className="answer text-left my-3">
           
            <p className="text-base">The response timeline depends on the type of notice received. Typically, the Income Tax Department allows a window ranging from <b>7 to 30 days</b> for compliance. The exact deadline will be clearly mentioned in the notice itself. It is essential to adhere to this timeline, as failure to respond within the stipulated period may lead to penalties, interest, or further legal action. Prompt action ensures smoother resolution and avoids unnecessary complications.</p>
          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(3)}>
          <p className="text-xl font-bold question"> Can I get an extension for responding to a tax notice?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[3] &&
          <div className="answer text-left my-3">
             <p className="text-base mb-3">Yes, in certain circumstances, you may request an extension to respond to an income tax notice. To do so, you must submit a formal written request to the concerned Assessing Officer, clearly stating the reason for the delay and justifying the need for additional time. Approval of such extensions is entirely at the discretion of the tax authority and is granted based on the merits of the case. It is advisable to make the request well before the original deadline to improve the chances of acceptance.</p>
          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(4)}>
          <p className="text-xl font-bold question"> What happens if I ignore an income tax notice?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[4] &&
          <div className="answer text-left my-3 text-base">
            <p className=" mb-3">Ignoring an income tax notice can lead to serious consequences. The Income Tax Department may impose <b>penalties</b>, levy <b>interest on outstanding dues</b>, and initiate <b>reassessment or best judgment assessment</b> without your input. In certain cases, continued non-compliance may result in <b>prosecution, asset attachment</b>, or other legal actions. Timely response is critical to avoid escalation and to ensure your rights and interests are protected.</p>

           

          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(5)}>
          <p className="text-xl font-bold question"> What should I do if I receive a tax notice?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[5] &&
          <div className="answer text-left my-3 text-base">
            <p className=" mb-3">Upon receiving an income tax notice, the first step is to carefully review its contents to understand the reason for issuance. Notices may be issued for various reasons, such as missing documentation, discrepancies in your filed return, or requests for clarification. If the notice seeks additional information or documents, you must furnish the required details within the specified timeframe. In cases involving errors in your Income Tax Return (ITR), you should promptly rectify the discrepancies and respond accordingly. Timely and accurate compliance is essential to avoid penalties, interest, or further legal action. Seeking assistance from a tax professional is advisable for complex issues.</p>
          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(6)}>
          <p className="text-xl font-bold question"> What happens if you don’t respond to a tax notice?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[6] &&
          <div className="answer text-left my-3 text-base">
            <p className=" mb-3">Failure to respond to an income tax notice can lead to serious consequences, depending on the nature of the notice issued. Potential repercussions include:</p>

             <ul className="flex flex-col gap-2 mb-3 custom-circle pl-5">
              <li><b>Monetary penalties </b>of up to ₹10,000 under Section 272A(1).</li>
              <li><b>Interest </b>on unpaid taxes or incorrect filings.</li>
              <li><b>Best judgment assessment</b>where the Assessing Officer finalizes your tax liability without your input.</li>
              <li><b>Prosecution </b>which in certain cases may lead to <b>imprisonment of up to one year</b>, especially in cases involving willful evasion or fraudulent behavior.</li>
            </ul>

            <p className=" mb-3"><p className=" mb-3">Failure to respond to an income tax notice can lead to serious consequences, depending on the nature of the notice issued. Potential repercussions include:</p>
</p>


          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(7)}>
          <p className="text-xl font-bold question"> How do I respond to an income tax notice?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[7] &&
          <div className="answer text-left my-3 text-base">
            <p className=" mb-3">You can respond to an income tax notice through the Income Tax Department’s official e-filing portal. Follow these steps:</p>

           <ul className="flex flex-col gap-2 mb-3 custom-circle pl-5">
              <li>1.	<b>Log in</b> to the <a href='https://www.incometax.gov.in' target='blank' className='text-blue-500'>Income Tax e-filing portal</a> using your User ID (PAN), password, and captcha code.</li>
              <li>2.	Navigate to the <b>‘e-Proceedings’</b> or <b>‘Compliance’</b> section, depending on the type of notice received.</li>
              <li>3.	Select the relevant notice and <b>submit your response</b> along with any required documents or explanations.</li>
              <li>4.	Once submitted, you may also download the <b>acknowledgment</b> for your records.</li>
            </ul>

            <p className=" mb-3" >It is important to respond accurately and within the prescribed deadline. For complex notices, consider seeking assistance from a qualified tax consultant to ensure proper compliance..</p>
            
          </div>}


          <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(8)}>
          <p className="text-xl font-bold question"> How do I pay my tax on demand?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[8] &&
          <div className="answer text-left my-3 text-base">
            <p className=" mb-3">You can pay your tax on demand easily through the Income Tax Department’s e-filing portal by following these steps:</p>

           <ul className="flex flex-col gap-2 mb-3 custom-circle pl-5">
              <li>1.	<b>Log in</b> to the <a href='https://www.incometax.gov.in' target='blank' className='text-blue-500'>Income Tax e-filing portal</a> using your PAN and password.</li>
              <li>2. Navigate to the <b>‘Pending Actions’</b> section and select <b>‘Response to Outstanding Tax Demand’</b>.</li>
              <li>3.	Locate the relevant <b>Demand Reference Number (DRN)</b> and click on the <b>‘Pay Now’</b> option.</li>
              <li>4.	You will be redirected to the <b>TIN NSDL (now Protean) portal</b> to complete the payment.</li>
                    <li>5.	Fill in the required details in <b>Challan No./ITNS 280</b>, select the appropriate assessment year and payment type, and proceed with the payment using your preferred mode (net banking, debit card, etc.).</li>
              <li>6. Upon successful payment, save or print the challan receipt for your records.</li>
            </ul>

            <p className=" mb-3" >Ensure that the payment is made before the due date to avoid interest and penalties.</p>
            
          </div>}

      </div>
    </div>


      <Need_Support/>
    <Footer/>
    
    </main>
  );
}