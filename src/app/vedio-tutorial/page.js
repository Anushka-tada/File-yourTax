import React from "react";
import Nav from "../components/Navbar/Nav";
import Footer from "../homepage/Footer";
import Need_Support from "../homepage/Need_Support";

const tutorials = [
  {
    title: "How to File Your Income Tax Return",
    description: "A step-by-step guide to filing your ITR online in India.",
    videoUrl: "https://www.youtube.com/embed/1wJ3mVWGOs8",
  },
  {
    title: "Understanding GST for Beginners",
    description: "Learn the basics of Goods and Services Tax with practical examples.",
    videoUrl: "https://www.youtube.com/embed/jF62ZZNHMt0",
  },
  {
    title: "What is TDS and How to Check It",
    description: "Learn how TDS works and how you can check it using Form 26AS.",
    videoUrl: "https://www.youtube.com/embed/dt_tXH5GLKk",
  },
  {
    title: "PAN Card Application Process",
    description: "Know how to apply for a PAN card online easily.",
    videoUrl: "https://www.youtube.com/embed/FeJ7W5WWn5g",
  },
];

const resources = [
  {
    title: "Download: ITR Filing Checklist (PDF)",
    link: "#",
    description: "A simple printable checklist to ensure smooth return filing.",
  },
  {
    title: "Income Tax Slabs Explained",
    link: "#",
    description: "Detailed guide on current income tax slabs and how to calculate tax.",
  },
  {
    title: "GST Registration Process",
    link: "#",
    description: "Learn how to register for GST and the documents you’ll need.",
  },
];

export default function page() {
  return (
    <>
      <Nav />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 page">
        <h1 className="text-4xl font-bold text-center text-primary mb-6 tax-glossary-h">
         Video Tutorials
        </h1>
        <p className="text-tertiary text-center mb-10 text-lg max-w-3xl mx-auto">
          Learn about taxes, forms, and filing with these helpful videos.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 mb-16">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="bg-white border border-secondary rounded-2xl p-4 shadow hover:shadow-lg transition duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  src={tutorial.videoUrl}
                  title={tutorial.title}
                  allowFullScreen
                  className="w-full h-64 rounded-lg"
                ></iframe>
              </div>
              <h2 className="text-xl font-semibold text-primary mb-2">
                {tutorial.title}
              </h2>
              <p className="text-tertiary text-sm">{tutorial.description}</p>
            </div>
          ))}
        </div>

        {/* 📘 Related Resources Section */}
        <div className="bg-secondary p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">
            📘 Related Resources
          </h2>
          <p className="text-center text-tertiary mb-8">
            Additional guides and tools to help you understand taxes better.
          </p>
          <ul className="space-y-6">
            {resources.map((resource, index) => (
              <li
                key={index}
                className="bg-white p-5 rounded-xl border border-tertiary hover:shadow transition bg-third"
              >
                <a href={resource.link} className="text-lg font-medium text-primary hover:underline block">
                  {resource.title}
                </a>
                <p className="text-sm text-tertiary">{resource.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Need_Support/>
      <Footer />
    </>
  );
}
