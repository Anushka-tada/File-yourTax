// "use client";
// import React from "react";
// import "./capitalGain.css";
// import Nav from "../components/Navbar/Nav";
// import Footer from "../homepage/Footer";
// import Need_Support from "../homepage/Need_Support";
// import WhyChooseUs from "./WhyChooseUs";

// const CapitalGainTaxFiling = () => {
//   return (
//     <>
//       <Nav />

//       <div className="capitalGainPage">
//         {/* Header */}
//         <header className="cgHeader">
//           <h1>Capital Gain Tax Filing</h1>
//           <p>Everything you need to know about filing capital gains tax in India.</p>
//         </header>

//         {/* Understanding Capital Gains */}
//         <section className="cgSection">
//           <h2>What Are Capital Gains?</h2>
//           <p>
//             Capital gains arise when you sell a capital asset such as property, stocks, or mutual funds at a profit. 
//             These gains are taxable based on the holding period and type of asset.
//           </p>
//         </section>

//         {/* Types of Capital Gains */}
//         <section className="cgSection altBg">
//           <h2>Types of Capital Gains</h2>
//           <ul>
//             <li><strong>Short-Term Capital Gains (STCG):</strong> Gains on assets held for less than 36 months (or 12 months for equities).</li>
//             <li><strong>Long-Term Capital Gains (LTCG):</strong> Gains on assets held longer than the specified period.</li>
//           </ul>
//         </section>

//         {/* Tax Rates on Capital Gains */}
//         <section className="cgSection">
//           <h2>Tax Rates on Capital Gains</h2>
//           <p>
//             STCG on equities are taxed at 15%, while LTCG exceeding ₹1 lakh from equities are taxed at 10%. Other asset classes have different tax slabs.
//           </p>
//         </section>

//         {/* Exemptions & Deductions */}
//         <section className="cgSection altBg">
//           <h2>Exemptions and Deductions</h2>
//           <p>
//             Investments under Section 54, 54EC, and 54F provide exemptions on capital gains from sale of residential property and other assets.
//           </p>
//         </section>

//         {/* Filing Process */}
//         <section className="cgSection">
//           <h2>How to File Capital Gains Tax</h2>
//           <p>
//             Include details of your capital gains in your Income Tax Return (usually ITR-2 or ITR-3). Ensure you report all transactions correctly and claim exemptions if applicable.
//           </p>
//         </section>

//         {/* Tips to Save Tax */}
//         <section className="cgSection altBg">
//           <h2>Tips to Save on Capital Gains Tax</h2>
//           <ul>
//             <li>Plan the sale timing to optimize holding period.</li>
//             <li>Invest in specified bonds to claim exemptions.</li>
//             <li>Maintain accurate records of purchase and sale.</li>
//           </ul>
//         </section>
//         <WhyChooseUs/>

//         {/* FAQ Section */}
//         <section className="faqSection">
//           <h2>Frequently Asked Questions (FAQs)</h2>
//           <div className="faqList">
//             <div className="faqItem">
//               <h4>1. What is the holding period for LTCG on property?</h4>
//               <p>For property, it is 24 months to qualify as long-term capital gain.</p>
//             </div>
//             <div className="faqItem">
//               <h4>2. Are capital gains from stocks taxable?</h4>
//               <p>Yes, both short-term and long-term gains from stocks are taxable with different rates.</p>
//             </div>
//             <div className="faqItem">
//               <h4>3. Can I claim exemption on capital gains?</h4>
//               <p>Yes, under certain conditions like investing in specified bonds or residential property.</p>
//             </div>
//             <div className="faqItem">
//               <h4>4. Which ITR form is used for capital gains?</h4>
//               <p>ITR-2 or ITR-3 depending on your income sources.</p>
//             </div>
//             <div className="faqItem">
//               <h4>5. Is advance tax applicable on capital gains?</h4>
//               <p>Yes, if your tax liability exceeds ₹10,000, advance tax payments may be required.</p>
//             </div>
//           </div>
//         </section>
//       </div>

//       <Need_Support />
//       <Footer />
//     </>
//   );
// };

// export default CapitalGainTaxFiling;


"use client";

import Image from 'next/image';
import { useState } from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Shield,
  HeadphonesIcon,
  FileText,
  PieChart,
  Home,
  DollarSign,
  Building,
  BarChart2,
  TrendingUp,
  Clock,
  CreditCard
} from 'lucide-react';
import Nav from '../components/Navbar/Nav';
import Footer from '../homepage/Footer';
import Need_Support from '../homepage/Need_Support';

export default function page() {
  const [caseStudy1Open, setCaseStudy1Open] = useState(false);
  const [caseStudy2Open, setCaseStudy2Open] = useState(false);
  const [caseStudy3Open, setCaseStudy3Open] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Bar */}
      
      <Nav/>
      {/* Hero Section */}
      <section className="py-12 pt-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
          <div className="md:w-7/12 md:pr-8">
            <h2 className=" font-medium mb-2">Optimize Your Capital Gains. Minimize Your Tax Burden.</h2>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#144047] mb-4">
             Expert-Assisted Capital Gains Tax Filing – <br/>Powered by FileYourTax
            </h1>
            <p className="text-gray-700 mb-6">
             Whether you've sold real estate, equity shares, mutual funds, digital assets, or any other capital asset <b>—FileYourTax</b> offers comprehensive, expert-driven support to ensure accurate tax filing and maximum savings under the Income Tax Act.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#24656F] mr-2" />
                <span className="text-sm text-gray-700">5 minute filing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#24656F] mr-2" />
                <span className="text-sm text-gray-700">20K+ satisfied customers</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#24656F] mr-2" />
                <span className="text-sm text-gray-700">100% accuracy guaranteed</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-5/12 mt-8 md:mt-0">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-center">Looking for Tax Help?</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4"/><path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"/></svg>
                      </span>
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      className="pl-10 pr-3 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      </span>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="pl-10 pr-3 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      </span>
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Mobile"
                      className="pl-10 pr-3 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="requirement" className="sr-only">Your Requirement</label>
                  <input
                    id="requirement"
                    name="requirement"
                    type="text"
                    placeholder="Your Requirement"
                    className="px-3 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <button
                  type="button"
                  className="w-full bg-[#144047] text-white font-medium py-3 px-4 rounded-md transition duration-300"
                >
                  Connect with Tax Expert
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#144047] mb-5">
            Who Should Opt for This Service?
          </h2>
          <p className='mb-12 text-lg text-center font-semibold'>Our Capital Gains Assistance Plan is ideal for:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-50 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#24656F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                </div>
                <p className="text-gray-700 font-medium">Individuals transacting in <b>immovable property</b> (sale, purchase, or exchange)</p>
              </div>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-50 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#24656F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <p className="text-gray-700 font-medium">Investors involved in <b>cryptocurrency and virtual digital assets</b></p>
              </div>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-50 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#24656F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <p className="text-gray-700 font-medium">Taxpayers with <b>foreign currency transactions or foreign assets</b></p>
              </div>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-50 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#24656F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <p className="text-gray-700 font-medium">Residents and NRIs involved in <b>property sale</b> requiring <b>dedicated CA consultation</b></p>
              </div>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-50 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#24656F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"/><path d="M15 7h6v6"/></svg>
                </div>
                <p className="text-gray-700 font-medium">Individuals with <b>multiple real estate income sources</b></p>
              </div>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-50 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#24656F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <p className="text-gray-700 font-medium">Taxpayers earning capital gains or losses from <b>equity shares or mutual funds</b></p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-50 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#24656F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <p className="text-gray-700 font-medium">Traders reporting income from <b>Futures & Options (F&O)</b></p>
              </div>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-50 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#24656F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
                </div>
                <p className="text-gray-700 font-medium">Individuals with <b>income from other sources</b> requiring capital gains treatment</p>
              </div>
            </div>
            
            {/* <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-50 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#24656F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <p className="text-gray-700 font-medium">Futures and options income</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#144047] mb-12">
            Scope of Our Capital Gains Services
          </h2>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="md:w-1/4">
                <div className="bg-white p-6 rounded-lg flex justify-center items-center">
                  <TrendingUp className="h-24 w-24 text-green-500" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Capital Gains Tax Filing</h3>
                <p className="text-gray-700 mb-1">Professional preparation and filing of your capital gains tax return—covering all classes of assets including listed/unlisted securities, mutual funds, and property.</p>
                
                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Crypto Gains Computation & Filing</h3>
                <p className="text-gray-700 mb-1">Specialized support for reporting capital gains from digital assets in compliance with VDA regulations.</p>
                
                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Capital Gains Computation & Indexation</h3>
                <p className="text-gray-700 mb-1">Accurate calculation of long-term and short-term gains/losses, incorporating indexation, cost inflation adjustments, and set-offs.</p>
                
                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Advisory on Exemptions & Reinvestments</h3>
                <p className="text-gray-700 mb-1">Expert guidance on exemptions available under Sections 54, 54F, 54EC, and strategic investment advice for tax optimization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#144047] mb-12">
           Why Choose FileYourTax?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Domain Expertise</h3>
              <p className="text-gray-600 text-sm">
              Our team of qualified Chartered Accountants and tax professionals specializes in capital gains taxation and offers solutions tailored to your asset class and holding structure.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <HeadphonesIcon className="h-12 w-12 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Comprehensive Assistance</h3>
              <p className="text-gray-600 text-sm">
              We manage the entire process—from document collection and computation to filing and post-filing representation.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <FileText className="h-12 w-12 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Seamless Digital Experience</h3>
              <p className="text-gray-600 text-sm">
              A fully digitized workflow ensures convenience, compliance, and speed—without physical visits.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <PieChart className="h-12 w-12 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">
               All services are priced transparently, with no hidden charges or unexpected fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Green CTA Banner */}
      <section className="py-8 px-4 md:px-8 bg-[#24656F] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </span>
              <div>
                <h2 className='font-bold text-xl mb-3'>Capital Gains: A Critical Component of Your Tax Profile</h2>
              <p className="font-medium">
              Capital gains can materially affect your tax obligations. With our support, you can ensure compliance, claim available exemptions, and strategically plan to reduce your taxable income.
              </p>
              </div>
            </div>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded-md transition duration-300">
            Book a Consultation →
          </button>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#144047] mb-12">
           Case Studies: Turning Tax Complexities into Strategic Opportunities
          </h2>
          
          <div className="space-y-6">
            {/* Case Study 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div 
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => setCaseStudy1Open(!caseStudy1Open)}
              >
                <div className="flex items-center">
                  <div className="bg-green-50 p-2 rounded-full mr-3">
                    <FileText className="h-5 w-5 text-[#24656F]" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Case Study 1: Sale of Land in India</h3>
                </div>
                <button className="text-gray-500">
                  {caseStudy1Open ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
              </div>
              
              {caseStudy1Open && (
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#24656F] mb-2">Client Query:</h4>
                    <p className="text-gray-700 mb-2">
                     I plan to sell a parcel of land I’ve held for several years. How can I reduce my capital gains tax liability?
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Our Expert Solution:</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      As the land qualifies as a <b>long-term capital asset</b> (held - 24 months), we apply <b>indexation</b> to adjust the purchase price.
                    </p>
                    <p className="text-gray-700 text-sm mb-3">
                      The client is advised to reinvest the gains under <b>Section 54F </b>to purchase or construct a new residential property within the specified time.
                    </p>
                    <p className="text-gray-700 text-sm mb-3">
                      Alternatively, the client may invest up to ₹50 lakh in <b>54EC capital gains bonds </b>(REC, NHAI, etc.) within 6 months of sale for tax exemption.
                    </p>
                    
                  </div>
                </div>
              )}
            </div>
            
            {/* Case Study 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div 
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => setCaseStudy2Open(!caseStudy2Open)}
              >
                <div className="flex items-center">
                  <div className="bg-green-50 p-2 rounded-full mr-3">
                    <FileText className="h-5 w-5 text-[#24656F]" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Case Study 2: NRI Selling Indian Property</h3>
                </div>
                <button className="text-gray-500">
                  {caseStudy2Open ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
              </div>
              
              {caseStudy2Open && (
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#24656F] mb-2">Client Query:</h4>
                    <p className="text-gray-700 mb-2">
                      I’m a Canadian resident planning to sell inherited property in India. How do I manage taxation?
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Our Expert Solution:</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Capital gains are taxable in India, and the <b> buyer must deduct TDS</b> at applicable rates during payment.
                    </p>
                    <p className="text-gray-700 text-sm mb-3">
                     We ensure that the <b>cost of acquisition is indexed</b> based on the purchase year and sale year using CII.
                    </p>
                    <p className="text-gray-700 text-sm mb-3">
                      Guidance is provided on <b>claiming TDS credit</b> and declaring the gain in the Indian ITR. We also review potential <b>Double Taxation Avoidance Agreement (DTAA)</b> benefits.
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Case Study 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div 
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => setCaseStudy3Open(!caseStudy3Open)}
              >
                <div className="flex items-center">
                  <div className="bg-green-50 p-2 rounded-full mr-3">
                    <FileText className="h-5 w-5 text-[#24656F]" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Case Study 3: Capital Gains Reinvestment Deferred</h3>
                </div>
                <button className="text-gray-500">
                  {caseStudy3Open ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
              </div>
              
              {caseStudy3Open && (
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#24656F] mb-2">Client Query:</h4>
                    <p className="text-gray-700 mb-2">
                     I earned LTCG of ₹50 lakh from property sale in June 2023, but I’m not ready to reinvest immediately. Can I still claim exemption?
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Our Expert Solution:</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      The client is advised to deposit the gains in a <b>Capital Gains Account Scheme (CGAS)</b> with an authorized bank before the filing due date.
                    </p>
                    <p className="text-gray-700 text-sm mb-3">
                     This preserves the client’s eligibility under Section <b>54/54F</b> while allowing time (up to 2/3 years) to reinvest in a new residential property.
                    </p>
                    <p className="text-gray-700 text-sm mb-3">
                     We assist with CGAS documentation and ensure timely withdrawal aligned with compliance norms.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

       <section className="py-8 px-4 md:px-8 bg-[#e9eaea]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </span>
              <div>
                <h2 className='font-bold text-xl mb-3'>Take Control of Your Capital Gains Tax Today</h2>
              <p className="font-medium">With the evolving complexity of tax laws, our expert-led services ensure you stay compliant, maximize exemptions, and optimize your financial outcomes.
              </p>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-[#407d7d] text-white font-medium py-2 px-6 rounded-md transition duration-300">
           Book Your Expert Consultation Now →
          </button>
          <p>Precision. Planning. Peace of Mind.</p>
          </div>
        </div>
      </section>

      {/* Sticky Bottom CTA */}
      <Need_Support/>

      {/* Footer */}
     <Footer/>

      {/* Pricing Section - Footer CTA */}
     
    </main>
  );
}
