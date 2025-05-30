"use client";
import React from "react";
import "./nri.css";
import { useState } from "react";
import Nav from "../components/Navbar/Nav";
import Footer from "../homepage/Footer";
import Need_Support from "../homepage/Need_Support";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const page = () => {
  const Testimonial = [
    {
      title: "Sagar Tosniwal",
      shortDesc: "Clover Infotech Pvt Ltd, Maharashtra ",
      description:
        "I am happy with the service offered by Team Tax2win. I have also recommended tax2Win to many of my friends.",
    },
    {
      title: "Vinay Bakshi ",
      shortDesc: "Australia",
      description:
        "A huge thanks and appreciate all the services provided by you. You were really really supportive in filling my tax. I had e-verified return. can you please check if that is properly done and we are all good.",
    },
    {
      title: "Utsav Sarkar ",
      shortDesc: "Tracxn Technologies Private Ltd, Bangalore",
      description:
        "Very good service, & will recommend my friends to use your services, Hope to see you again with the same efforts.",
    },
    {
      title: "Utsav Sarkar ",
      shortDesc: "Tracxn Technologies Private Ltd, Bangalore",
      description:
        "Very good service, & will recommend my friends to use your services, Hope to see you again with the same efforts.",
    },
  ];

  var settings = {
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,    
  autoplaySpeed: 3000, 
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

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

 <div className="ca-consultants py-20 lg:px-20 md:px-10 px-4 flex flex-wrap xl:justify-between lf:justify-between md:justify-between  justify-center items-center">
        <div className="ca-text flex flex-col mb-6 ">
          <h1 className=" text-6xl font-bold mb-3">
            Filing Taxes in India as an NRI?{" "}
          </h1>
          <h2 className="text-4xl font-semibold ">
            Let Us Make It Simple for You!
          </h2>

          <p className="text-xl font-semibold my-4 mb-7">
            Whether you're earning income from property, investments, or capital
            gains in India, our expert team ensures you stay compliant with
            Indian tax laws while optimizing your tax benefits
          </p>

          <ul className="flex gap-3 ">
            <li className="flex gap-3 items-center mb-2 font-semibold">
              <img
                src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/rating.svg"
                alt=""
              />
              <p className="text-lg">
                <b>4.8</b> Google Rating
              </p>
            </li>
            <li className="flex gap-3 items-center mb-2  font-semibold">
              <img
                src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/satisfaction.svg"
                alt=""
              />
              <p className="text-lg">
                <b>1+ Million</b> satisfied customers
              </p>
            </li>
          </ul>
          <ul className="flex gap-3">
            <li className="flex gap-3 items-center mb-2 font-semibold">
              <img
                src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/already-saved.svg"
                alt=""
              />
              <p className="text-lg">
                <b>500+ Crore</b> Saved Already!
              </p>
            </li>
            <li className="flex gap-3 items-center mb-2  font-semibold">
              <img
                src="	https://tax2win.in/assets-new/img/new-theme/pricing-landing/experiance.svg"
                alt=""
              />
              <p className="text-lg">
                <b>7+ Years</b> of Industry Experience
              </p>
            </li>
          </ul>
        </div>
        <div className="ca-form lg:p-9 md:p-9 p-4 xl:p-9 lg:me-28 shadow-lg rounded-lg flex flex-col items-center">
          <h1 className="text-2xl font-bold">Start Your NRI Tax Journey</h1>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="py-3 px-5 mb-3 mt-8 rounded-md"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="py-3 px-5 mb-3 rounded-md"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="py-3  px-5 mb-6 rounded-md"
            />
            <textarea
              placeholder="Message"
              rows={2}
              className="py-3 px-5 mb-6 rounded-md"
            />
          </div>

          <div className="book-btn rounded-lg mt-6 flex gap-3 justify-center w-full py-3">
            <p className="text-white text-xl">Connect with Tax Experts</p>
            <img
              src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* who needs */}

      <div className="whoNeed text-center">
        <h1 className=" text-4xl font-bold mb-3">
          Who Needs to File NRI Taxes?
        </h1>
        <p className="text-xl font-semibold my-4 mb-7">
          NRIs earning income from India, such as income from salary ( if
          services are rendered in India), rental income, interest on NRO
          accounts, dividend income from Indian companies, capital gains from
          sale of property situated in India and other Indian Income, need to
          file ITR.
        </p>
      </div>

      {/* nri tax filling */}

      <div className="nriInclude">
        <h1 className=" text-4xl font-bold mb-20 text-center">
          Our NRI Tax Filing Services Include
        </h1>
        <div className="flex justify-center gap-4  items-center">
          <div>
            <img src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/section-img.png"></img>
          </div>
          <div className="includes flex flex-col gap-4 ">
            <div className="flex gap-2">
              <img src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/list_tick.png"></img>
              <p className="font-semibold text-xl">
                Residential Status Determination
              </p>
            </div>
            <div className="flex gap-2">
              <img src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/list_tick.png"></img>
              <p className="font-semibold text-xl">
                Income Tax Return Filing (ITR) for Indian Income
              </p>
            </div>
            <div className="flex gap-2">
              <img src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/list_tick.png"></img>
              <p className="font-semibold text-xl">
                DTAA (Double Tax Avoidance Agreement) Benefits
              </p>
            </div>
            <div className="flex gap-2">
              <img src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/list_tick.png"></img>
              <p className="font-semibold text-xl">
                Relief on Foreign Income Taxed in India
              </p>
            </div>
            <div className="flex gap-2">
              <img src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/list_tick.png"></img>
              <p className="font-semibold text-xl">Capital Gains Calculation</p>
            </div>
            <div className="flex gap-2">
              <img src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/list_tick.png"></img>
              <p className="font-semibold text-xl">
                Claiming Refunds of TDS deducted in India
              </p>
            </div>
            <div className="flex gap-2">
              <img src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/list_tick.png"></img>
              <p className="font-semibold text-xl">
                Tax Planning for Property Sales or Purchases
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* why choose */}

      <div className="why-choose text-center">
        <h1 className=" text-4xl font-bold mb-20 text-center">
          Why Choose Tax2win for NRI Tax Filing?
        </h1>
        <div className="row flex gap-3">
          <div className="choose-point flex flex-col items-center">
            <img
              src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/tax-filling.svg"
              className="mb-3"
            ></img>
            <h3 className=" text-xl font-bold mb-2 text-center">
              {" "}
              Dedicated NRI Experts{" "}
            </h3>
            <p className="text-lg">
              Specialized tax consultants with deep knowledge of NRI taxation
              laws.
            </p>
          </div>

          <div className="choose-point flex flex-col items-center">
            <img
              src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/support-icon.svg"
              className="mb-3"
            ></img>
            <h3 className=" text-xl font-bold mb-2 text-center">
              End-to-End Support{" "}
            </h3>
            <p className="text-lg">
              From determining residential status to claiming DTAA benefits, we
              handle it all.
            </p>
          </div>

          <div className="choose-point flex flex-col items-center">
            <img
              src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/trust-icon.svg"
              className="mb-3"
            ></img>
            <h3 className=" text-xl font-bold mb-2 text-center">
              Safe & Secure Filing
            </h3>
            <p className="text-lg">
              Authorized by ITD and compliant with the highest data security
              standards.
            </p>
          </div>

          <div className="choose-point flex flex-col items-center">
            <img
              src="	https://emailer.tax2win.in/assets/reach-icon.svg"
              className="mb-3"
            ></img>
            <h3 className=" text-xl font-bold mb-2 text-center">
              Global Reach
            </h3>
            <p className="text-lg">
              Accessible from anywhere in the world, we ensure your tax
              obligations are met on time.
            </p>
          </div>
        </div>
      </div>

      <div className="hearClients">
  <h1 className=" text-4xl font-bold mb-10 text-center" >  Hear From Our Clients </h1>
  <div className=" flex flex-col gap-5">
    <Slider {...settings}>
      {Testimonial.map((point, index) => (
        <div key={index} className="review m-5">
          <h3 className="text-xl font-semibold  mb-1">{point.title}</h3>
          <img src="https://tax2win.in/assets-new/img/testimonials/five-star.png"></img>
          <p className="text-sm text-secondary font-medium mb-2">
            {point.shortDesc}
          </p>
          <p className="">{point.description}</p>
        </div>
      ))}
    </Slider>
  </div>
</div>

     

    {/* faq-section */}


    <div className="section10 py-16 lg:px-24 px-4 text-center">
      <h1 className="section5-heading lg:font-bold md:font-bold font-semibold text-4xl lg:mb-16 mb-10">Frequently Asked Questions (FAQ's)</h1>
      <div className="section9-Faqs">

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(0)}>
          <p className="text-xl font-bold question">1.
                    Who is a Non-Resident of India (NRI)?
                  </p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[0] &&
          <div className="answer text-left my-3">
            <p className="text-base mb-2">"Non-Resident" is a person who is not Resident in India. The residential status of an
               individual in a given year determines whether the individual is a Resident or Non-Resident for that given year.Thus,
                the residential status of an individual needs to be determined every year. For more details, </p>
           
          </div>}


        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(1)}>
          <p className="text-xl font-bold question">2.How to determine my Residential Status in India?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[1] &&
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
          <p className="text-xl font-bold question">3. How to file income tax return for NRI?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[2] &&
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
          <p className="text-xl font-bold question">4. What are the Documents Required for NRI Tax Filing?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[3] &&
          <div className="answer text-left my-3">
            <p className="text-base mb-2">If a taxpayer fails to file their ITR before the due date, they may still submit a <b>belated return</b> by
              <b>31st December of the assessment year</b>, unless extended by the government. However, a belated return is subject to penalties under
              <b>Section 234F</b>, depending on the delay.</p>
          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(4)}>
          <p className="text-xl font-bold question">5. Do NRI’s have to pay taxes in India?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[4] &&
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
          <p className="text-xl font-bold question">6. Should I be present in India at the time of filing of my ITR?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[5] &&
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
          <p className="text-xl font-bold question">7.What are the deductions which are allowed and not allowed to NRI?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[6] &&
          <div className="answer text-left my-3 text-base">
            <p className=" mb-3">Yes, an ITR can be e-filed without Form 16. Salary slips and essential documents such as <b>Form 26AS, AIS,
            and TIS</b> provide the necessary income and deduction details for filing a return.</p>
          </div>}

        <div className="Faq w-full flex justify-between py-6" onClick={() => toggleAnswer(7)}>
          <p className="text-xl font-bold question">8.What will be taxability of rental income from property situated in India ?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[7] &&
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
          <p className="text-xl font-bold question">9. I have a property in India that I want to sell. What are the tax implications on the same if I am an NRI?</p>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt="" height="24" width="24" />
        </div>
        {visibleAnswer[8] &&
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
        {visibleAnswer[9]&&
          <div className="answer text-left my-3 text-base">
            <p className=" mb-3">ITR verification is a mandatory step for processing. <b>The time limit for verification is now 30
            days</b> (reduced from 120 days for returns filed on or after <b> 1st August 2022</b> ).</p>
               <p className=" mb-3">Failure to verify an ITR within this period will result in the 
                return being <b>invalid,</b> meaning it will be treated as if no return was filed.</p>
           
          </div>}


      </div>
    </div>

      <Need_Support />
      <Footer />
    </>
  );
};

export default page;
