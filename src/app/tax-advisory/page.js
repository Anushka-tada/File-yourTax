"use client";
import React from "react";
import "./taxAdvisory.css";
import Nav from "../components/Navbar/Nav";
import Footer from "../homepage/Footer";
import Need_Support from "../homepage/Need_Support";

  const services = [
    {
      title: "Advance Tax Calculation",
      description: "Get ahead of your taxes with our precise calculations"
    },
    {
      title: "Tax Saving on Salary Income",
      description: "Maximize your savings on your salary"
    },
    {
      title: "Tax Saving on Capital Gains",
      description: "Optimize tax on your investment gains"
    },
    {
      title: "Responding to Income Tax Notices",
      description: "Expert help when you need it most"
    },
    {
      title: "Pre-book ITR Filing for FY 2024–25",
      description: "Secure early filing slots for peace of mind"
    },
    {
      title: "Tailored Tax Regime Selection",
      description: "Choose the best tax regime for you"
    },
    {
      title: "Timely Tax Filing Reminders",
      description: "Stay on top of your deadlines"
    },
    {
      title: "Stay Updated with Tax Laws and Regulations",
      description: "Always be in the know"
    }
  ];

const TaxAdvisoryPage = () => {
  return (
    <>
      <Nav />

      <div className="taxPage">
        {/* Intro Section */}
        <section className="taxIntroBanner">
          <div className="taxIntroContent">
            <h1>Expert Tax Advisory Services</h1>
            <p>
              Simplify your finances and stay compliant with personalized tax guidance for individuals, freelancers,
              and businesses.
            </p>
            <button className="taxIntroBtn">Book Consultation</button>
          </div>
        </section>

        {/* Services Offered */}
        <section className="taxSection">
          <h2>Our Core Tax Advisory Services</h2>
          <div className="taxCardsContainer">
            <div className="taxCard">
              <h4>Income Tax Planning</h4>
              <p>Optimize your savings with expert planning aligned with the latest tax regulations.</p>
            </div>
            <div className="taxCard">
              <h4>Business Tax Filing</h4>
              <p>Streamlined tax filings for small to medium businesses, startups & professionals.</p>
            </div>
            <div className="taxCard">
              <h4>Capital Gains Advisory</h4>
              <p>Navigate real estate, mutual funds, and other investment taxes confidently.</p>
            </div>
            <div className="taxCard">
              <h4>Freelancer & Gig Income</h4>
              <p>Specialized filing & deduction strategies for freelancers and content creators.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="taxSection altBg">
          <h2>Why Choose Our Tax Experts?</h2>
          <ul className="benefitList">
            <li>✔ Personalized consultation by experienced tax professionals</li>
            <li>✔ Up-to-date compliance with latest tax laws & sections</li>
            <li>✔ Affordable pricing for individuals and businesses</li>
            <li>✔ End-to-end support from planning to filing</li>
          </ul>
        </section>

         <div 
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'rgb(238, 247, 249)' }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 
          className="text-3xl font-bold text-center mb-10"
          style={{ color: 'rgb(20, 64, 71)' }}
        >
          Plan Your Taxes Today with Our Tax Consultants
        </h1>
        
        <h2 
          className="text-xl font-semibold mb-8"
          style={{ color: 'rgb(36, 101, 111)' }}
        >
          What Services Can You Get?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm"
              style={{
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
              }}
            >
              <h3 
                className="text-lg font-semibold mb-2"
                style={{ color: 'rgb(36, 101, 111)' }}
              >
                {service.title}
              </h3>
              <p 
                className="text-gray-600"
                style={{ color: 'rgb(36, 101, 111, 0.8)' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

        {/* Advisory Process Section */}
        <section className="taxSection">
          <h2>How Our Advisory Works</h2>
          <ol className="processSteps">
            <li>✅ Schedule a free consultation</li>
            <li>✅ Share financial & income details securely</li>
            <li>✅ Get a customized tax planning report</li>
            <li>✅ Finalize your filing with expert support</li>
          </ol>
        </section>

        {/* Call to Action */}
        <section className="taxCtaSection">
          <h2>Ready to Get Your Taxes Sorted?</h2>
          <p>Book your session with a tax advisor today and make tax season stress-free.</p>
          <button className="taxIntroBtn">Talk to an Expert</button>
        </section>

        {/* FAQ Section */}
        <section className="faqSection">
          <h2>Frequently Asked Questions (FAQs)</h2>
          <div className="faqList">
            <div className="faqItem">
              <h4>1. What is tax advisory service?</h4>
              <p>It is expert guidance on how to plan and file taxes efficiently.</p>
            </div>
            <div className="faqItem">
              <h4>2. Can I get help with business taxes?</h4>
              <p>Yes, we provide complete tax filing and compliance services for businesses.</p>
            </div>
            <div className="faqItem">
              <h4>3. Are tax consultations online?</h4>
              <p>Yes, you can consult with our experts online or over the phone.</p>
            </div>
            <div className="faqItem">
              <h4>4. How do I book a session?</h4>
              <p>Click the “Book Consultation” button and fill out your details.</p>
            </div>
            <div className="faqItem">
              <h4>5. Is my data secure?</h4>
              <p>Absolutely. We use encrypted platforms to protect your data.</p>
            </div>
          </div>
        </section>
      </div>

      <Need_Support />
      <Footer />
    </>
  );
};

export default TaxAdvisoryPage;
