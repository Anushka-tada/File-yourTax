"use client";
import React from "react";
import "./capitalGain.css";
import Nav from "../components/Navbar/Nav";
import Footer from "../homepage/Footer";
import Need_Support from "../homepage/Need_Support";
import WhyChooseUs from "./WhyChooseUs";

const CapitalGainTaxFiling = () => {
  return (
    <>
      <Nav />

      <div className="capitalGainPage">
        {/* Header */}
        <header className="cgHeader">
          <h1>Capital Gain Tax Filing</h1>
          <p>Everything you need to know about filing capital gains tax in India.</p>
        </header>

        {/* Understanding Capital Gains */}
        <section className="cgSection">
          <h2>What Are Capital Gains?</h2>
          <p>
            Capital gains arise when you sell a capital asset such as property, stocks, or mutual funds at a profit. 
            These gains are taxable based on the holding period and type of asset.
          </p>
        </section>

        {/* Types of Capital Gains */}
        <section className="cgSection altBg">
          <h2>Types of Capital Gains</h2>
          <ul>
            <li><strong>Short-Term Capital Gains (STCG):</strong> Gains on assets held for less than 36 months (or 12 months for equities).</li>
            <li><strong>Long-Term Capital Gains (LTCG):</strong> Gains on assets held longer than the specified period.</li>
          </ul>
        </section>

        {/* Tax Rates on Capital Gains */}
        <section className="cgSection">
          <h2>Tax Rates on Capital Gains</h2>
          <p>
            STCG on equities are taxed at 15%, while LTCG exceeding ₹1 lakh from equities are taxed at 10%. Other asset classes have different tax slabs.
          </p>
        </section>

        {/* Exemptions & Deductions */}
        <section className="cgSection altBg">
          <h2>Exemptions and Deductions</h2>
          <p>
            Investments under Section 54, 54EC, and 54F provide exemptions on capital gains from sale of residential property and other assets.
          </p>
        </section>

        {/* Filing Process */}
        <section className="cgSection">
          <h2>How to File Capital Gains Tax</h2>
          <p>
            Include details of your capital gains in your Income Tax Return (usually ITR-2 or ITR-3). Ensure you report all transactions correctly and claim exemptions if applicable.
          </p>
        </section>

        {/* Tips to Save Tax */}
        <section className="cgSection altBg">
          <h2>Tips to Save on Capital Gains Tax</h2>
          <ul>
            <li>Plan the sale timing to optimize holding period.</li>
            <li>Invest in specified bonds to claim exemptions.</li>
            <li>Maintain accurate records of purchase and sale.</li>
          </ul>
        </section>
        <WhyChooseUs/>

        {/* FAQ Section */}
        <section className="faqSection">
          <h2>Frequently Asked Questions (FAQs)</h2>
          <div className="faqList">
            <div className="faqItem">
              <h4>1. What is the holding period for LTCG on property?</h4>
              <p>For property, it is 24 months to qualify as long-term capital gain.</p>
            </div>
            <div className="faqItem">
              <h4>2. Are capital gains from stocks taxable?</h4>
              <p>Yes, both short-term and long-term gains from stocks are taxable with different rates.</p>
            </div>
            <div className="faqItem">
              <h4>3. Can I claim exemption on capital gains?</h4>
              <p>Yes, under certain conditions like investing in specified bonds or residential property.</p>
            </div>
            <div className="faqItem">
              <h4>4. Which ITR form is used for capital gains?</h4>
              <p>ITR-2 or ITR-3 depending on your income sources.</p>
            </div>
            <div className="faqItem">
              <h4>5. Is advance tax applicable on capital gains?</h4>
              <p>Yes, if your tax liability exceeds ₹10,000, advance tax payments may be required.</p>
            </div>
          </div>
        </section>
      </div>

      <Need_Support />
      <Footer />
    </>
  );
};

export default CapitalGainTaxFiling;
