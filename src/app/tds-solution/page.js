"use client";

import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';
import Nav from '../components/Navbar/Nav';
import "./tds.css";
import Footer from '../homepage/Footer';

export default function Home() {
 const [faqOpen, setFaqOpen] = useState({
    1: true,
    2: false,
    3: false,
    4: false
  });

 const toggleFaq = (index) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div >
        <Nav/>

    <main className="min-h-screen page">
      {/* Header */}
    

      {/* Hero Section */}
      <section className="bg-teal-gradient text-white py-16 relative overflow-hidden ">
       
        <div className="container mx-auto px-4 relative z-10 ">
          <div className="bg-amber-400 text-amber-800 font-medium text-xs py-1 px-3 rounded-full inline-block mb-4 text-center flex justify-self-center">Welcome To FileYourTax</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">FileyourTax: Smart Cloud-Based e-TDS Filing & Compliance Solution</h1>
          <p className="text-lg md:text-xl mb-6 text-center">Effortless, Accurate & Secure TDS Return Filing</p>
          
          <div className="flex justify-center">
            <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-6 md:p-8 text-gray-800">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Features */}
                <div>
                  {/* <h2 className="text-xl font-semibold text-teal-700 border-l-4 border-teal-500 pl-3 mb-6">e-TDS Return Filing with TDS2WIN</h2> */}
                  
                  <p className="mb-6 text-sm">
                    <b>FileyourTax</b> is a next-generation, cloud-enabled platform built to simplify the complexities of TDS return filing and Form 16/16A generation. Designed for tax professionals, corporates, and deductors, our solution offers a seamless, end-to-end e-TDS filing experience—accessible from any device, anytime.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-[#144047] mr-2 mt-1"><Check size={16} /></span>
                      <p className="text-sm">Bank-Level SSL Security</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#144047] mr-2 mt-1"><Check size={16} /></span>
                      <p className="text-sm">Unlimited Filing Capability</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#144047] mr-2 mt-1"><Check size={16} /></span>
                      <p className="text-sm">No Software Installation Required</p>
                    </div>
                  </div>

                    <div className="space-y-2">
                      <h2 className='mt-3 font-semibold '>Key Advantages</h2>
                    <div className="mt-0">
                      <p className='mb-1 font-semibold text-sm'>Anytime, Anywhere Access</p>
                      <p className="text-sm">Leverage the convenience of a fully web-based TDS solution 
                        with no dependency on local infrastructure.</p>
                    </div>
                    <div className="">
                    <p className='mb-1 font-semibold text-sm'>Streamlined Filing Experience</p>
                      <p className="text-sm">Our intuitive interface and guided workflows ensure ease of use for all users—beginners to experts.</p>
                    </div>
                    <div className="">
                      <p className='mb-1 font-semibold text-sm'>Day-Wise Return Management</p>
                      <p className="text-sm">Maintain filing discipline with intelligent, day-wise tracking and reporting.</p>
                    </div>
                  </div>


                  
                  <div className="mt-8 space-x-4 flex">
                    <div className="flex items-center">
                      <div className="mr-3 bg-gray-100 p-2 rounded-full">
                        <Phone size={20} className="text-gray-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Get in touch</p>
                        <p className="text-sm font-medium">+91 9971097125</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="mr-3 bg-gray-100 p-2 rounded-full">
                        <Mail size={20} className="text-gray-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">+ Mail</p>
                        <p className="text-sm font-medium">support@FileyourTax.in</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Registration Form */}
                <div>
                  <h2 className="text-xl font-semibold text-teal-700 border-l-4 border-teal-500 pl-3 mb-2">Start Filing with FileyourTax</h2>

                  <p className='mb-4 text-sm '>Ready to transform your TDS filing experience? Fill out the form below and we’ll connect with you:</p>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm mb-1">Full Name</label>
                      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-1">Email Address*<span className="text-red-400">*</span></label>
                      <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-1">Mobile Number*</label>
                      <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    </div>
                    
                    <p className="text-xs text-gray-500 mt-2">
                     By submitting this form, you confirm your agreement to our  <a href="#" className="text-blue-500 hover:underline">Terms & Conditions</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                    </p>
                    
                    <button type="submit" className="w-full bg-[#144047] hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
                      ENQUIRE NOW
                    </button>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <a href="#" className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-md">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                        </svg>
                        Facebook
                      </a>
                      <a href="#" className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-md">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
                        </svg>
                        Google
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
           Core Features
            {/* <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-teal-500 rounded"></span> */}
          </h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex justify-end">
              <div className="mr-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Multi-User Access</h3>
                <p className="text-sm text-gray-600">Enable teams to work on multiple clients concurrently with role-based access.</p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex justify-start">
              <div className="mr-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Real-Time Status Updates</h3>
                <p className="text-sm text-gray-600">Track return submission and approval status for you and your clients instantly.</p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="flex justify-end">
              <div className="mr-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Seamless Government Portal Integration</h3>
                <p className="text-sm text-gray-600">Quick and easy registration of deductors on <b>TRACES</b> and <b>NSDL FVU</b>  platforms.</p>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="flex justify-start">
              <div className="mr-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Advanced PAN Validation</h3>
                <p className="text-sm text-gray-600">Smart alerts for duplicate PANs, name mismatches, or blank entries to reduce errors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto lg:px-40  md:px-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
          What You Can Do with FileyourTax
            {/* <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-teal-500 rounded"></span> */}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="flex items-start">
              <div className="text-teal-500 mr-2 mt-1 flex-shrink-0">
                <ArrowRight size={16} />
              </div>
              <p className="text-sm">Digitally sign <b>Form 16/16A</b></p>
            </div>
            
            {/* Service 2 */}
            <div className="flex items-start">
              <div className="text-teal-500 mr-2 mt-1 flex-shrink-0">
                <ArrowRight size={16} />
              </div>
              <p className="text-sm">Online <b>TAN/PAN application and registration</b></p>
            </div>
            
            {/* Service 3 */}
            <div className="flex items-start">
              <div className="text-teal-500 mr-2 mt-1 flex-shrink-0">
                <ArrowRight size={16} />
              </div>
              <p className="text-sm">Detect and rectify incorrect PAN entries</p>
            </div>
            
            {/* Service 4 */}
            <div className="flex items-start">
              <div className="text-teal-500 mr-2 mt-1 flex-shrink-0">
                <ArrowRight size={16} />
              </div>
              <p className="text-sm">Prepare and revise returns: <b>Form 24Q, 26Q, 27Q, 27EQ, and 26QA</b></p>
            </div>
            
            {/* Service 5 */}
            <div className="flex items-start">
              <div className="text-teal-500 mr-2 mt-1 flex-shrink-0">
                <ArrowRight size={16} />
              </div>
              <p className="text-sm">Automatically compute monthly TDS obligations</p>
            </div>
            
            {/* Service 6 */}
            <div className="flex items-start">
              <div className="text-teal-500 mr-2 mt-1 flex-shrink-0">
                <ArrowRight size={16} />
              </div>
              <p className="text-sm">Generate actionable reports on <b>Challan Utilization</b> and <b>Return Status</b></p>
            </div>
            
            {/* Service 7 */}
            <div className="flex items-start">
              <div className="text-teal-500 mr-2 mt-1 flex-shrink-0">
                <ArrowRight size={16} />
              </div>
              <p className="text-sm">Bulk import deductor, deductee, and challan data from Excel or Conso files</p>
            </div>
            
            {/* Service 8 */}
            <div className="flex items-start">
              <div className="text-teal-500 mr-2 mt-1 flex-shrink-0">
                <ArrowRight size={16} />
              </div>
              <p className="text-sm">Auto-validate challans with <b>OLTAS</b> integration</p>
            </div>
            
           
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
          Client Testimonial
            {/* <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-teal-500 rounded"></span> */}
          </h2>
          
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="italic text-gray-600 mb-4">
                "Thank you so much for your assistance, which made our TDS Return completely hassle-free. We truly appreciate your prompt and professional service. We look forward to engaging with you again next year"
              </p>
              <p className="font-semibold">—SOMIA BHATTACHARJEE</p>
              <p className=" text-gray-800" >Director</p>
              <p className="text-sm text-gray-800">EXCELADZE EDUCATIONS PRIVATE LIMITED</p>
            </div>
            
            {/* <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
              <div className="grayscale hover:grayscale-0 transition-all">
                <svg width="80" height="40" viewBox="0 0 80 40" className="text-gray-400">
                  <rect width="80" height="40" fill="#f0f0f0" />
                </svg>
              </div>
              <div className="grayscale hover:grayscale-0 transition-all">
                <svg width="80" height="40" viewBox="0 0 80 40" className="text-gray-400">
                  <rect width="80" height="40" fill="#f0f0f0" />
                </svg>
              </div>
              <div className="grayscale hover:grayscale-0 transition-all">
                <svg width="80" height="40" viewBox="0 0 80 40" className="text-gray-400">
                  <rect width="80" height="40" fill="#f0f0f0" />
                </svg>
              </div>
              <div className="grayscale hover:grayscale-0 transition-all">
                <svg width="80" height="40" viewBox="0 0 80 40" className="text-gray-400">
                  <rect width="80" height="40" fill="#f0f0f0" />
                </svg>
              </div>
              <div className="grayscale hover:grayscale-0 transition-all">
                <svg width="80" height="40" viewBox="0 0 80 40" className="text-gray-400">
                  <rect width="80" height="40" fill="#f0f0f0" />
                </svg>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            Frequently Asked Questions (FAQs) – TDS
            {/* <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-teal-500 rounded"></span> */}
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button 
                className="w-full flex justify-between items-center p-4 focus:outline-none"
                onClick={() => toggleFaq(1)}
              >
                <div className="flex items-center">
                  <span className="bg-[#144047] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">1</span>
                  <span className="font-medium">What is TDS?</span>
                </div>
                {faqOpen[1] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              
              {faqOpen[1] && (
                <div className="p-4 pt-0 pl-14">
                  <p className="text-sm text-gray-600">
                  <b> TDS</b> stands for <b>Tax Deducted at Source</b>. As per the Income Tax Act, any person or entity making a specified payment is required to deduct tax at source if the payment exceeds the prescribed threshold limits. The deducted tax is then deposited with the government.S
                  </p>
                </div>
              )}
            </div>
            
            {/* FAQ Item 2 */}
            <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button 
                className="w-full flex justify-between items-center p-4 focus:outline-none"
                onClick={() => toggleFaq(2)}
              >
                <div className="flex items-center">
                  <span className="bg-[#144047] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">2</span>
                  <span className="font-medium">Who is required to file a TDS return?</span>
                </div>
                {faqOpen[2] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              
              {faqOpen[2] && (
                <div className="p-4 pt-0 pl-14">
                  <p className="text-sm text-gray-600">
                  Any person (including companies, firms, individuals, etc.) who is obligated under the Income Tax Act to deduct or collect TDS/TCS must file the corresponding TDS return on a quarterly basis.
                  </p>
                </div>
              )}
            </div>
            
            {/* FAQ Item 3 */}
            <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button 
                className="w-full flex justify-between items-center p-4 focus:outline-none"
                onClick={() => toggleFaq(3)}
              >
                <div className="flex items-center">
                  <span className="bg-[#144047] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">3</span>
                  <span className="font-medium">What are the due dates for filing TDS and TCS returns?</span>
                </div>
                {faqOpen[3] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              
              {faqOpen[3] && (
                <div className="p-4 pt-0 pl-14">
                
                  
                  <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full border border-gray-200">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-2 text-xs font-medium text-gray-500 border-b border-gray-200 text-left">Quarter</th>
                          <th className="px-4 py-2 text-xs font-medium text-gray-500 border-b border-gray-200 text-left">Period Covered</th>
                          <th className="px-4 py-2 text-xs font-medium text-gray-500 border-b border-gray-200 text-left">TDS Return Due Date</th>
                          <th className="px-4 py-2 text-xs font-medium text-gray-500 border-b border-gray-200 text-left">TCS Return Due Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 text-xs border-b border-gray-200">Q1</td>
                          <td className="px-4 py-2 text-xs border-b border-gray-200">1st April – 30th June</td>
                          <td className="px-4 py-2 text-xs border-b border-gray-200">31st July</td>
                          <td className="px-4 py-2 text-xs border-b border-gray-200">15th July</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-xs border-b border-gray-200">Q2</td>
                          <td className="px-4 py-2 text-xs border-b border-gray-200">1st July – 30th September</td>
                          <td className="px-4 py-2 text-xs border-b border-gray-200">31st October</td>
                          <td className="px-4 py-2 text-xs border-b border-gray-200">15th October</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-xs border-b border-gray-200">Q3</td>
                          <td className="px-4 py-2 text-xs border-b border-gray-200">1st October – 31st December</td>
                          <td className="px-4 py-2 text-xs border-b border-gray-200">31st January</td>
                          <td className="px-4 py-2 text-xs border-b border-gray-200">15th January</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-xs border-b border-gray-200">Q4</td>
                          <td className="px-4 py-2 text-xs border-b border-gray-200">1st January – 31st March</td>
                          <td className="px-4 py-2 text-xs border-b border-gray-200">31st May</td>
                          <td className="px-4 py-2 text-xs border-b border-gray-200">15th May</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
            
            {/* FAQ Item 4 */}
            <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button 
                className="w-full flex justify-between items-center p-4 focus:outline-none"
                onClick={() => toggleFaq(4)}
              >
                <div className="flex items-center">
                  <span className="bg-[#144047] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">4</span>
                  <span className="font-medium">What are the penalties for late or non-filing of TDS returns?</span>
                </div>
                {faqOpen[4] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              
              {faqOpen[4] && (
                <div className="p-4 pt-0 pl-14">
                  
                  <ul className="list-disc pl-5 mt-2 space-y-2 text-sm text-gray-600">
                    <li>
                      <p className="font-medium">         Section 234E – Late Filing Fee</p>
                      <p>A fee of <b>₹200 per day</b> is levied for each day of delay until the return is filed. However, the total fee shall not exceed the amount of TDS deductible.</p>
                    </li>
                    <li>
                      <p className="font-medium">Section 271H – Penalty for Non-Filing or Delay</p>
                      <p>In addition to the late fee under Section 234E, the Assessing Officer may impose a penalty ranging from  <b>₹10,000 to ₹1,00,00</b>0, depending on the severity and duration of non-compliance.</p>
                    </li>
                  </ul>
                  
                  <p className="mt-4 text-sm text-gray-600">
                   Note: Penalty under Section 271H is <b>in addition to </b> the late filing fee under Section 234E.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#25616a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Simplify your TDS compliance with our secure, cloud-based platform</h2>
          <a href="#" className="inline-block bg-white text-[#144047] font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
          Enquire Now – Let’s Get You Started!

          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
      {/* Chat Widget */}
      <div className="fixed bottom-5 right-5 z-50">
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </main>
    </div>
  );
}