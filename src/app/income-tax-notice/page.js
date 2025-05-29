"use client";
import React from "react";
import "./incomeTaxNotices.css";
import Nav from "../components/Navbar/Nav";
import Footer from "../homepage/Footer";
import Need_Support from "../homepage/Need_Support";

const IncomeTaxNoticesPage = () => {
  return (
    <>
      <Nav />

      <div className="noticesPage">

        <header className="noticeHeader">
          <h1>Understanding Income Tax Notices</h1>
          <p>
            Receiving an Income Tax Notice can be alarming, but knowing what it means and how to respond can save you time and stress.
          </p>
        </header>

        <div className="noticeIntro">
          <p>
            The Income Tax Department sends notices to taxpayers for various reasons ranging from simple clarifications to serious discrepancies.  
            This page guides you through common types of notices, their implications, and how to handle them effectively.
          </p>
        </div>

        {/* Types of Notices */}
        <section className="noticeSection">
          <h2>Types of Income Tax Notices</h2>
          <div className="noticeCards">
            <div className="noticeCard">
              <h3>1. Notice under Section 143(1)</h3>
              <p>
                This is an intimation after processing your tax return. It confirms if your return has been accepted or if there is a discrepancy.
              </p>
            </div>
            <div className="noticeCard">
              <h3>2. Notice under Section 142(1)</h3>
              <p>
                Issued when the tax department requires additional information or clarification regarding your filed return.
              </p>
            </div>
            <div className="noticeCard">
              <h3>3. Notice under Section 148</h3>
              <p>
                Sent when the department believes income has escaped assessment. It reopens assessment for scrutiny.
              </p>
            </div>
            <div className="noticeCard">
              <h3>4. Notice under Section 274</h3>
              <p>
                Notice for penalties due to non-compliance or errors detected in your tax filings.
              </p>
            </div>
          </div>
        </section>

        {/* How to Respond */}
        <section className="noticeSection altBg">
          <h2>How to Respond to Income Tax Notices</h2>
          <ol>
            <li><strong>Read the Notice Carefully:</strong> Understand the exact reason and deadline mentioned.</li>
            <li><strong>Verify Your Records:</strong> Check your income, deductions, and tax payments for any discrepancies.</li>
            <li><strong>Seek Expert Advice:</strong> If unsure, consult a tax professional to prepare a response.</li>
            <li><strong>Respond on Time:</strong> Use the e-filing portal or send a reply as instructed to avoid penalties.</li>
            <li><strong>Keep Records:</strong> Maintain copies of notices and replies for future reference.</li>
          </ol>
        </section>

        {/* Common Questions */}
        <section className="noticeSection">
          <h2>Common Questions About Income Tax Notices</h2>
          <div className="faqList">
            <div className="faqItem">
              <h4>Why did I receive an Income Tax Notice?</h4>
              <p>Usually due to mismatched information, missing details, or random scrutiny selection.</p>
            </div>
            <div className="faqItem">
              <h4>Is receiving a notice always bad?</h4>
              <p>No, some notices are just intimation or routine verifications.</p>
            </div>
            <div className="faqItem">
              <h4>How long do I have to respond?</h4>
              <p>Typically 30 days from the notice date, but this can vary.</p>
            </div>
            <div className="faqItem">
              <h4>Can I file a rectification if there's an error?</h4>
              <p>Yes, under Section 154 you can request correction for mistakes.</p>
            </div>
            <div className="faqItem">
              <h4>What happens if I ignore a notice?</h4>
              <p>Penalties, interest, or legal action may follow, so timely response is crucial.</p>
            </div>
          </div>
        </section>

        {/* Important Tips */}
        <section className="noticeSection altBg">
          <h2>Important Tips</h2>
          <ul>
            <li>Always keep your PAN and Aadhaar updated.</li>
            <li>File your returns accurately and on time.</li>
            <li>Keep all income proofs and receipts organized.</li>
            <li>Check your income tax portal regularly for notices.</li>
            <li>Respond professionally and attach relevant documents when replying.</li>
          </ul>
        </section>

        {/* Final Thoughts */}
        <section className="noticeSection">
          <h2>Final Thoughts</h2>
          <p>
            An Income Tax Notice does not mean guilt. It is often an opportunity to clarify and correct your filings.  
            Staying informed and responsive protects you from unnecessary hassles and penalties.
          </p>
        </section>

      </div>

      <Need_Support />
      <Footer />
    </>
  );
};

export default IncomeTaxNoticesPage;
