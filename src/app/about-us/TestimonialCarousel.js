"use client"

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    text: "Seamless and efficient! I was dreading my ITR filing, but FileYourTax made it incredibly simple. Their expert team guided me every step of the way",
    author: "— Sunil Shyama Yadav, Director – X-Biz Techventures",
  },
  {
    text: "Highly professional service. Their team helped me claim deductions I wasn’t even aware of. I’ll be filing with them every year!",
    author: "— Rohit Tiwari, Alumnus – IIT Dhanbad",
  },
  {
    text: "Best experience ever with tax filing. Accurate, quick, and stress-free. Highly recommend FileYourTax",
    author: "— Ganesh M., Software Professional",
  },
  {
    text: "Truly ‘Hum Hi Hai India Ka Tax Expert’! The level of personal attention and detail they provide is unmatched.",
    author: "— Akhilesh Dubey, Founder – Sri Gosalites Medical Academy",
  },
  {
    text: "Reliable and insightful tax guidance. I trust them completely for my annual filings.",
    author: "— Sharad Srivastava, IIT-JEE Faculty",
  },
  {
    text: "Outstanding service! The FileYourTax team helped our company maintain perfect compliance throughout the year.",
    author: "— Tabrej Alam, Director – Flawless99",
  },
  {
    text: "A professional and personalized experience. I’ve recommended FileYourTax to several colleagues already.",
    author: "— Sourabh Pant, Co-founder – Sri Gosalites Medical Academy",
  },
  {
    text: "Excellent support with complete clarity. As a tech professional, I appreciate the smooth, digital process.",
    author: "— Ankit Prateek, Cybersecurity Expert – IT Professional",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) =>
      newDirection === 1
        ? (prevIndex + 1) % testimonials.length
        : (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="testimonial flex gap-8 items-center justify-center px-6 py-10">
      <div className="text-center max-w-3xl  testi-part1">
        <h1 className="text-3xl font-bold mb-4">What Our Clients Say About Us</h1>
        <p className="text-gray-600">
          At FileYourTax, we take immense pride in delivering timely, accurate,
          and personalized tax solutions. Our clients’ satisfaction speaks
          volumes about our commitment and expertise:
        </p>
      </div>

    <div className=" testi-part2 relative w-full max-w-2xl min-h-[260px] flex items-center justify-center overflow-hidden">

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute w-full p-20 py-20 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center inner-testi"
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-800 italic">
              "{testimonials[currentIndex].text}"
            </p>
            <h6 className="mt-4 text-sm font-semibold text-right text-gray-600">
              {testimonials[currentIndex].author}
            </h6>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-y-0 left-0 flex items-center pl-2 ">
          <button
            onClick={() => paginate(-1)}
            className=" rounded-full p-2"
          >
          <img src="https://cdn-icons-png.flaticon.com/128/16777/16777661.png" className="test-prev"></img>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <button
            onClick={() => paginate(1)}
            className=" rounded-full p-2"
          >
            <img src="https://cdn-icons-png.flaticon.com/128/7893/7893857.png" className="test-next"></img>
          </button>
        </div>
      </div>
    </div>
  );
}
