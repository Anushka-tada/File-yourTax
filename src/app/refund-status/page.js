

"use client";
import React from "react";
import { useState } from "react";
import "./refund.css";
import Nav from "../components/Navbar/Nav";
import Footer from "../homepage/Footer";
import Need_Support from "../homepage/Need_Support";

const page = () => {

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
      <Nav />
      <div className="refund-page page">
        {/* Header */}
        <div className="header  pb-20 lg:px-20 md:px-10 px-4 flex flex-wrap xl:justify-between lf:justify-between md:justify-between  justify-center items-center">
          <div className="ca-text">
            <h1 className=" text-4xl font-semibold mb-3">
              <span className="font-bold">Income Tax Refund Status -</span>{" "}
              Check ITR Refund Status For FY 2023-24 (AY 2024-25)
            </h1>
            <p className="mb-2">
              An income tax refund is issued when the tax paid to the government
              exceeds the actual tax due. This overpayment can occur due to
              excessive tax deductions or overpayment of advance tax or
              self-assessment tax. If you find yourself in such a situation, you
              have the right to claim an income tax refund.
            </p>
            <p className="mb-5">
              To check your ITR refund status, you can easily enter the required
              information into the provided form, and FileYourTax will help you
              determine the status of your refund. Remember to file your return
              on time to speed up the process and receive your refund more
              quickly.
            </p>
            <button className="text-white rounded-lg">
              File Income Tax Return
            </button>
          </div>

          <div className="ca-form lg:p-9 md:p-9 p-4 xl:p-9 lg:me-28 shadow-lg rounded-lg flex flex-col items-center">
            <h1 className="text-2xl font-bold">
              Start Your NRI Tax Filing Today
            </h1>
            <div>
              <div className="mt-8">
                <label>Permanent Account Number (PAN)</label>
                <input
                  type="text"
                  placeholder="PPPPP1234P"
                  className="py-3 px-5 mb-3 mt-2 rounded-md"
                  required
                />
              </div>

              <div className="mt-4">
                <lable>Assessment Year to check refund status for</lable>
                <select className="py-3 px-5 mb-3 mt-2 rounded-md" required>
                  <option value="">Select Assessment Year</option>
                  <option value="2025">2025-2026</option>
                  <option value="2024">2024-2025</option>
                  <option value="2023">2023-2024</option>
                  <option value="2022">2022-2023</option>
                  <option value="2021">2021-2022</option>
                  <option value="2020">2020-2021</option>
                  <option value="2019">2019-2020</option>
                  <option value="2018">2018-2019</option>
                  <option value="2017">2017-2018</option>
                  <option value="2016">2016-2017</option>
                </select>
              </div>

              <div className="mt-4">
                <lable>Assessment Year to check refund status for</lable>
                <input
                  type="text"
                  placeholder="email@email.com"
                  className="py-3  px-5 mb-6 mt-2 rounded-md"
                  required
                />
              </div>
            </div>

            <div className="book-btn rounded-lg mt-6 flex gap-3 justify-center w-full py-3">
              <p className="text-white text-xl">Check Refund Status</p>
              <img
                src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg"
                alt=""
              />
            </div>
            <p className="text-center">*Status has been updated just now!</p>
          </div>
        </div>

        {/* What is Income Tax Refund? */}

        <div className="Refund-questions flex flex-col items-center">
          <div className="refund-que mb-5">
            <h3 className="text-3xl font-semibold mb-3">
              What is Income Tax Refund?
            </h3>
            <p className="mb-2">
              An income tax refund refers to the amount of money that a taxpayer
              receives from the government when they have paid more income tax
              during a particular financial year than what they owe. It
              represents a return of excess tax paid by the taxpayer to the tax
              authorities. When individuals or businesses pay their income tax
              through tax deductions at source (TDS), advance tax payments, or
              self-assessment tax, they may end up paying more tax than their
              actual tax liability. This can occur if they have claimed
              excessive deductions or if their tax liability is reduced due to
              exemptions, deductions, or tax credits at the time of filing ITR.
            </p>

            <p>
              In such cases, when the taxpayer files their income tax return and
              the tax authorities assess their tax liability, they calculate the
              actual tax liability based on the income and deductions declared.
              If the assessed tax liability is lower than the tax paid, the
              excess tax amount is refunded to the taxpayer. Remember, you have
              to finish e-filing to get your ITR Refund.
            </p>

            <img
              src="https://emailer.tax2win.in/assets/guides/refund/what-refund-status.jpg"
              className="my-5 image"
            ></img>

            <p>
              For example, if a taxpayer has paid Rs. 15,000 in taxes for the
              financial year 2023-2024, but their actual tax liability is only
              Rs. 10,000, they are entitled to a refund of Rs. 5,000 from the
              Income Tax Department. After filing and verifying the income tax
              return, the department will begin processing the return.
              Typically, it takes about four to five weeks for the refund to be
              credited to the taxpayer's bank account once the return is
              processed.
            </p>
          </div>

          <div className="refund-que mb-5">
            <h3 className="text-3xl font-semibold mb-3">
              How to claim an Income Tax Refund?
            </h3>
            <p className="mb-2">
              To claim an income tax refund, you need to file your income tax
              return (ITR) and disclose all the income and taxes paid
              information with the Income tax department. Once the ITR is
              processed by the Income Tax Department, and if there is any excess
              tax paid, the refund will be issued to you.
            </p>

            <p className="mb-2">
              Once the refund is generated, it will be either directly credited
              to your bank account You can know the income tax refund status
              online through the Income Tax Department's website NSDL or through
              the FileYourTax Income Tax Refund status tool.
            </p>

            <div className="fys flex justify-between">
              <div className="">
                <h1 className="text-2xl font-semibold mb-3 text-white">
                  Missed Filing ITR for Previous FYs?
                </h1>
                <div className="flex gap-5 items-center">
                  <img src="https://emailer.tax2win.in/assets/guides/guide-banner/missed-filing-itr-u.png"></img>
                  <button className="rounded-lg font-semibold">File Now</button>
                </div>
              </div>

              <div className="flex flex-col  gap-3">
                <div className="flex gap-2">
                  <img src="https://emailer.tax2win.in/assets/guides/guide-banner/r1.svg"></img>
                  <p className="text-lg text-white">500+ crore saved already</p>
                </div>
                <div className="flex gap-2">
                  <img src="https://emailer.tax2win.in/assets/guides/guide-banner/r2.svg"></img>
                  <p className="text-lg text-white">Trusted by 1M</p>
                </div>
                <div className="flex gap-2">
                  <img src="https://emailer.tax2win.in/assets/guides/guide-banner/r3.svg"></img>
                  <p className="text-lg text-white">
                    7+ year of industry experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="refund-que mb-5">
            <h3 className="text-3xl font-semibold mb-3">
              How to Check Income Tax Refund Status?
            </h3>
            <h4 className="text-2xl font-semibold mb-3">
              How can you Check Income Tax Refund Status through an E-Filing
              Website?
            </h4>
            <p className="mb-2">
              To check the status of the refund, there is no separate tab for it
              in the new portal, just click on e- file tab and then click on the
              “ View Filed returns” tab and by clicking on view details, you can
              check the status of the current return filed as well as the
              previous returns filed.
            </p>
            <h4 className="text-2xl font-semibold mb-3">
              How can you Check Income Tax Refund Status through TIN NSDL
              Website?
            </h4>
            <p className="mb-2">
              Visit https://tin.tin.nsdl.com/oltas/refund-status-pan.html and
              enter your PAN and select the assessment year you want to check
              tax refund status for.
            </p>
            <p className="mb-2">
              Select the assessment year for which you want to check the refund
              status
            </p>
            <img
              src="https://tax2win.in/assets/img/guide/other-refunds.png"
              className="image"
            ></img>

            <h4 className="text-2xl font-semibold mb-3">
              How to Check the Income Tax Refund Status through FileYourTax?
            </h4>
            <p className="mb-2">
              Enter your PAN, email address, and select the relevant assessment
              year
            </p>
            <p className="mb-2">
              Enter the acknowledgment number if you also want to know the
              receipt / e -verification status of your ITR
            </p>
            <img
              src="https://tax2win.in/assets/img/guide/refundstatus_form.png"
              className="image"
            ></img>
          </div>

          <div className="refund-que mb-5">
            <h3 className="text-3xl font-semibold mb-3">
              What is the meaning of the status of my refund?
            </h3>
            <table>
              <tr>
                <th>Status</th>
                <th>Meaning</th>
              </tr>
              <tr>
                <td>No Result Found</td>
                <td>
                  We were unable to check the filing status and e-verification
                  status for PAN and Acknowledgement numbers entered by you.
                  Kindly verify if the details entered by you are correct.
                </td>
              </tr>

              <tr>
                <td>
                  Refund is already credited to your bank, please contact your
                  bank.
                </td>
                <td>
                  Refund has been processed and credited to your Bank Account If
                  your refund has not been credited, then contact: CMP, State
                  Bank of India Address: Survey No.21 Opposite: Hyderabad
                  Central University, Main Gate, Gachibowli, Hyderabad -500019
                  Email: itro@sbi.co.in Toll-free Number: 1800 425 9760
                </td>
              </tr>

              <tr>
                <td>Refund cheque has already been encashed.</td>
                <td>
                  Your income tax refund process is complete & it has been
                  credited to your Bank Account, and the same has been encashed.
                  If your refund has not been credited, then contact CMP, State
                  Bank of India Address: Survey No.21 Opposite: Hyderabad
                  Central University, Main Gate, Gachibowli, Hyderabad -500019
                  Email: itro@sbi.co.in Toll-free Number: 1800 425 9760
                </td>
              </tr>

              <tr>
                <td>Refund Not Determined</td>
                <td>
                  As per the Income Tax department, no refund is determined
                  after processing of your ITR
                </td>
              </tr>

              <tr>
                <td>
                  Unable to credit refund as the account number provided by you
                  is incorrect.
                </td>
                <td>
                  This means that the account number provided by you was
                  incorrect. You are requested to apply for refund reissue by
                  providing the correct account number to claim your refund.
                </td>
              </tr>

              <tr>
                <td>
                  Defective return u/s 139(9) (or) ITR filed is defective or
                  incomplete
                </td>
                <td>
                  It may be that your return has been treated as a defective
                  Return. For the exact reason, you can check this on your
                  income tax website account.
                </td>
              </tr>

              <tr>
                <td>ITR Processed but need to submit rectification request</td>
                <td>
                  This may occur due to a mismatch in the calculation of the
                  department & ITR filed. For this, you may receive an
                  intimation from the department on your registered email id.
                </td>
              </tr>

              <tr>
                <td>
                  Return submitted. Processing rights transferred to
                  Jurisdictional Assessing Officer. (or) ITR Transferred to
                  Jurisdiction AO
                </td>
                <td>
                  This implies that your return will be processed by your
                  Jurisdictional Assessing Officer (AO). Please contact AO for
                  further details. Need help from an Expert CA? Click here.
                </td>
              </tr>

              <tr>
                <td>Pending for e-verification</td>
                <td>
                  This implies that your return has been submitted successfully
                  but it has not been e-verified either through post or online
                  mode. Further, until and unless you verify your return, it
                  would not be processed by the income tax department. So,
                  please verify within 30 days from the date of filing.
                </td>
              </tr>

              <tr>
                <td>Processed with no demand/refund</td>
                <td>
                  It implies that your return has been processed successfully
                  without any additional tax payable or refund due. Further, you
                  can check the details from the intimation received u/s 143(1)
                  on your mail id.
                </td>
              </tr>

              <tr>
                <td>Processed with demand due</td>
                <td>
                  This implies that your Income has been assessed by the Income
                  tax department from your filed ITR and tax payable amount has
                  been determined upon it. You can check the details from the
                  intimation received u/s 143(1) on your mail id. In that case
                  you need to submit the response through the E-Filing website
                  under “efile tab” - “Response to outstanding tax demand”. Need
                  help from Expert CA? Click here.
                </td>
              </tr>

              <tr>
                <td>Processed with refund due</td>
                <td>
                  This implies that your refund claim has been forwarded to the
                  refund banker for processing. So, wait for some more days and
                  the refund amount will be credited in the bank account
                  mentioned by you at the time of filing the return.
                </td>
              </tr>
            </table>

            <p>
              First, verify your Income Tax Return, then track the status of
              your income tax refund with the department. In case, you have
              still not received your refund then one of the reasons for the ITR
              refund delay could be due to a problem in your bank account or
              address details. In such a situation, you can make a “refund
              reissue” request to the Income Tax Department but only after
              receiving an "Intimation"
            </p>

            <h4 className="text-2xl font-semibold mb-3">
              Simple steps to apply for Refund Reissue:
            </h4>
            <p className="mb-2">
              <b>Step 1:</b> Go to https://www.incometax.gov.in/iec/foportal/
            </p>
            <p className="mb-2">
              <b>Step 2:</b> Log in with your User ID and password.
            </p>
            <p className="mb-2">
              <b>Step 3:</b> After logging in, you will see a dashboard
            </p>

            <img src="https://emailer.tax2win.in/assets/guides/refund/refund-dashboard.jpg" className="image"></img>
            <p className="mb-2">
              <b>Step 4:</b> Click on the services tab and refund reissue
            </p>
            <img src="https://emailer.tax2win.in/assets/guides/refund/refund-reissue.jpg" className="image"></img>
            <p className="mb-2">
              <b>Step 5:</b> When you click on refund reissue, you will see a
              window with a tab refund reissue.
            </p>
            <img src="https://emailer.tax2win.in/assets/guides/refund/refund-remain-unpaid.jpg" className="image" ></img>
            <p className="mb-2">
              <b>Step 6:</b>Once you select the “Refund Reissue” tab visible on
              your screen, you will be redirected to the refund reissue page
              where you need to create a refund reissue request.
            </p>
            <img src="https://emailer.tax2win.in/assets/guides/refund/refund-reissue-request.jpg" className="image"></img>
            <img src="https://emailer.tax2win.in/assets/guides/refund/tab-refund-reissue.jpg" className="image"></img>
            <p className="mb-2">
              <b>Step 7:</b>Select the bank account in which you want your
              refund and click Proceed to move to the verification stage.
            </p>
            <img src="https://emailer.tax2win.in/assets/guides/refund/bank-account.jpg" className="image"></img>
            <p className="mb-2">
              <b>Step 8:</b>For successful submission of a Refund Reissue
              request, users must have EVC. (Users must authenticate the refund
              reissue request through Aadhaar OTP & EVC code)..
            </p>
            <img src="https://emailer.tax2win.in/assets/guides/refund/refund-reissue-request-through-Aadhaar-OTP.jpg" className="image"></img>
            <img src="https://emailer.tax2win.in/assets/guides/refund/successful-submission-done.jpg" className="image"></img>
            <p className="mb-2">
              <b>Step 9:</b>Click on the submit Button
            </p>
            <img src="https://emailer.tax2win.in/assets/guides/refund/refund-click-on-the-submit.jpg" className="image"></img>
            <img src="https://emailer.tax2win.in/assets/guides/refund/refund-status-successful.jpg" className="image"></img>
            <p className="mb-2">
              Once all these steps are done successfully, you can then check the
              TDS refund status on the dashboard.
            </p>
          </div>

          <div  className="refund-que mb-5">
            <h3 className="text-3xl font-semibold mb-3">What are the reasons for the Income Tax Refund delay?</h3>
            <p className="mb-2">
             1. There can be several reasons for a delay in receiving an ITR
              refund. Here are some common factors that can cause delays:
            </p>
            <p className="mb-1 ms-2">
             2. Incorrect or Incomplete Information: If there are errors or
              discrepancies in your tax return, such as incorrect bank account
              details, missing information, or mismatched income statements, it
              can lead to delays in processing your refund.
            </p>
            <p className="mb-1 ms-2">
             3. Manual Processing: In some cases, when tax returns require manual
              review or verification by tax officials, it can result in delays.
              This usually happens when there are complex tax situations,
              high-value refunds, or random selection for scrutiny.
            </p>
            <p className="mb-1 ms-2">
             4. Tax Return Errors: Any mistakes made while filling out your tax
              return, such as calculation errors, incorrect deductions or
              credits claimed, or missing attachments, can lead to processing
              delays.
            </p>
            <p className="mb-1 ms-2">
             5. Taxpayer Identity Verification: Tax authorities may sometimes
              conduct additional verification procedures to ensure the identity
              of the taxpayer, especially in cases of suspected identity theft
              or fraud. These additional checks can cause delays in issuing the
              refund.
            </p>
            <p className="mb-1 ms-2">
            6.  Outstanding Tax Dues: If you have any outstanding tax dues or
              liabilities from previous years, the tax authorities may offset
              your refund against those dues, leading to a delay or partial
              refund.
            </p>
            <p className="mb-1 ms-2">
             7. High Volume of Filings: During peak tax filing periods, when there
              is a high volume of tax returns being processed, the tax
              authorities may experience delays due to the sheer number of
              returns they need to handle.
            </p>
            <p className="mb-1 ms-2">
             8. Change in Tax Laws or Procedures: If there have been recent
              changes in tax laws or procedures, tax authorities may need
              additional time to adapt their systems and processes, resulting in
              delayed refunds.
            </p>
          </div>

          <div  className="refund-que mb-5">
            <h3 className="text-3xl font-semibold mb-3">Will I also get any interest for the delayed refund?</h3>
            <p className="mb-2">
              Yes, the Income Tax department takes the responsibility of
              granting a simple interest @ 0.5 percent per month to compensate
              for the delayed refunds .In the case of refund arising out of TDS
              / TCS / Advance Tax - Interest is calculated @0.5% for every month
              or part of a month for a period starting on 1st April of the
              relevant AY till the date of grant of refund, in case the return
              is filed on time i.e., on or before the due date. However, if the
              return is not filed within the due date the period of interest
              shall be from the date of filing the return to the date of grant
              of refund. In this case, if the refund is less than 10% of the tax
              determined under assessment or in intimation u/s 143(1), then you
              are not entitled to any interest.
            </p>
          </div>

          <div className="refund-que mb-5">
            <h3 className="text-3xl font-semibold mb-3">
              What are the different ways in which refund is issued by the
              Department?
            </h3>
            <p className="mb-2">
              The Refunds are sent by the Income Tax Department in two ways-
            </p>
            <p className="mb-2">
              <b>RTGS/NECS:</b> This is the fastest facility provided by the
              department to get refunds. Under this facility your refund is
              directly credited in your bank account.
            </p>
            <p className="mb-2">
              The Income Tax Department has altered the process of claiming the
              ITR refund a bit. It has been made compulsory by the IT Department
              to pre-validate your bank account in which you wish to receive the
              income tax refund. Pre Validating a bank account alone is not
              enough, the individual also needs to link the PAN with the bank
              account. This has come into force from March 1, 2019. The last
              date for linking Aadhaar and PAN is 30th June 2023.
            </p>
          </div>

          <div className="refund-que mb-5">
            <h3 className="text-3xl font-semibold mb-3">
              If your ITR has already been verified, then the reason for not
              receiving your TDS refund can be:
            </h3>
            <p className="mb-1 ms-2">
              Your ITR status is still under processing.
            </p>
            <p className="mb-1 ms-2">
              You have received a notice/ communication from the IT department
              regarding your filed ITR. For e.g., Defective notice u/s 139(9) or
              notice for proposed adjustments u/s 143(1)(a).
            </p>
            <p className="mb-1 ms-2">
              Your ITR has been processed but the Income Tax Department
              determined: No Refund Due.
            </p>
            <p className="mb-1 ms-2">
              The Return has been processed after determining the refund, but
              the refund could not be credited due to reasons like an incorrect
              bank account number, incorrect postal address etc.
            </p>
            <p className="mb-1 ms-2">
              Your ITR has been processed after adjusting it with outstanding
              demand (if any).
            </p>
          </div>
        </div>

        {/* faq-section */}

      <div className="section10 py-16 lg:px-24 px-4 ">
        <h1 className="section5-heading lg:font-bold md:font-bold font-semibold text-4xl lg:mb-16 mb-10 text-center" >
          Frequently Asked Questions (FAQ's)
        </h1>
        <div className="section9-Faqs">
          <div className="faqOuter">
            <div
            className="Faq w-full flex justify-between py-6"
            onClick={() => toggleAnswer(0)}
          >
            <p className="text-xl font-bold question">
            1. What is the difference between an income tax return and a refund?
            </p>
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
              alt=""
              height="24"
              width="24"
            />
          </div>
          {visibleAnswer[0] && (
            <div className="answer text-left my-3">
              <p className="text-base mb-2">
                The income tax return is furnishing your income and tax details yearly in prescribed ITR forms. Whereas, ITR refund means the amount due or received when taxes paid are greater than taxes actually payable. The refund can only be claimed after the successful filing and verification of the return.
              </p>
            </div>
          )}
          </div>

          <div className="faqOuter">
            <div
            className="Faq w-full flex justify-between py-6"
            onClick={() => toggleAnswer(1)}
          >
            <p className="text-xl font-bold question">
              2. Can I check my ITR refund status?
            </p>
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
              alt=""
              height="24"
              width="24"
            />
          </div>
          {visibleAnswer[1] && (
            <div className="answer text-left my-3">
              <p className="text-base mb-3">
               Taxpayers can view the status of their refund 10 days after the Assessing Officer sends it to the Refund Banker. The FileYourTax“Check Income Tax Refund Status” tool helps you know income tax refund status


              </p>

             
            </div>
          )}
          </div>

        <div className="faqOuter">
            <div
            className="Faq w-full flex justify-between py-6"
            onClick={() => toggleAnswer(2)}
          >
            <p className="text-xl font-bold question">
              3.  Is the income tax refund & TDS refund status the same?
            </p>
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
              alt=""
              height="24"
              width="24"
            />
          </div>
          {visibleAnswer[2] && (
            <div className="answer text-left my-3">
              <p className="text-base">
                Absolutely. NRIs can file ITRs online via the Income Tax
                Department portal or through professional platforms like
                FileyourTax. Our dedicated team simplifies the entire process—no
                matter where you are in the world.
              </p>
            </div>
          )}
        </div>

         <div className="faqOuter">
           <div
            className="Faq w-full flex justify-between py-6"
            onClick={() => toggleAnswer(3)}
          >
            <p className="text-xl font-bold question">
             4.How many days will it take for an income tax refund?
            </p>
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
              alt=""
              height="24"
              width="24"
            />
          </div>
          {visibleAnswer[3] && (
            <div className="answer text-left my-3">
              <ol className="list-disc list-inside pl-5 flex flex-col gap-2 custom-circle">
                <li>	PAN Card.</li>
                <li>	Passport (for identity and travel details)</li>
                <li>	Form 16 / Salary Slips (if applicable)</li>
                <li>	Indian Bank Account Details (for tax refunds)</li>
                <li>	Investment & Property Details</li>
                <li>	Tax Deducted at Source (TDS) Certificates</li>
                <li>	Rent Receipts </li>
                <li>	Foreign Asset Declarations (if applicable)</li>
      
              </ol>
            </div>
          )}
         </div>

         <div className="faqOuter">
           <div
            className="Faq w-full flex justify-between py-6"
            onClick={() => toggleAnswer(4)}
          >
            <p className="text-xl font-bold question">
              5.  Is income tax refund taxable?
            </p>
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
              alt=""
              height="24"
              width="24"
            />
          </div>
          {visibleAnswer[4] && (
            <div className="answer text-left my-3 text-base">
              <p className=" mb-3">No, the income tax refund is not taxable. However, the interest received on this refund is taxable and should be shown as “Income from other sources</p>


            </div>
          )}
         </div>

          <div className="faqOuter" >
            <div
            className="Faq w-full flex justify-between py-6"
            onClick={() => toggleAnswer(5)}
          >
            <p className="text-xl font-bold question">
              6. How to get a refund from the Income Tax Department?
            </p>
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
              alt=""
              height="24"
              width="24"
            />
          </div>
          {visibleAnswer[5] && (
            <div className="answer text-left my-3 text-base">
              <p className=" mb-3">
               No. NRIs can file and e-verify their ITR completely online, from anywhere in the world. Physical signatures 
               or couriered forms are no longer mandatory if e-verification is done within 30 days.
              </p>
            </div>
          )}
          </div>

          <div className="faqOuter">
            <div
            className="Faq w-full flex justify-between py-6"
            onClick={() => toggleAnswer(6)}
          >
            <p className="text-xl font-bold question">
              7.How can I check income tax refund status?
            </p>
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
              alt=""
              height="24"
              width="24"
            />
          </div>
          {visibleAnswer[6] && (
            <div className="answer text-left my-3 text-base">
                <table className="table-1 table-auto border-collapse border border-gray-300 mb-5">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-4 py-2 text-left font-bold">Section</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-bold">Deduction</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 ">80C</td>
                      <td className="border border-gray-300 px-4 py-2">Life insurance premiums, ELSS, children’s tuition fees,
                         principal repayment on home loan</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 ">80D</td>
                      <td className="border border-gray-300 px-4 py-2">Health insurance premiums</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 ">80E</td>
                      <td className="border border-gray-300 px-4 py-2">Interest on education loans</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 ">80TTA</td>
                      <td className="border border-gray-300 px-4 py-2">Interest up to ₹10,000 on savings bank accounts</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 ">80G</td>
                      <td className="border border-gray-300 px-4 py-2">Donations to eligible charities</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 ">House Property</td>
                      <td className="border border-gray-300 px-4 py-2">Deduction on home loan interest and property tax</td>
                    </tr>
                  
                  </tbody>
                </table>
                <p className="mb-3">Not Available for NRIs:</p>
                <ul className="flex flex-col gap-2 mb-3 custom-circle pl-5">
                  <li>	PPF, NSC, Post Office schemes, RGESS</li>
                  <li>	Section 80U, 80DD, 80DDB for disability-related deductions</li>
                </ul>
            </div>
          )}
          </div>

          <div className="faqOuter">
            <div
            className="Faq w-full flex justify-between py-6"
            onClick={() => toggleAnswer(7)}
          >
            <p className="text-xl font-bold question">
            How to check bank details for income tax returns?
            </p>
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
              alt=""
              height="24"
              width="24"
            />
          </div>
          {visibleAnswer[7] && (
            <div className="answer text-left my-3 text-base">
              <p className=" mb-3">
                Rental income from Indian properties is fully taxable in India for NRIs. Standard deductions and a basic exemption of ₹2.5 lakh may apply.
              </p>
             
            </div>
          )}
          </div>

         <div className="faqOuter" >
           <div
            className="Faq w-full flex justify-between py-6"
            onClick={() => toggleAnswer(8)}
          >
            <p className="text-xl font-bold question">
              9. How long does the income tax refund take to get credited to the account?
            </p>
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
              alt=""
              height="24"
              width="24"
            />
          </div>
          {visibleAnswer[8] && (
            <div className="answer text-left my-3 text-base">
              <ol className="list-disc list-inside pl-5 flex flex-col gap-2 mb-3 custom-circle">
                <li>	If held for over 24 months → Long-Term Capital Gains (LTCG) apply </li>
                <li>	LTCG is taxed at 12.5% from 23rd July 2024</li>
                <li>	Indexation benefits and exemptions (e.g., under Section 54) can reduce tax liability</li>
                <li>	For inherited property, date and cost of acquisition by the original owner are considered </li>
              </ol>
            </div>
          )}
         </div>


          <div className="faqOuter" >
            <div
            className="Faq w-full flex justify-between py-6"
            onClick={() => toggleAnswer(9)}
          >
            <p className="text-xl font-bold question">
              10.  Can income tax refund be credited to another account?
            </p>
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
              alt=""
              height="24"
              width="24"
            />
          </div>
          {visibleAnswer[9] && (
            <div className="answer text-left my-3 text-base">
              <p className=" mb-3">If your stay in India is under the prescribed limits (see residential status rules),
                 you’ll qualify as an NRI. Your foreign salary credited abroad is not taxable in India if your status
                  is confirmed as NRI. </p>
             
            </div>
          )}
          </div>

         <div className="faqOuter">
           <div
            className="Faq w-full flex justify-between py-6"
            onClick={() => toggleAnswer(10)}
          >
            <p className="text-xl font-bold question">
              11. Why delay in ITR refund?
            </p>
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
              alt=""
              height="24"
              width="24"
            />
          </div>
          {visibleAnswer[10] && (
            <div className="answer text-left my-3 text-base">
              <p className="mb-3">Foreign income is not taxable for NRIs unless:</p>
              <ol className="list-disc list-inside pl-5 flex flex-col gap-2 mb-3 custom-circle">
                <li>•	It is received directly in India</li>
                <li>•	It arises from a business or profession in India</li>
              </ol>
            </div>
          )}
         </div>

        <div className="faqOuter">
            <div
            className="Faq w-full flex justify-between py-6"
            onClick={() => toggleAnswer(11)}
          >
            <p className="text-xl font-bold question">
              12. For how many previous years can I claim an income tax refund or check my online refund status?
            </p>
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
              alt=""
              height="24"
              width="24"
            />
          </div>
          {visibleAnswer[11] && (
            <div className="answer text-left my-3 text-base">
             <p className="mb-3">The Double Tax Avoidance Agreement (DTAA) prevents income from being taxed twice—once in India and once abroad. To claim relief under DTAA, obtain a Tax Residency Certificate (TRC) from the country of residence</p>
            </div>
          )}
        </div>

          <div className="faqOuter">
            <div
            className="Faq w-full flex justify-between py-6"
            onClick={() => toggleAnswer(12)}
          >
            <p className="text-xl font-bold question">
              13. - How to update Address/Email id/Mobile number for all communications with the Income Tax Department?
            </p>
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
              alt=""
              height="24"
              width="24"
            />
          </div>
          {visibleAnswer[12] && (
            <div className="answer text-left my-3 text-base">
             <p className="mb-3">The same slab rates apply as for resident individuals.
Note: Senior citizen exemptions do not apply to NRIs.
</p>
            </div>
          )}
          </div>

         <div className="faqOuter">
           <div
            className="Faq w-full flex justify-between py-6"
            onClick={() => toggleAnswer(13)}
          >
            <p className="text-xl font-bold question">
              14.Can any other person get my income tax refund?
            </p>
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
              alt=""
              height="24"
              width="24"
            />
          </div>
          {visibleAnswer[13] && (
            <div className="answer text-left my-3 text-base">
              <ol className="list-disc list-inside pl-5 flex flex-col gap-2 mb-3 custom-circle">
                <li>1.	Determine Taxable Income </li>
                <li>2.	Obtain PAN if not already held</li>
                <li>3.	Compute Tax Liability including deductions and exemptions</li>
                <li>4.	Pay Tax Online through challan or during ITR filing</li>
                <li>5.	File Return via ITD portal or with assistance from FileyourTax</li>
                <li>6.	E-Verify Return within 30 days</li>
              </ol>
            </div>
          )}
         </div>
          

        </div>
      </div>
      </div>
      <Need_Support />
      <Footer />
    </>
  );
};

export default page;
