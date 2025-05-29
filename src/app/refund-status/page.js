"use client";
import React from "react";
import "./refund.css";
import Nav from "../components/Navbar/Nav";
import Footer from "../homepage/Footer";
import Need_Support from "../homepage/Need_Support";

const page = () => {
  return (
   <>
   <Nav/>
    <div className="refund-page">
      {/* Header */}
      <div className="header">
        <h1 className="main-heading">Track Your Income Tax Refund Status</h1>
        <p className="description">
          Learn everything about income tax refunds, how to check their status, and resolve common issues. FileYourTax simplifies the process for you.
        </p>
      </div>

      {/* CTA */}
      <div className="cta-box">
        <h2 className="section-title">Track Your Refund Instantly</h2>
        <button className="cta-button">Check Refund Status</button>
      </div>

      {/* Expanded FAQ */}
      <div className="faq-wrapper">

        <div className="faq-section">
          <h3 className="faq-question">What is Income Tax Refund?</h3>
          <p className="faq-answer">
            An income tax refund is a reimbursement from the Income Tax Department to a taxpayer for any excess tax payment made during a financial year. This excess payment could arise from advance tax, TDS (Tax Deducted at Source), or self-assessment tax exceeding your actual tax liability.
          </p>
          <p className="faq-answer">
            For example, if your employer deducted more TDS than required based on your final tax computation, the excess gets refunded. Once your income tax return (ITR) is filed and processed, the IT department will initiate the refund to your bank account via direct deposit.
          </p>
          <p className="faq-answer">
            Refunds are only issued after processing and approval by the department, and they can be tracked online using the ITR portal or via FileYourTax’s smart tracking tools.
          </p>
        </div>

        <div className="faq-section">
          <h3 className="faq-question">How to Check Income Tax Refund Status?</h3>
          <p className="faq-answer">
            You can check your refund status in two main ways:
          </p>
          <ul className="faq-list">
            <li><strong>Through the Income Tax e-Filing Portal:</strong> Login at <a href="https://www.incometax.gov.in">incometax.gov.in</a>, go to your dashboard, and select “View Refund Status”.</li>
            <li><strong>Via NSDL Portal:</strong> Visit <a href="https://tin.tin.nsdl.com/oltas/refund-status-pan.html">NSDL Refund Status</a> and enter your PAN and assessment year.</li>
            <li><strong>Through FileYourTax:</strong> We simplify the process — just log in, and your refund status is shown on your dashboard instantly!</li>
          </ul>
        </div>

        <div className="faq-section">
          <h3 className="faq-question">What is the meaning of the status of my refund?</h3>
          <p className="faq-answer">
            The refund status can have multiple meanings:
          </p>
          <ul className="faq-list">
            <li><strong>Refund Processed:</strong> The department has approved your refund and sent it to your bank.</li>
            <li><strong>Refund Failed:</strong> The refund was not credited, possibly due to incorrect bank details.</li>
            <li><strong>Refund Expired:</strong> You didn’t claim the refund within time, and it expired.</li>
            <li><strong>No Demand No Refund:</strong> You neither owe taxes nor are eligible for a refund.</li>
          </ul>
          <p className="faq-answer">
            Always ensure your bank account is pre-validated on the e-Filing portal to avoid failures.
          </p>
        </div>

        <div className="faq-section">
          <h3 className="faq-question">How to Check the Refund Status through FileYourTax?</h3>
          <p className="faq-answer">
            FileYourTax offers a user-friendly dashboard that lets you check refund status without logging into the government portal. Here’s how:
          </p>
          <ol className="faq-list">
            <li>Login to your FileYourTax account.</li>
            <li>Navigate to the dashboard and click “Refund Status”.</li>
            <li>Your current status will be shown, along with past refund records.</li>
          </ol>
          <p className="faq-answer">
            We also send timely notifications and suggestions if your refund fails or is delayed. It’s smart, fast, and secure.
          </p>
        </div>

        <div className="faq-section">
          <h3 className="faq-question">When will I receive my Income Tax Refund?</h3>
          <p className="faq-answer">
            Refunds are generally processed within 20 to 45 days after your return is successfully verified. However, in some cases, it can take longer due to:
          </p>
          <ul className="faq-list">
            <li>Incomplete bank details</li>
            <li>Manual processing requirements</li>
            <li>Mismatch in TDS or income declarations</li>
          </ul>
          <p className="faq-answer">
            If your refund takes more than 60 days, you should raise a grievance on the e-Filing portal or contact the CPC helpline.
          </p>
        </div>

      </div>

      <section className="infoCardSection">
  <h2 className="section-heading">Key Points About Income Tax Refunds</h2>
  <div className="cardGrid">
    <div className="infoCard">
      <h3>Faster Processing</h3>
      <p>
        Most refunds are processed within 20–45 days after ITR verification. Speed up by e-verifying early.
      </p>
    </div>
    <div className="infoCard">
      <h3>Bank Account Must Be Pre-validated</h3>
      <p>
        Ensure your bank account is pre-validated and linked with PAN to receive refunds without delay.
      </p>
    </div>
    <div className="infoCard">
      <h3>Interest on Refund</h3>
      <p>
        If refund is delayed beyond 3 months, interest under Section 244A is paid by the IT Department.
      </p>
    </div>
    <div className="infoCard">
      <h3>Refund Not Received?</h3>
      <p>
        Raise a grievance on the e-Filing portal or contact CPC for assistance if your refund is delayed.
      </p>
    </div>
    <div className="infoCard">
      <h3>Use FileYourTax Tools</h3>
      <p>
        Track refunds, file grievances, and get support — all from your FileYourTax dashboard.
      </p>
    </div>
  </div>
</section>

    </div>
    <Need_Support/>
   <Footer/>
   </>
  );
};

export default page;
