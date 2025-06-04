import Nav from "../components/Navbar/Nav";
import Faq_ITR from "../homepage/Faq_ITR";
import Footer from "../homepage/Footer";

export default function page() {
  return (
    <div>
       <Nav />
    < div className="page"> 
     

      {/* Hero Section */}
      <div className="bg-secondary py-12 px-6 sm:px-10 rounded-2xl shadow-sm mb-12 max-w-6xl mx-auto ">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-third mb-4">
             Frequently Asked Questions
          </h1>
          <p className="text-lg text-tertiary">
            Get answers to common questions about tax filing, documents,
            deadlines, and more. If you’re new to the process, this is a great place to start!
          </p>
        </div>
      </div>

      <Faq_ITR/>

      {/* 🔽 Your existing FAQ list goes here */}
      {/* e.g. <FAQList /> or manually mapped list */}

      <Footer />
    </div>
    </div>
  );
}
