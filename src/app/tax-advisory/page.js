// "use client";
// import React from "react";
// import "./taxAdvisory.css";
// import Nav from "../components/Navbar/Nav";
// import Footer from "../homepage/Footer";
// import Need_Support from "../homepage/Need_Support";

//   const services = [
//     {
//       title: "Advance Tax Calculation",
//       description: "Get ahead of your taxes with our precise calculations"
//     },
//     {
//       title: "Tax Saving on Salary Income",
//       description: "Maximize your savings on your salary"
//     },
//     {
//       title: "Tax Saving on Capital Gains",
//       description: "Optimize tax on your investment gains"
//     },
//     {
//       title: "Responding to Income Tax Notices",
//       description: "Expert help when you need it most"
//     },
//     {
//       title: "Pre-book ITR Filing for FY 2024–25",
//       description: "Secure early filing slots for peace of mind"
//     },
//     {
//       title: "Tailored Tax Regime Selection",
//       description: "Choose the best tax regime for you"
//     },
//     {
//       title: "Timely Tax Filing Reminders",
//       description: "Stay on top of your deadlines"
//     },
//     {
//       title: "Stay Updated with Tax Laws and Regulations",
//       description: "Always be in the know"
//     }
//   ];

// const TaxAdvisoryPage = () => {
//   return (
//     <>
//       <Nav />

//       <div className="taxPage">
//         {/* Intro Section */}
//         <section className="taxIntroBanner">
//           <div className="taxIntroContent">
//             <h1>Expert Tax Advisory Services</h1>
//             <p>
//               Simplify your finances and stay compliant with personalized tax guidance for individuals, freelancers,
//               and businesses.
//             </p>
//             <button className="taxIntroBtn">Book Consultation</button>
//           </div>
//         </section>

//         {/* Services Offered */}
//         <section className="taxSection">
//           <h2>Our Core Tax Advisory Services</h2>
//           <div className="taxCardsContainer">
//             <div className="taxCard">
//               <h4>Income Tax Planning</h4>
//               <p>Optimize your savings with expert planning aligned with the latest tax regulations.</p>
//             </div>
//             <div className="taxCard">
//               <h4>Business Tax Filing</h4>
//               <p>Streamlined tax filings for small to medium businesses, startups & professionals.</p>
//             </div>
//             <div className="taxCard">
//               <h4>Capital Gains Advisory</h4>
//               <p>Navigate real estate, mutual funds, and other investment taxes confidently.</p>
//             </div>
//             <div className="taxCard">
//               <h4>Freelancer & Gig Income</h4>
//               <p>Specialized filing & deduction strategies for freelancers and content creators.</p>
//             </div>
//           </div>
//         </section>

//         {/* Why Choose Us Section */}
//         <section className="taxSection altBg">
//           <h2>Why Choose Our Tax Experts?</h2>
//           <ul className="benefitList">
//             <li>✔ Personalized consultation by experienced tax professionals</li>
//             <li>✔ Up-to-date compliance with latest tax laws & sections</li>
//             <li>✔ Affordable pricing for individuals and businesses</li>
//             <li>✔ End-to-end support from planning to filing</li>
//           </ul>
//         </section>

//          <div 
//       className="py-12 px-4 sm:px-6 lg:px-8"
//       style={{ backgroundColor: 'rgb(238, 247, 249)' }}
//     >
//       <div className="max-w-4xl mx-auto">
//         <h1 
//           className="text-3xl font-bold text-center mb-10"
//           style={{ color: 'rgb(20, 64, 71)' }}
//         >
//           Plan Your Taxes Today with Our Tax Consultants
//         </h1>
        
//         <h2 
//           className="text-xl font-semibold mb-8"
//           style={{ color: 'rgb(36, 101, 111)' }}
//         >
//           What Services Can You Get?
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <div 
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-sm"
//               style={{
//                 boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
//               }}
//             >
//               <h3 
//                 className="text-lg font-semibold mb-2"
//                 style={{ color: 'rgb(36, 101, 111)' }}
//               >
//                 {service.title}
//               </h3>
//               <p 
//                 className="text-gray-600"
//                 style={{ color: 'rgb(36, 101, 111, 0.8)' }}
//               >
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>

//         {/* Advisory Process Section */}
//         <section className="taxSection">
//           <h2>How Our Advisory Works</h2>
//           <ol className="processSteps">
//             <li>✅ Schedule a free consultation</li>
//             <li>✅ Share financial & income details securely</li>
//             <li>✅ Get a customized tax planning report</li>
//             <li>✅ Finalize your filing with expert support</li>
//           </ol>
//         </section>

//         {/* Call to Action */}
//         <section className="taxCtaSection">
//           <h2>Ready to Get Your Taxes Sorted?</h2>
//           <p>Book your session with a tax advisor today and make tax season stress-free.</p>
//           <button className="taxIntroBtn">Talk to an Expert</button>
//         </section>

//         {/* FAQ Section */}
//         <section className="faqSection">
//           <h2>Frequently Asked Questions (FAQs)</h2>
//           <div className="faqList">
//             <div className="faqItem">
//               <h4>1. What is tax advisory service?</h4>
//               <p>It is expert guidance on how to plan and file taxes efficiently.</p>
//             </div>
//             <div className="faqItem">
//               <h4>2. Can I get help with business taxes?</h4>
//               <p>Yes, we provide complete tax filing and compliance services for businesses.</p>
//             </div>
//             <div className="faqItem">
//               <h4>3. Are tax consultations online?</h4>
//               <p>Yes, you can consult with our experts online or over the phone.</p>
//             </div>
//             <div className="faqItem">
//               <h4>4. How do I book a session?</h4>
//               <p>Click the “Book Consultation” button and fill out your details.</p>
//             </div>
//             <div className="faqItem">
//               <h4>5. Is my data secure?</h4>
//               <p>Absolutely. We use encrypted platforms to protect your data.</p>
//             </div>
//           </div>
//         </section>
//       </div>

//       <Need_Support />
//       <Footer />
//     </>
//   );
// };

// export default TaxAdvisoryPage;


'use client';
import "./taxAdvisory.css";

import { useState } from 'react';
import { LucidePhone, LucideUsers, LucideCheckCircle, LucideClock, LucideFileText, LucideWallet, LucideBarChart, LucideBell, LucideUserCheck, LucideMessageSquare, LucideDollarSign, LucideArrowRight } from 'lucide-react';
import Nav from "../components/Navbar/Nav";
import Footer from "../homepage/Footer";
import Need_Support from "../homepage/Need_Support";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const stats = [
    { icon: <LucideCheckCircle />, value: '4.5', text: 'Google Rating' },
    { icon: <LucideUsers />, value: '20k +', text: 'Satisfied Clients' },
    { icon: <LucideFileText />, value: '20k+', text: 'Returns Processed' },
    { icon: <LucideClock />, value: '17+ Years', text: ' of Professional Experience' }
  ];

  const services = [
    { icon: <LucideWallet />, title: 'Advance Tax Planning', description: 'Plan ahead to manage tax liabilities efficiently and avoid surprises.' },
    { icon: <LucideBarChart />, title: 'Tax Savings on Salary Income', description: 'Unlock deductions and exemptions to optimize your take-home pay.' },
    { icon: <LucideDollarSign />, title: ' Capital Gains Tax Advisory', description: 'Expert guidance to minimize taxes on investment and property income.' },
    { icon: <LucideBell />, title: ' Income Tax Notice Handling', description: 'Receive professional support to respond accurately and confidently to any tax notices' }
  ];

  const steps = [
    { icon: <LucideUserCheck />, title: 'Schedule a Consultation' },
    { icon: <LucideMessageSquare />, title: 'Discuss Your Tax Concerns' },
    { icon: <LucideDollarSign />, title: 'Get Transparent Pricing' },
    { icon: <LucideWallet />, title: 'Make Payment' },
    { icon: <LucidePhone />, title: 'Receive Tailored Tax Advice' }
  ];

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
    <>
    <Nav/>
    <main className="min-h-screen bg-[#f9fcf9]">
      {/* Hero Section */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-40 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-[var(--primary-blue)] p-2 rounded-lg text-white">
                  <LucideWallet size={24} />
                </div>
                <span className="text-[var(--primary-blue)] font-medium">FileYourTax</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Tax Consultancy &<br />Advisory Solutions
              </h1>
              <p className="text-gray-600 mb-6">
               From proactive tax planning and accurate return filing to expert handling of income tax notices and strategic advisory  <b className="text-gray-600">—FileYourTax is your trusted partner at every step.</b>
              </p>
              <p>Request a Free Quote</p>
            </div>
            <div className="contact-form">
              <h3 className="text-gray-700 font-medium mb-4 text-center">
               Enter your details, and our team will get in touch.
              </h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="query"
                  placeholder="Expected fees and services"
                  value={formData.query}
                  onChange={handleChange}
                />
                <button type="submit">
                  Get a Free Quote
                  <LucideArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
Why Choose FileYourTax?
          </h2>
          <p className="text-center text-gray-600 mb-10">Expertise. Efficiency. Excellence.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-card-icon">{stat.icon}</div>
                <div className="font-bold text-xl mb-1">{stat.value}</div>
                <div className="text-sm text-center max-w-[120px]">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-[var(--secondary-color)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Plan Your Taxes Today <span className="text-[var(--primary-blue)]">with Our Tax Consultants</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card-icon">{service.icon}</div>
                <h3 className="text-[var(--primary-blue)] text-base font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
           How It Works
          </h2>
          
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-step-icon">{step.icon}</div>
                <p className="text-sm font-medium">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 md:py-16 bg-[var(--secondary-color)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Why <span className="text-[var(--primary-blue)]">Choose Us!!</span>
          </h2>
          
          <div className="comparison-section">
            <div className="comparison-list no">
              <h3 className="text-xl font-semibold mb-4">Say Goodbye To...</h3>
              <div className="space-y-3">
                {['Tax Errors & Misreporting', 'Last-Minute Rush & Panic', 'Inaccurate Filings', 'Tedious Visits to CA Offices', 
                  'Income Tax Notices', 'Legal Penalties'
                    ].map((item, index) => (
                  <div key={index} className="comparison-item">
                    <LucideCheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="comparison-list yes">
              <h3 className="text-xl font-semibold mb-4">Say Yes To...</h3>
              <div className="space-y-3">
                {['Personalized Tax Strategies', 'Legally Maximized Tax Savings', 
                  'Expert-Driven Compliance', 'End-to-End Tax Solutions',
                  'Peace of Mind', 'Support from 100+ Skilled Tax Professionals'].map((item, index) => (
                  <div key={index} className="comparison-item">
                    <LucideCheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="cta-banner">
            <p className="text-lg font-medium text-center md:text-left">
              We manage things! 100+ tax professionals to find the best tax solutions!
            </p>
            <button className="bg-[var(--primary-blue)] text-white px-6 py-2 rounded-full whitespace-nowrap  transition-colors">
              Get Expert Tax Advice Now
            </button>
          </div>
        </div>
      </section>
    </main>


<div className="section10 py-16 lg:px-24 px-4 text-center">
      <h1 className="section5-heading lg:font-bold md:font-bold font-semibold text-4xl lg:mb-16 mb-10">Frequently Asked Questions (FAQ's)</h1>
      <div className="section9-Faqs">

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(0)}>
          <p className="text-xl font-bold question">1.
                    Why is tax planning essential?
                  </p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[0] &&
          <div className="answer text-left my-3">
            <p className="text-base mb-2">Effective tax planning uses legitimate strategies to reduce tax liabilities, enhance cash flow, and achieve personal or business financial goals. </p>
           
          </div>}


        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(1)}>
          <p className="text-xl font-bold question">2. How does FileYourTax help with income tax notices?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[1] &&
          <div className="answer text-left my-3">
            <p className="text-base mb-3">Our qualified Chartered Accountants provide prompt and accurate assistance to respond to notices, ensuring full compliance and minimizing potential risks.</p>

           
          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(2)}>
          <p className="text-xl font-bold question">3. Why should I pre-book my ITR filing for FY 2024–25?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[2] &&
          <div className="answer text-left my-3">
           
            <p className="text-base">Pre-booking secures an early slot, avoids last-minute delays, and ensures personalized attention to your return filing.</p>
          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(3)}>
          <p className="text-xl font-bold question">4. Whom can I contact for tax planning assistance?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[3] &&
          <div className="answer text-left my-3">
             <p className="text-base mb-3">You can reach out to our dedicated support team or tax experts any time. We’re here to help you with personalized guidance.</p>
          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(4)}>
          <p className="text-xl font-bold question">5. Are there charges for post-filing services?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[4] &&
          <div className="answer text-left my-3 text-base">
            <p className=" mb-3">Yes, charges apply. Tax implications depend on your residential status:</p>

            <ul className="flex flex-col gap-2 mb-3 custom-circle pl-5">
              <li><b>Resident Individuals:</b> Global income is taxable in India.</li>
              <li><b>Non-Resident Individuals (NRIs)</b>: Only income earned or accrued in India is taxable.
Our expert team ensures precise compliance and maximum deductions.
.</li>
            </ul>

          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(5)}>
          <p className="text-xl font-bold question">6. Non-Resident Individuals (NRIs)</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[5] &&
          <div className="answer text-left my-3 text-base">
            <p className=" mb-3">No. You can file and verify your Income Tax Return online from anywhere. If not e-verifying, you can send the signed ITR-V to the CPC office in Bengaluru within 30 days.</p>
          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(6)}>
          <p className="text-xl font-bold question">7. What is the role of a tax advisory consultant?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[6] &&
          <div className="answer text-left my-3 text-base">
            <p className=" mb-3">A tax advisor educates and guides clients on tax laws and compliance, helping them reduce liabilities while staying within legal boundaries.</p>
          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(7)}>
          <p className="text-xl font-bold question">8. How is tax advisory different from tax consulting?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[7] &&
          <div className="answer text-left my-3 text-base">
            <p className=" mb-3"><b>Tax Advisory </b>focuses on legal compliance, documentation, and education.</p>
            <p className=" mb-3" ><b>Tax Consulting</b> encompasses broader financial strategies, including tax planning, structuring, and business optimization.</p>
            
          </div>}

       


      </div>
    </div>


    <Need_Support/>
     <Footer/>
    </>
  );
}