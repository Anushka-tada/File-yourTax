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
    title: 'Notice under Section 143(1)(a)',
    description: 'Intimation notice for arithmetic errors or incorrect claims in your filed return.',
    category: 'assessment',
    section: 'Section 143(1)(a) of Income Tax Act',
    priority: 'Medium',
    responseTime: '30 days to respond'
  },
  {
    id: 'notice-143-2',
    title: 'Notice under Section 143(2)',
    description: 'Scrutiny notice requiring you to provide additional information about your return.',
    category: 'verification',
    section: 'Section 143(2) of Income Tax Act',
    priority: 'High',
    responseTime: '15 days to respond'
  },
  {
    id: 'notice-139-9',
    title: 'Notice under Section 139(9)',
    description: 'Defective return notice requiring you to correct errors in your filed return.',
    category: 'assessment',
    section: 'Section 139(9) of Income Tax Act',
    priority: 'High',
    responseTime: '15 days to respond'
  },
  {
    id: 'notice-154',
    title: 'Notice under Section 154',
    description: 'Rectification notice allowing you to correct mistakes in assessment orders.',
    category: 'assessment',
    section: 'Section 154 of Income Tax Act',
    priority: 'Medium',
    responseTime: '30 days to respond'
  },
  {
    id: 'notice-245',
    title: 'Notice under Section 245',
    description: 'Set-off of refunds against tax remaining payable notice.',
    category: 'refund',
    section: 'Section 245 of Income Tax Act',
    priority: 'Medium',
    responseTime: '30 days to respond'
  },
  {
    id: 'notice-156',
    title: 'Notice under Section 156',
    description: 'Demand notice requiring you to pay additional tax as determined by assessment.',
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
    question: "What should I do if I receive an income tax notice?",
    answer: "First, don't panic. Read the notice carefully to understand what information the tax department requires. Check the due date for response, gather all necessary documents, and respond within the timeline. If needed, consult a tax professional."
  },
  {
    question: "How much time do I have to respond to a notice?",
    answer: "The time to respond varies by notice type. Generally, you have 7 to 30 days to respond. The specific deadline will be mentioned in your notice. It's crucial to respond within this timeframe to avoid penalties."
  },
  {
    question: "Can I get an extension for responding to a tax notice?",
    answer: "Yes, in certain cases you can request an extension. Submit a formal request explaining why you need additional time. However, extension approval is at the discretion of the tax officer."
  },
  {
    question: "What happens if I ignore an income tax notice?",
    answer: "Ignoring a tax notice can result in penalties, additional interest charges, and in severe cases, legal proceedings. The tax department may also make a determination without your input."
  },

    {
    question: "What to do if I get a tax notice?",
    answer: "If you get an income tax notification, you should understand why the notice has been sent. Notices may be sent due to various reasons. For example, Notices may be sent for the details and papers required by the Income Tax Department, and it still needs to be submitted. In such a case, you need to provide the details as required. If there is any error in the ITR, then notices may be sent to rectify the error. In such a case, you should rectify any error in your return and respond to the notice within the time specified by the income tax department to avoid possible penalties."
  },
  {
    question: "What happens if you don't respond to the tax notice?",
    answer: "If you don't respond to the income tax notice, there can be different types of consequences depending upon the type of Notice you have received. Such consequences include fines of up to INR 10,000 and also imprisonment for up to a year."
  },
  {
    question: "How do you reply to notice?",
    answer: "You can reply to an income tax notice online. You can visit the online website of the income tax department, which is used for the e-filing of returns. Log into your online account, go to the compliance section, and respond to the notice you have received."
  },
  {
    question: "How do I pay my tax on demand?",
    answer: "You can pay your tax on-demand online. To do so, you can visit the e-filing website of the income tax department and log into your account. You can then check the amount of outstanding tax demand under Response to Outstanding Tax Demand under the pending actions option. Then, under the Pay Now column, choose Click Here. You would be taken to the NSDL website to fill out the online form and pay the tax on demand. Also, you can directly pay tax by clicking the Pay Now option for the respective DRN (Demand Reference Number) on the Response to Outstanding Demand page."
  },
];

const steps = [
  {
    icon: <FileText className="h-8 w-8 text-[#144047]" />,
    title: "Understand Your Notice",
    description: "Carefully read the notice to understand its purpose, requirements, and deadlines."
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-[#144047]" />,
    title: "Gather Required Documents",
    description: "Collect all necessary documents mentioned in the notice for an appropriate response."
  },
  {
    icon: <CalendarClock className="h-8 w-8 text-[#144047]" />,
    title: "Respond Within Deadline",
    description: "Ensure you respond before the deadline to avoid penalties or further notices."
  },
  {
    icon: <AlertCircle className="h-8 w-8 text-[#144047]" />,
    title: "Seek Expert Help If Needed",
    description: "For complex notices, consult with a tax professional for proper guidance."
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

  return (

   
    <main className="min-h-screen ">

       <Nav/>
      {/* Hero Section */}
     

     <div >
       <div className="ca-consultants py-20 lg:px-20 md:px-10 px-4 flex flex-wrap xl:justify-between lf:justify-between md:justify-between  justify-center items-center">
        <div className="ca-text flex flex-col mb-6 ">
          <h1 className=" text-5xl font-bold mb-3">
           
Income Tax Notice: Check & Authenticate ITR Notices Online
          </h1>
         
          <p className="text-xl font-semibold my-4 mb-7">
          An income tax notice is a written communication sent by the Income Tax Department to a taxpayer alerting him to an issue with his tax account. The notice can be sent for different reasons, such as filing/ non-filing their income tax return, making the assessment, asking for certain details, etc. When the Income Tax Department sends a notice, the taxpayer has to act on it within the given timeline and resolve the matter with the tax authorities.


          </p>

          <ul className="flex gap-3 ">
            <li className="flex gap-3 items-center mb-2 font-semibold">
              <img
                src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/rating.svg"
                alt=""
              />
              <p className="text-lg">
                5500+ Notices Resolved
              </p>
            </li>
            <li className="flex gap-3 items-center mb-2  font-semibold">
              <img
                src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/satisfaction.svg"
                alt=""
              />
              <p className="text-lg">
               Trusted by 1 Million+
              </p>
            </li>
            <li className="flex gap-3 items-center mb-2  font-semibold">
              <img     src="	https://tax2win.in/assets-new/img/new-theme/pricing-landing/experiance.svg"
                alt=""></img>
              <p  className="text-lg">Secure & Safe</p>
            </li>
          </ul>
         
        </div>
        <div className="ca-form lg:p-9 md:p-9 p-4 xl:p-9 lg:me-28 shadow-lg rounded-lg flex flex-col items-center">
          <h1 className="text-2xl font-bold">Got Income Tax Notice</h1>
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
            <p className="text-white text-xl">Connect Now</p>
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
          <h2 className="text-3xl font-bold text-center mb-2">Income Tax Notices Guide</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Understand different types of income tax notices, their purposes, and how to respond effectively
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
                placeholder="Search notice by keyword..."
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
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FileText className="h-4 w-4 mr-2" />
                  {notice.section}
                </div>
                <div className="mt-auto pt-2 border-t border-gray-100">
                  <a 
                    href={`/guide/${notice.id}`}
                    className="inline-flex items-center text-[#144047] font-medium "
                  >
                    View detailed guide
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
            <h2 className="text-3xl font-bold mb-3">How to Handle Income Tax Notices</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these steps to effectively respond to any income tax notice you receive
            </p>
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
              Download Complete Guide
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
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions about your income tax notice?</p>
          <button className="btn-outline">
            Contact Our Tax Experts
          </button>
        </div>
      </div>
      <Need_Support/>
    <Footer/>
    
    </main>
  );
}