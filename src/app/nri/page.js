"use client";
import React from "react";
import "./nri.css";
import Nav from "../components/Navbar/Nav";
import Footer from "../homepage/Footer";
import Need_Support from "../homepage/Need_Support";

const page = () => {
  return (
  <>
  <Nav/>
      <section className="nriIntroBanner">
  <div className="nriIntroContent">
    <h2>Your Trusted Guide for NRI Tax Compliance</h2>
    <p>
      Filing taxes as an NRI doesn’t have to be complicated. Learn how to stay compliant, claim refunds, and understand 
      your obligations under Indian tax law.
    </p>
    <button className="nriIntroBtn">Get Started</button>
  </div>
</section>

     <div className="nriPage">
      <header className="nriHeader">
        <h1>NRI Taxes & ITR Filing in India</h1>
        <p>Understand your tax obligations, exemptions, and how to file your ITR as an NRI.</p>
      </header>

      <section className="nriSection">
        <h2>Who is an NRI for Tax Purposes?</h2>
        <p>
          An individual is considered a Non-Resident Indian (NRI) if they do not satisfy either of the two conditions 
          of being a resident in India as per the Income Tax Act. NRI status affects how and what income is taxed in India.
        </p>
      </section>

      <section className="nriSection altBg">
        <h2>Income Tax Rules for NRIs</h2>
        <p>
          NRIs are taxed only on income earned or accrued in India. Income earned abroad is not taxable in India. 
          However, income like rent from property in India, capital gains from Indian investments, and salary earned in India is taxable.
        </p>
      </section>

      <section className="nriSection">
        <h2>Do NRIs Need to File ITR in India?</h2>
        <p>
          Yes, NRIs must file an Income Tax Return in India if their total income from Indian sources exceeds ₹2.5 lakhs 
          in a financial year, or if they wish to claim a refund of TDS deducted on Indian income.
        </p>
      </section>

      <section className="nriSection altBg">
        <h2>DTAA: Avoid Double Taxation</h2>
        <p>
          NRIs can benefit from the Double Taxation Avoidance Agreement (DTAA), which ensures they don’t pay tax twice 
          on the same income in both India and their country of residence. Proper documentation is needed to claim this benefit.
        </p>
      </section>

      <section className="nriSection">
        <h2>Investments & Tax Implications</h2>
        <p>
          NRIs can invest in India through NRE/NRO accounts, mutual funds, and real estate. Tax implications vary 
          depending on the type of investment and income earned (e.g., LTCG, STCG, rental income).
        </p>
      </section>

      <section className="nriSection altBg">
        <h2>Filing ITR as an NRI</h2>
        <p>
          NRIs can file ITR online via the e-filing portal using their Aadhaar and PAN. Forms like ITR-2 are usually applicable. 
          It’s important to disclose foreign assets if you qualify as Resident but Not Ordinarily Resident (RNOR).
        </p>
      </section>

      <section className="nriSection">
        <h2>Repatriation & Tax</h2>
        <p>
          Sending money to India (repatriation) through NRE/NRO accounts has specific tax rules. NRE account income is tax-free, 
          but NRO account interest is taxable. TDS applies on NRO income, which can be claimed via ITR.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="faqSection">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className="faqList">
          <div className="faqItem">
            <h4>1. Do NRIs have to pay tax in India?</h4>
            <p>Only income earned or received in India is taxable for NRIs.</p>
          </div>
          <div className="faqItem">
            <h4>2. Is rental income taxable for NRIs?</h4>
            <p>Yes, rental income from property in India is fully taxable.</p>
          </div>
          <div className="faqItem">
            <h4>3. Which ITR form should an NRI use?</h4>
            <p>Generally, NRIs should file ITR-2 if they have income from capital gains or property.</p>
          </div>
          <div className="faqItem">
            <h4>4. Is income in NRE account taxable?</h4>
            <p>No, interest earned in NRE accounts is tax-free.</p>
          </div>
          <div className="faqItem">
            <h4>5. Can NRIs claim deductions under 80C?</h4>
            <p>Yes, NRIs are eligible for most deductions under Section 80C.</p>
          </div>
          <div className="faqItem">
            <h4>6. Do NRIs need an Aadhaar to file ITR?</h4>
            <p>NRIs are exempt from mandatory Aadhaar linking for ITR filing.</p>
          </div>
          <div className="faqItem">
            <h4>7. How can NRIs avoid double taxation?</h4>
            <p>By claiming benefits under the DTAA between India and their country of residence.</p>
          </div>
          <div className="faqItem">
            <h4>8. What is RNOR status?</h4>
            <p>Resident but Not Ordinarily Resident (RNOR) gets partial tax exemption for foreign income.</p>
          </div>
          <div className="faqItem">
            <h4>9. How can NRIs claim TDS refunds?</h4>
            <p>File an ITR in India and claim the TDS amount as a refund.</p>
          </div>
          <div className="faqItem">
            <h4>10. Can NRIs file ITR from abroad?</h4>
            <p>Yes, the ITR can be filed from anywhere using the e-filing portal.</p>
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
