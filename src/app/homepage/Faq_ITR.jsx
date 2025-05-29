"use client";

import React, { useState } from "react";
import "./faq_iter.css";

const Faq_ITR = () => {
  const [visibleAnswer, setVisibleAnswer] = useState();

  const toggleAnswer = (index) => {
    if (visibleAnswer === index) {
      setVisibleAnswer(null); // Hide the answer if it's already visible
    } else {
      setVisibleAnswer(index); // Show the answer
    }
  };

  return (
    <div className="section10 py-16 lg:px-24 px-4 text-center">
      <h1 className="section5-heading lg:font-bold md:font-bold font-semibold text-4xl lg:mb-16 mb-10">FAQ's on ITR</h1>
      <div className="section9-Faqs">

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(0)}>
          <p className="text-xl font-bold question">1. What is e-Filing of income tax returns?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer === 0 &&
          <div className="answer text-left my-3">
            <p className="text-base mb-2">E-filing of Income Tax Returns refers to the process of filing tax returns online. As mandated by the
              Income Tax Department, individuals are required to file their returns electronically, with the exception of super senior citizens
              (aged 80 years and above) using Form 1 or Form 4, who are permitted to file their returns offline in paper format.</p>
            <p className="text-base">E-filing is a quick and convenient process that can be completed from the comfort of your home or office
              in just four minutes using <b>FileYourTax</b>. Alternatively, taxpayers may also file their returns directly on the <b>Income Tax e-filing
              portal</b> .</p>
          </div>}


        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(1)}>
          <p className="text-xl font-bold question">2. Who is Required to File an Income Tax Return?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer === 1 &&
          <div className="answer text-left my-3">
            <p className="text-base mb-3">Individuals, including Non-Resident Indians (NRIs), must file an Income Tax Return (ITR) if their <b>Gross Total Income (GTI)</b> exceeds the <b>basic exemption limit</b>.</p>

            <ol className="list-disc list-inside pl-5 flex flex-col gap-2 custom-circle">
              <li>Under the <b>old tax regime</b>, the basic exemption limit is <b>₹2.5 lakh</b>.</li>
              <li>Under the <b>new tax regime</b>, the basic exemption limit is <b>₹3 lakh</b>.</li>
              <li>For <b>senior citizens</b> (aged 60–79 years), the exemption limit is <b>₹3 lakh</b>.</li>
              <li>For <b> super senior citizens</b> (aged 80 years and above), the exemption limit is <b>₹5 lakh</b>.</li>
            </ol>
            <p className="text-base mb-3">Additionally, individuals must file an ITR even if their income is below the exemption limit if they meet any of the following criteria:</p>

            <ol className="list-disc list-inside pl-5 flex flex-col gap-2 custom-circle">
              <li>Deposited an amount or aggregate exceeding <b>₹1 crore</b> in one or more current accounts with a bank or cooperative bank.</li>
              <li>Incurred an aggregate expenditure exceeding <b>₹2 lakh</b> on foreign travel for oneself or any other person.</li>
              <li>Paid <b>₹1 lakh or more</b> as an electricity bill.</li>
              <li>Business sales turnover exceeds <b>₹60 lakh</b> in the financial year.</li>
              <li>Professional gross receipts exceed <b>₹10 lakh</b> in the financial year.</li>
              <li>Total <b>TDS or TCS exceeds ₹25,000</b> (₹50,000 for senior citizens).</li>
              <li>Deposited <b>₹50 lakh or more</b> in one or more savings accounts.</li>
            </ol>
          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(2)}>
          <p className="text-xl font-bold question">3. Where can I file an Income Tax Return in India?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer === 2 &&
          <div className="answer text-left my-3">
            <p className="text-base mb-2">Taxpayers can file their ITR electronically through:</p>
            <ol className="list-disc list-inside pl-5 flex flex-col gap-2 custom-circle">
              <li><b>The Income Tax e-Filing portal:</b> <a href="https://www.incometax.gov.in/iec/foportal/" className=" text-primary ">https://www.incometax.gov.in/iec/foportal/</a></li>
              <li><b>FileYourTax </b>e-filing platform, which allows users to file their returns efficiently in under four minutes.</li>
            </ol>
            <p className="text-base">The Central Board of Direct Taxes (CBDT) has officially extended the due date for filing Income Tax
Returns (ITRs) for the Assessment Year (AY) <b>2025–26</b>. The original deadline of 31st July 2025 has
been extended to 15th September 2025 for taxpayers whose accounts are not required to be
audited</p>
          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(3)}>
          <p className="text-xl font-bold question">4. What Happens If I Miss the Due Date for Filing My ITR?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer === 3 &&
          <div className="answer text-left my-3">
            <p className="text-base mb-2">If a taxpayer fails to file their ITR before the due date, they may still submit a <b>belated return</b> by
              <b>31st December of the assessment year</b>, unless extended by the government. However, a belated return is subject to penalties under
              <b>Section 234F</b>, depending on the delay.</p>
          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(4)}>
          <p className="text-xl font-bold question">5. How to File an Income Tax Return Online?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer === 4 &&
          <div className="answer text-left my-3 text-base">
            <p className=" mb-3">Filing an ITR online is a straightforward process and can be done in minutes through File Your Tax:</p>

            <ul className="flex flex-col gap-2 mb-3 custom-circle pl-5">
              <li>1.	Visit <b>File Your Tax</b> and click on <b>“File ITR Now.”</b></li>
              <li>2.	Select your <b>source of income</b> and proceed.</li>
              <li>3.	Upload <b>Form 16</b> if you are a salaried individual (or proceed without it).</li>
              <li>4.	Enter relevant details such as <b>Financial Year, PAN, Aadhaar, deductions, and bank details.</b></li>
              <li>5.	Review your tax computation and click <b>“File My ITR.”</b></li>
            </ul>

            <p className=" mb-3">For professional assistance, expert <b>CAs at File Your Tax</b> can ensure accuracy, maximize deductions, and optimize tax refunds.</p>

          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(5)}>
          <p className="text-xl font-bold question">6. How to e-File ITR with Form 16?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer === 5 &&
          <div className="answer text-left my-3 text-base">
            <p className=" mb-3">6. To file an ITR using Form 16, follow these steps:</p>

            <ul className="flex flex-col gap-2 mb-3 custom-circle pl-5">
              <li>1.	Select <b>"File It Yourself"</b> on <b>File Your Tax</b> and click <b>“File ITR Now.”</b></li>
              <li>2.	Upload <b>Form 16</b>, and the system will automatically extract the relevant details.</li>
              <li>3.	Verify and modify the tax computation if required.</li>
              <li>4.	Click <b>"File My Return"</b> to complete the process.</li>
            </ul>
          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(6)}>
          <p className="text-xl font-bold question">7. Can I e-File an ITR Without Form 16?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer === 6 &&
          <div className="answer text-left my-3 text-base">
            <p className=" mb-3">Yes, an ITR can be e-filed without Form 16. Salary slips and essential documents such as <b>Form 26AS, AIS,
            and TIS</b> provide the necessary income and deduction details for filing a return.</p>
          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(7)}>
          <p className="text-xl font-bold question">8. What Are the Penalties for Not Filing an ITR?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer === 7 &&
          <div className="answer text-left my-3 text-base">
            <p className=" mb-3">Failure to file an ITR within the due date may result in penalties and interest, including:</p>
            <ol className="flex flex-col gap-1 mb-3 list-decimal pl-3 custom-circle" >
              <li><b>Late Filing Fee</b>: Up to <b>₹10,000</b>, depending on the delay.</li>
              <ol className="flex flex-col gap-1 mb-3 list-decimal pl-3 custom-circle" >
                <li>o	₹5,000 for belated ITRs filed after the due date but before <b>31st December</b>.</li>
                <li>o	₹10,000 for returns filed after <b>31st December</b>.</li>
              </ol>
              <li><b>Interest on Outstanding Tax:</b> Charged at <b>1% per month</b> on the unpaid tax amount from the due date until payment.</li>
              <li><b>Loss of Tax Benefits:</b> Late filers may lose benefits such as <b>carry-forward of losses and TDS refunds</b>.</li>
              <li><b>Prosecution:</b> Willful failure to file an ITR may result in prosecution under <b>Section 276CC</b>, leading to fines and imprisonment.</li>
            </ol>
          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(8)}>
          <p className="text-xl font-bold question">9. What Are the Next Steps After e-Filing an ITR?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer === 8 &&
          <div className="answer text-left my-3 text-base">
            <p className=" mb-3">Once an ITR is filed, taxpayers must:</p>
            <ol className="list-disc list-inside pl-5 flex flex-col gap-2 mb-3 custom-circle">
              <li>Check their <b>email inbox</b> for confirmation and the <b>ITR-V acknowledgment.</b></li>
              <li><b>Verify the ITR within 30 days</b>, as processing only begins after verification. Unverified returns will be considered invalid.</li>
              <li>Carefully <b>review the ITR-V </b>for accuracy.</li>
              <li><b>Track the status of any tax refund</b> to stay updated on processing timelines.</li>
            </ol>

          </div>}

          <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(9)}>
          <p className="text-xl font-bold question">10. Important Note on ITR Verification</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer === 9&&
          <div className="answer text-left my-3 text-base">
            <p className=" mb-3">ITR verification is a mandatory step for processing. <b>The time limit for verification is now 30
            days</b> (reduced from 120 days for returns filed on or after <b> 1st August 2022</b> ).</p>
               <p className=" mb-3">Failure to verify an ITR within this period will result in the 
                return being <b>invalid,</b> meaning it will be treated as if no return was filed.</p>
           
          </div>}


      </div>
    </div>
  );
};

export default Faq_ITR;
