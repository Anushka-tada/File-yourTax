import React from "react";
import Nav from "../components/Navbar/Nav";
import Footer from "../homepage/Footer";
import "./about.css";
import TestimonialCarousel from "./TestimonialCarousel";
import Need_Support from "../homepage/Need_Support";

const page = () => {
  return (
    <>
      <Nav />
      <div className="about-page page ">
        {/* hero-section */}

        <div className="hero-section flex flex-col justify-center items-center">
          <div className="">
            {" "}
            <h2 className="text-3xl font-semibold mb-4  text-white">
              {" "}
              About Us{" "}
            </h2>
            <h1 className="text-4xl font-semibold mb-5 ">
              Welcome to FileYourTax — Simplifying Tax Filing in India
            </h1>
          </div>
        </div>
      </div>
      <div className="below-herosection flex justify-content-center md:flex-nowrap flex-wrap gap-6 items-center">
        <div className="flex  flex-col p-8 bg-white">
          <hr></hr>
          <p className="font-semibold text-xl ">
            At FileYourTax, we are committed to making professional,
            high-quality tax services accessible to everyone. Our mission is
            rooted in the belief that managing taxes should be simple, reliable,
            and stress-free.
          </p>
        </div>
        <div className="">
          <p className="mb-2">
            We take pride in being recognized as “India’s Trusted Tax Expert,”
            delivering expert assistance with dedication and integrity. But our
            role goes beyond tax filing — we are equally passionate about
            empowering individuals through education. By demystifying taxation
            and addressing common concerns, we strive to eliminate fear and
            foster a more informed, confident approach to tax compliance.
          </p>
          <p>
            Whether you're filing your first return or managing complex tax
            matters, FileYourTax is here to guide you every step of the way.
          </p>
        </div>
      </div>

      {/* about  points */}

      <div className="about-points flex justify-center  lg:flex-nowrap flex-wrap gap-1">
        <div className="flex flex-col items-center about-point">
          <div className="flex justify-center">
            {" "}
            <img
              src="https://tax2win.in/assets-new/img/about-us/customer.svg"
              className=" mb-3"
            ></img>
          </div>
          <h3 className="text-3xl font-bold mb-2 text-white ">Over 1 Lakh</h3>
          <p className="text-white">Satisfied Clients</p>
        </div>
        <div className="flex flex-col items-center about-point">
          <div className="flex justify-center">
            <img
              src="	https://tax2win.in/assets-new/img/about-us/acuracy.svg"
              className=" mb-3"
            ></img>
          </div>
          <h3 className="text-3xl font-bold mb-2 text-white ">100%</h3>
          <p className="text-white">Guaranteed Accuracy</p>
        </div>
        <div className="flex flex-col items-center about-point">
          <div className="flex justify-center">
            {" "}
            <img
              src="	https://tax2win.in/assets-new/img/about-us/support.svg"
              className=" mb-3"
            ></img>
          </div>
          <h3 className="text-3xl font-bold mb-2 text-white ">
            Round-the-Clock
          </h3>
          <p className="text-white">Dedicated Support</p>
        </div>
        <div className="flex flex-col items-center about-point">
          <div className="flex justify-center">
            {" "}
            <img
              src="https://tax2win.in/assets-new/img/about-us/rating.svg"
              className=" mb-3"
            ></img>
          </div>
          <h3 className="text-3xl font-bold mb-2 text-white ">4.8</h3>
          <p className="text-white">Customer Satisfaction Rating</p>
        </div>
      </div>

      {/* What Sets Us Apart */}

      <div className="set-apart flex flex-col items-center text-center py-20 xl:px-40 lg:px-10">
        <h1 className="text-4xl font-semibold mb-5">What Sets Us Apart</h1>
        <p className="font-semibold text-center mb-16">
          At FileyourTax, we take pride in the trust our clients place in us.
          Here’s why individuals and businesses choose us for their tax needs:
        </p>
        <div className="set-apart-points flex flex-wrap justify-center gap-5">
          <div className="set-apart-point p-5 py-7  flex flex-col items-center">
            <h3 className="font-semibold mb-1 text-lg">
              Client-Centric Philosophy
            </h3>
            <p>
              We prioritize your financial well-being by ensuring that you
              receive every eligible tax benefit and deduction—maximizing your
              savings and compliance.
            </p>
          </div>

          <div className="set-apart-point p-5 py-7  flex flex-col items-center">
            <h3 className="font-semibold mb-1 text-lg">
              Uncompromising Quality Standards
            </h3>
            <p>
              Each income tax return is subjected to a rigorous multi-level
              review process to guarantee accuracy, compliance, and optimal
              refund outcomes.
            </p>
          </div>

          <div className="set-apart-point p-5 py-7  flex flex-col items-center">
            <h3 className="font-semibold mb-1 text-lg">
              Expertise You Can Rely On
            </h3>
            <p>
              Our team of experienced Chartered Accountants brings deep domain
              knowledge, meticulously interpreting tax laws to deliver the best
              possible results.
            </p>
          </div>

          <div className="set-apart-point p-5 py-7 flex flex-col items-center">
            <h3 className="font-semibold mb-1 text-lg">
              Personalized Tax Filing Experience
            </h3>
            <p>
              We evaluate your unique income profile and provide a customized,
              hassle-free tax filing solution tailored to your individual or
              business needs.
            </p>
          </div>

          <div className="set-apart-point p-5 py-7  flex flex-col items-center">
            <h3 className="font-semibold mb-1 text-lg">
              Transparent and Accessible Communication
            </h3>
            <p>
              We break down complex tax matters into clear, understandable
              terms, empowering you to make informed financial decisions with
              confidence.
            </p>
          </div>

          <div className="set-apart-point p-5 py-7  flex flex-col items-center ">
            <h3 className="font-semibold mb-1 text-lg">
              Advanced Technology with Unmatched Accuracy
            </h3>
            <p>
              Our platform leverages intelligent algorithms, reviewed by top tax
              professionals, delivering industry- leading data accuracy with a
              99%® data import success rate.
            </p>
          </div>
        </div>

        <div></div>
      </div>

      <div className="meet-our-founder">
        <h1 className="text-4xl font-bold mb-2  ">
          Meet Our Founder — CA Masum Thakur
        </h1>
        <h2 className="text-2xl font-semibold mb-7 ">
          Founder & Chief Tax Strategist, FileyourTax
        </h2>
        <div className="p-10 founder-info ">
          <img
            src="https://cdn-icons-png.flaticon.com/128/8909/8909892.png"
            className=" w-10 mb-3"
          ></img>
          <p className="text-lg ms-5">
            CA Masum Thakur is the visionary behind FileyourTax, a platform
            dedicated to simplifying tax filing for individuals, professionals,
            and businesses across India. A qualified Chartered Accountant and
            esteemed member of the Institute of Chartered Accountants of India
            (ICAI), he brings a wealth of expertise in taxation, regulatory
            compliance, and financial planning.
          </p>
        </div>

        <div className="journey-section mt-14 flex flex-col items-center ">
          <h3 className="text-3xl font-semibold mb-3">Professional Journey</h3>
          <p className="mb-7 font-semibold">
            Before establishing FileyourTax, CA Masum Thakur held several
            leadership roles that shaped his deep understanding of the Indian
            tax landscape:
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <div className="journey flex flex-col ">
              <h4 className="text-xl font-semibold mb-2">
                <span className="journey-h font-bold">Tax Head</span>, Max Lab
                Division, Max Healthcare
              </h4>
              <p>
                Led direct and indirect tax operations, audits, and regulatory
                strategy across the healthcare vertical.
              </p>
            </div>

            <div className="journey flex flex-col ">
              <h4 className="text-xl font-semibold mb-2">
                {" "}
                <span className="journey-h font-bold">Finance Manager</span>,
                Aakash Healthcare
              </h4>
              <p>
                Oversaw financial planning and compliance with a focus on
                healthcare finance dynamics.
              </p>
            </div>

            <div className="journey flex flex-col ">
              <h4 className="text-xl font-semibold mb-2">
                <span className="journey-h font-bold">Taxation Lead</span>,
                CARS24
              </h4>
              <p>
                Spearheaded corporate tax compliance and strategic planning in a
                high-growth tech environment.
              </p>
            </div>

            <div className="journey flex flex-col ">
              <h4 className="text-xl font-semibold mb-2">
                {" "}
                <span className="journey-h font-bold">Assistant Manager</span>,
                Agrim Wholesale Private Limited
              </h4>
              <p>
                Contributed to the financial and compliance functions in the
                agri-tech and wholesale distribution domain.
              </p>
            </div>
          </div>
          <p className=" font-semibold mt-7">
            These roles have provided him with a comprehensive perspective on
            both corporate taxation and individual financial advisory.
          </p>
        </div>
      </div>

      <div className="leadership-section mt-14 flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-3">
          Leadership at FileYourTax
        </h2>
        <p className="mb-7  font-semibold">
          At the helm of FileYourTax, CA Masum Thakur leads a team of highly
          skilled professionals focused on:
        </p>

        <div className="leadership-points">
          <ul className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <img src="https://cdn-icons-png.flaticon.com/128/61/61222.png"></img>
              <li>Seamless and accurate income tax filing</li>
            </div>
            <div className="flex gap-2 items-center">
              <img src="https://cdn-icons-png.flaticon.com/128/61/61222.png"></img>
              <li>Personalized financial and tax advisory</li>
            </div>
            <div className="flex gap-2 items-center">
              <img src="https://cdn-icons-png.flaticon.com/128/61/61222.png"></img>
              <li>GST compliance and consulting</li>
            </div>
            <div className="flex gap-2 items-center">
              <img src="https://cdn-icons-png.flaticon.com/128/61/61222.png"></img>
              <li>Investment-driven tax optimization strategies</li>
            </div>
            <div className="flex gap-2 items-center">
              <img src="https://cdn-icons-png.flaticon.com/128/61/61222.png"></img>
              <li>
                {" "}
                Tailored support for salaried individuals, freelancers, NRIs,
                and SMEs{" "}
              </li>
            </div>
          </ul>

          <p className="my-5 font-semibold">
            His client-first philosophy and practical approach help individuals
            and businesses navigate India’s complex tax system with confidence
            and clarity.
          </p>
        </div>
      </div>

      <div className="vision-section flex gap-4 my-14">
        <div className="vision-inner">
          <h2 className="text-2xl font-bold mb-3">Vision & Purpose</h2>
          <p className="mb-5">
            Driven by the conviction that & top-tier professional services
            should be accessible to all,& CA Masum Thakur founded FileYourTax to
            dismantle the barriers of complexity, inaccessibility, and tax
            anxiety.
          </p>

          <p className="text-lg">At FileYourTax, we proudly affirm:</p>
          <p className="font-semibold text-lg">
            “Hum hi hain India ka Tax Expert.”
          </p>
        </div>
      </div>

      {/* <div className="testimonial flex gap-5">
        <div>
          <h1>What Our Clients Say About Us</h1>
          <p>
            At FileYourTax, we take immense pride in delivering timely,
            accurate, and personalized tax solutions. Our clients’ satisfaction
            speaks volumes about our commitment and expertise:
          </p>
        </div>

        <div>
          <div>
            <p>
              "Seamless and efficient! I was dreading my ITR filing, but
              FileYourTax made it incredibly simple. Their expert team guided me
              every step of the way"
            </p>
            <h6>— Sunil Shyama Yadav, Director – X-Biz Techventures</h6>
          </div>

          <div>
            <p>
              "Highly professional service. Their team helped me claim
              deductions I wasn’t even aware of. I’ll be filing with them every
              year!"
            </p>
            <h6>— Rohit Tiwari, Alumnus – IIT Dhanbad</h6>
          </div>

          <div>
            <p>
              "Best experience ever with tax filing. Accurate, quick, and
              stress-free. Highly recommend FileYourTax"
            </p>
            <h6>— Ganesh M., Software Professional</h6>
          </div>

          <div>
            <p>
              "Truly ‘Hum Hi Hai India Ka Tax Expert’! The level of personal
              attention and detail they provide is unmatched."
            </p>
            <h6>— Akhilesh Dubey, Founder – Sri Gosalites Medical Academy</h6>
          </div>

          <div>
            <p>
              "Reliable and insightful tax guidance. I trust them completely for
              my annual filings.";
            </p>
            <h6>— Sharad Srivastava, IIT-JEE Faculty</h6>
          </div>

          <div>
            <p>
              "Outstanding service! The FileYourTax team helped our company
              maintain perfect compliance throughout the year."
            </p>
            <h6>— Tabrej Alam, Director – Flawless99</h6>
          </div>

          <div>
            <p>
              "A professional and personalized experience. I’ve recommended
              FileYourTax to several colleagues already."
            </p>
            <h6>— Sourabh Pant, Co-founder – Sri Gosalites Medical Academy</h6>
          </div>

          <div>
            <p>
              "Excellent support with complete clarity. As a tech professional,
              I appreciate the smooth, digital process."
            </p>
            <h6>— Ankit Prateek, Cybersecurity Expert – IT Professional</h6>
          </div>
        </div>
      </div> */}

      <TestimonialCarousel/>

      {/* <img src="/assest/vision.png"></img> */}

      <Need_Support/>

      <Footer />
    </>
  );
};

export default page;
