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
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
          <h1 className=" text-5xl font-bold mb-3">
            Tax Filing in India for NRIs – “Seamless & Secure"
          </h1>
          <h2 className="text-3xl font-semibold ">
            Simplifying Compliance, Maximizing Benefits
          </h2>

          <p className="text-xl font-semibold my-4 mb-7">
            If you earn income in India—be it from property, investments, or
            capital gains—our seasoned experts ensure full compliance with
            Indian tax laws while maximizing your tax benefits.
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
                <b>20k +</b>Clients Served
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
                <b>500+ Crore</b> in Tax Savings
              </p>
            </li>
            <li className="flex gap-3 items-center mb-2  font-semibold">
              <img
                src="	https://tax2win.in/assets-new/img/new-theme/pricing-landing/experiance.svg"
                alt=""
              />
              <p className="text-lg">
                <b>7+ Years</b> of Trusted Experience
              </p>
            </li>
          </ul>
        </div>
        <div className="ca-form lg:p-9 md:p-9 p-4 xl:p-9 lg:me-28 shadow-lg rounded-lg flex flex-col items-center">
          <h1 className="text-2xl font-bold">
            Start Your NRI Tax Filing Today
          </h1>
          <div>
            <input
              type="text"
              placeholder="Name"
              className="py-3 px-5 mb-3 mt-8 rounded-md"
            />
            <input
              type="text"
              placeholder="Email"
              className="py-3 px-5 mb-3 rounded-md"
            />
            <input
              type="text"
              placeholder="Mobile"
              className="py-3  px-5 mb-6 rounded-md"
            />
            <textarea
              placeholder="Comment"
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
          Who Should File Taxes as an NRI?
        </h1>
        <p className="text-xl font-semibold my-4 mb-7">
          Any Non-Resident Indian (NRI) who earns income in India—such as from
          salary (for services rendered in India), rent, interest on NRO
          accounts, dividends, or capital gains from property—is required to
          file an Income Tax Return (ITR) in India.
        </p>
      </div>

      {/* nri tax filling */}

      <div className="nriInclude">
        <h1 className=" text-4xl font-bold mb-20 text-center">
          Our Specialized NRI Tax Services
        </h1>
        <div className="flex justify-center gap-4  items-center lg:flex-nowrap flex-wrap">
          <div>
            <img src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/section-img.png"></img>
          </div>
          <div className="includes flex flex-col gap-4 ">
            <div className="flex gap-2">
              <img src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/list_tick.png"></img>
              <p className="font-semibold text-xl">
                Accurate Residential Status Evaluation
              </p>
            </div>
            <div className="flex gap-2">
              <img src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/list_tick.png"></img>
              <p className="font-semibold text-xl">
                Filing ITR for Indian-Sourced Income
              </p>
            </div>
            <div className="flex gap-2">
              <img src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/list_tick.png"></img>
              <p className="font-semibold text-xl">
                DTAA (Double Tax Avoidance Agreement) Claim Support
              </p>
            </div>
            <div className="flex gap-2">
              <img src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/list_tick.png"></img>
              <p className="font-semibold text-xl">
                Relief for Taxes Paid Abroad
              </p>
            </div>
            <div className="flex gap-2">
              <img src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/list_tick.png"></img>
              <p className="font-semibold text-xl">
                {" "}
                Capital Gains Computation
              </p>
            </div>
            <div className="flex gap-2">
              <img src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/list_tick.png"></img>
              <p className="font-semibold text-xl">Claiming TDS Refunds</p>
            </div>
            <div className="flex gap-2">
              <img src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/list_tick.png"></img>
              <p className="font-semibold text-xl">
                Tax Planning for Property Sale/Purchase
              </p>
            </div>
            <div className="flex gap-2">
              <img src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/list_tick.png"></img>
              <p className="font-semibold text-xl">
                Cryptocurrency Taxation Guidance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* why choose */}

      <div className="why-choose text-center">
        <h1 className=" text-4xl font-bold mb-20 text-center">
          Why Choose FileyourTax for Your NRI Taxes?
        </h1>
        <div className="row flex gap-3 lg:flex-nowrap  flex-wrap">
          <div className="choose-point flex flex-col items-center">
            <img
              src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/tax-filling.svg"
              className="mb-3"
            ></img>
            <h3 className=" text-xl font-bold mb-2 text-center">
              {" "}
              Trusted NRI Tax Experts
            </h3>
            <p className="text-lg">
              Seasoned professionals with in-depth knowledge of NRI tax laws.
            </p>
          </div>

          <div className="choose-point flex flex-col items-center">
            <img
              src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/support-icon.svg"
              className="mb-3"
            ></img>
            <h3 className=" text-xl font-bold mb-2 text-center">
              End-to-End Tax Support
            </h3>
            <p className="text-lg">
              From residential status determination to DTAA claims, we manage
              everything.
            </p>
          </div>

          <div className="choose-point flex flex-col items-center">
            <img
              src="https://tax2win.in/assets-new/img/new-theme/pricing-landing/trust-icon.svg"
              className="mb-3"
            ></img>
            <h3 className=" text-xl font-bold mb-2 text-center">
              100% Secure Filing
            </h3>
            <p className="text-lg">
              Authorized by the Income Tax Department with industry-grade data
              protection
            </p>
          </div>

          <div className="choose-point flex flex-col items-center">
            <img
              src="	https://emailer.tax2win.in/assets/reach-icon.svg"
              className="mb-3"
            ></img>
            <h3 className=" text-xl font-bold mb-2 text-center">
              Global Accessibility
            </h3>
            <p className="text-lg">
              No matter where you live, our services are accessible online and
              hassle-free. Let us handle the complexities of Indian taxation
              while you focus on what matters most.
            </p>
          </div>
        </div>
      </div>

      <div className="hearClients">
        <h1 className=" text-4xl font-bold mb-10 text-center">
          {" "}
          What Our Clients Say{" "}
        </h1>
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
        <h1 className="section5-heading lg:font-bold md:font-bold font-semibold text-4xl lg:mb-16 mb-10">
          Frequently Asked Questions (FAQ's)
        </h1>
        <div className="section9-Faqs">
          <div className="faqOuter">
            <div
            className="Faq w-full flex justify-between py-6"
            onClick={() => toggleAnswer(0)}
          >
            <p className="text-xl font-bold question">
              Who Qualifies as an NRI?
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
                An individual is considered a Non-Resident if they do <b>not</b> meet
                the conditions of residency under Indian tax laws. Residential
                status is determined <b>annually</b>based on physical presence in
                India.
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
              2. How Is My Residential Status Determined?
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
                You are considered a <b>Resident in India</b> if:
              </p>

              <ol className="list-disc list-inside pl-5 flex flex-col gap-2 custom-circle">
                <li>
                  {" "}
                  You spend <b>182 days or more</b> in India during the financial year,
                  or
                </li>
                <li>
                  {" "}
                  You spend <b>60 days or more</b> in the financial year and 365 days
                  or more during the 4 preceding years.
                </li>
              </ol>
              <p className="text-base mb-3"><b>Exceptions</b> apply to:</p>

              <ol className="list-disc list-inside pl-5 flex flex-col gap-2 custom-circle">
                <li>
                  {" "}
                  Indian citizens leaving India for employment or as crew of an
                  Indian ship
                </li>
                <li>
                  {" "}
                  Persons of Indian Origin (PIO) visiting India In these cases,
                  only the 182-day condition is applicable
                </li>
              </ol>
              <p>
                If total Indian income exceeds ₹15 lakh, the 60-day threshold is
                increased to 120 days for PIOs or Indian citizens.
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
              3. Can NRIs File Their ITR Online?
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
               <b> FileyourTax</b>. Our dedicated team simplifies the entire process—no
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
             4. Key Documents for NRI Tax Filing
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
              5. Do NRIs Have to Pay Tax in India?
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
              <p className=" mb-3"> Yes </p>

              <ul className="flex flex-col gap-2 mb-3 custom-circle pl-5">
                <li><b>Residents:</b> Taxed on global income
                </li>
                <li><b>Non-Residents (NRIs):</b> Only Indian-sourced income is taxable </li>
              </ul>

            </div>
          )}
         </div>

          <div className="faqOuter" >
            <div
            className="Faq w-full flex justify-between py-6"
            onClick={() => toggleAnswer(5)}
          >
            <p className="text-xl font-bold question">
              6. Is Physical Presence in India Required for Filing?
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
              7.Which Deductions Can NRIs Claim?
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
             How Is Rental Income Taxed for NRIs?
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
                Rental income from Indian properties is <b>fully taxable</b> in India for NRIs. Standard deductions and a basic exemption of ₹2.5 lakh may apply.
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
              9. Selling Property in India as an NRI – What Are the Tax Rules?
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
                <li>	If held for over 24 months → <b>Long-Term Capital Gains (LTCG)</b> apply </li>
                <li>	LTCG is taxed at <b>12.5%</b> from 23rd July 2024</li>
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
              10. I’m Moving Abroad for a Job. Do I Qualify as an NRI?
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
                 you’ll qualify as an NRI. Your foreign salary credited abroad is <b>not taxable</b> in India if your status
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
              11. Is Foreign Income Taxable in India?
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
              <p className="mb-3">Foreign income is <b>not taxable</b> for NRIs unless:</p>
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
              12. What Is DTAA and How Can NRIs Benefit?
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
             <p className="mb-3">The <b>Double Tax Avoidance Agreement (DTAA)</b> prevents income from being taxed twice—once in India and once abroad. To claim relief under DTAA, obtain a <b>Tax Residency Certificate</b> (TRC) from the country of residence</p>
            </div>
          )}
        </div>

          <div className="faqOuter">
            <div
            className="Faq w-full flex justify-between py-6"
            onClick={() => toggleAnswer(12)}
          >
            <p className="text-xl font-bold question">
              13. What Are the Tax Rates for NRIs?
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
<b>Note</b>: Senior citizen exemptions <b>do not</b> apply to NRIs.
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
              14.How Can NRIs Pay Tax in India?
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
                <li>1.	<b>Determine Taxable Income</b> </li>
                <li>2. <b>	Obtain PAN </b>if not already held</li>
                <li>3.	<b>Compute Tax Liability</b> including deductions and exemptions</li>
                <li>4.	<b>Pay Tax Online</b> through challan or during ITR filing</li>
                <li>5.	<b>File Return</b> via ITD portal or with assistance from <b>FileyourTax</b></li>
                <li>6.	<b>E-Verify Return</b> within 30 days</li>
              </ol>
            </div>
          )}
         </div>
          

        </div>
      </div>

      <div className="flex justify-between end-price ">
        <p className="font-semibold text-xl">Expert-Assisted NRI Tax Filing</p>
        <div className="flex gap-2 items-center">
          <p className=" line-through text-gray-600 ">₹8900</p>
          <p className="font-bold text-4xl ">₹8000</p>
          <p>+ taxes</p>
          <button className="text-white font-bold text-lg rounded-full" >  Buy Now </button>
        </div>
      </div>

      <Need_Support />
      <Footer />
    </>
  );
};

export default page;
