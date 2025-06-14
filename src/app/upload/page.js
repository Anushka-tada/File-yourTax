import Head from 'next/head';
import Nav from '../components/Navbar/Nav';
import Footer from '../homepage/Footer';
import Need_Support from '../homepage/Need_Support';

export default function Page() {
  return (
    < >
      <Nav />
      <div className="min-h-screen page" style={{ backgroundColor: 'rgb(238, 247, 249)' }}>
        

        <main className="container mx-auto px-4 py-8">
          <div 
            className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 mt-10"
            style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
          >
            <h1 
              className="text-2xl font-bold text-center mb-2"
              style={{ color: 'rgb(20, 64, 71)' }}
            >
             FileyourTax
            </h1>
            
            <h2 
              className="text-lg font-semibold text-center mb-6 uppercase tracking-wider"
              style={{ color: 'rgb(36, 101, 111)' }}
            >
           Upload your Form 16
            </h2>
            
            <p 
              className="text-center mb-8 leading-relaxed"
              style={{ color: 'rgb(36, 101, 111)' }}
            >
             Filing your Income Tax Return is easy with FileyourTax. Just upload your Form 16 and get your ITR prepared automatically.
            </p>
            
            <div 
              className="border-t border-b py-6 mb-6 text-center"
              style={{ 
                borderColor: 'rgb(36, 101, 111, 0.2)',
                color: 'rgb(36, 101, 111)'
              }}
            >
              <div className="mb-2">CONTINUE WITHOUT FORM 16</div>
              <div 
                className="font-bold my-2"
                style={{ color: 'rgb(20, 64, 71)' }}
              >
                OR
              </div>
            </div>
            
            <button 
              className="w-full text-white font-bold py-3 px-4 rounded-md mb-8 uppercase tracking-wider"
              style={{ 
                backgroundColor: 'rgb(20, 64, 71)',
                boxShadow: '0px 4px 8px rgba(20, 64, 71, 0.3)'
              }}
            >
              UPLOAD FROM 16
            </button>
          </div>
        </main>
      </div>
      <Need_Support />
      <Footer />
    </>
  );
}