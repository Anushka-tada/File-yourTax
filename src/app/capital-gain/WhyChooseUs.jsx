import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Trusted Expertise",
      description: "Our team of seasoned tax professionals specializes in capital gains, ensuring you receive accurate, up-to-date advice tailored to your unique situation."
    },
    {
      title: "End-to-End Support",
      description: "From calculating your capital gains to identifying eligible exemptions and deductions, we handle every detail so you pay only what's necessary—nothing more."
    },
    {
      title: "Effortless Tax Filing",
      description: "Enjoy a seamless experience as our experts prepare and file your tax return, while also ensuring you claim any missed allowances and deductions."
    },
    {
      title: "Transparent Pricing",
      description: "With us, there are no surprises—just clear, upfront pricing, so you know exactly what you're paying for."
    }
  ];

  return (
    <div 
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'rgb(238, 247, 249)' }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 
          className="text-3xl font-bold text-center mb-12"
          style={{ color: 'rgb(20, 64, 71)' }}
        >
          Why Choose Us?
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <h2 
                className="text-xl font-semibold mb-4"
                style={{ color: 'rgb(36, 101, 111)' }}
              >
                {feature.title}
              </h2>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ color: 'rgb(36, 101, 111, 0.8)' }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-6 rounded-lg mb-8">
          <p 
            className="text-center italic mb-6 leading-relaxed"
            style={{ color: 'rgb(36, 101, 111)' }}
          >
            Capital gains can significantly impact your tax liability. Our experts are here to ensure you file correctly, claim all eligible exemptions, and minimize your tax outflow
          </p>
          
          <div className="text-center">
            <button 
              className="px-8 py-3 rounded-md font-semibold text-white mb-6"
              style={{ backgroundColor: 'rgb(20, 64, 71)' }}
            >
              Connect Today
            </button>
          </div>
          
          <div className="border-t pt-6">
            <h3 
              className="text-lg font-semibold text-center mb-2"
              style={{ color: 'rgb(36, 101, 111)' }}
            >
              eCA Assisted-Capital Gain Filing
            </h3>
            <p 
              className="text-2xl font-bold text-center mb-4"
              style={{ color: 'rgb(20, 64, 71)' }}
            >
              $ 4099
            </p>
            <div className="text-center">
              <button 
                className="px-6 py-2 rounded-md font-semibold text-white"
                style={{ backgroundColor: 'rgb(20, 64, 71)' }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div>Type here to search</div>
          <div>SSC Sunny</div>
          <div>RPG 15:59 PM</div>
          <div>$/29/2005</div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;