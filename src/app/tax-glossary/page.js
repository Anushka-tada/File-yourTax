// src/app/glossary/page.js

import React from "react";
import Nav from "../components/Navbar/Nav";
import Footer from "../homepage/Footer";
import Need_Support from "../homepage/Need_Support";

const glossary = [
  {
    term: "Income Tax",
    definition: "Tax imposed by the government on the income earned by individuals and businesses.",
  },
  {
    term: "GST (Goods and Services Tax)",
    definition: "An indirect tax levied on the supply of goods and services.",
  },
  {
    term: "TDS (Tax Deducted at Source)",
    definition:
      "Tax deducted at the point of income payment, such as salary or interest.",
  },
  {
    term: "PAN (Permanent Account Number)",
    definition:
      "A 10-character alphanumeric identifier issued by the Income Tax Department.",
  },
  {
    term: "ITR (Income Tax Return)",
    definition:
      "A form filed to report income, expenses, and taxes paid to the Income Tax Department.",
  },
  {
    term: "Exemption",
    definition: "Portion of income that is not taxable under certain sections.",
  },
  {
    term: "Deduction",
    definition: "Amount subtracted from gross income for eligible expenses or investments.",
  },
  {
    term: "Refund",
    definition:
      "Amount returned by the tax department when excess tax has been paid.",
  },
  {
    term: "Assessment Year",
    definition:
      "The year following the financial year in which income is assessed and taxed.",
  },
  {
    term: "Financial Year",
    definition: "The year in which income is earned, typically from April 1 to March 31.",
  },
  {
    term: "Advance Tax",
    definition:
      "Tax paid in advance instead of a lump sum at year-end, typically in installments.",
  },
  {
    term: "Capital Gains",
    definition:
      "Profit earned on the sale of capital assets like property, stocks, or bonds.",
  },
  {
    term: "Form 16",
    definition:
      "A certificate issued by an employer that provides details of salary and TDS.",
  },
  {
    term: "Self-Assessment Tax",
    definition:
      "Remaining tax paid by the taxpayer after TDS and advance tax have been deducted.",
  },
  {
    term: "Rebate",
    definition:
      "A reduction in the total tax payable, usually allowed under special provisions.",
  },
];

export default function page() {
  return (
   
 <>
 <Nav/>
 <div className="page">
    <div className="max-w-5xl mx-auto px-4 py-10 ">
      <h1 className="text-4xl font-bold text-center tax-glossary-h mb-8">
        🧾 Tax Glossary
      </h1>
      <p className="text-gray-700 text-center mb-12 text-lg">
        Understand key terms related to taxation in a simple and concise way.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {glossary.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {item.term}
            </h2>
            <p className="text-gray-600">{item.definition}</p>
          </div>
        ))}
      </div>
    </div>
<Need_Support/>
   <Footer/>
   </div>
 </>
  );
}
