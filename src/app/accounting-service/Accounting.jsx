import React from 'react'
import "./acounting.css"

const Accounting = () => {
    return (
        <div>
            <div className="unlock-financial-section flex flex-col items-center py-28 px-4">
                <div className="financial-inner">
                    <h1 className='text-4xl font-semibold mb-8 text-white'>Unlock Financial Clarity with TaxBuddy's Accounting and Bookkeeping Services</h1>
                    <div className="unlock-points flex flex-col gap-4">
                        <div className="unlock-point flex gap-3">
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828739.png" alt="" width={22} />
                            <p className='text-white'>Precision in Financial Record Keeping</p>
                        </div>
                        <div className="unlock-point flex gap-3">
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828739.png" alt="" width={22} />
                            <p className='text-white'>Precision in Financial Record Keeping</p>
                        </div>
                        <div className="unlock-point flex gap-3">
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828739.png" alt="" width={22} />
                            <p className='text-white'>Precision in Financial Record Keeping</p>
                        </div>
                        <div className="unlock-point flex gap-3">
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828739.png" alt="" width={22} />
                            <p className='text-white'>Precision in Financial Record Keeping</p>
                        </div>
                        <div className="tds-btn flex py-2 justify-center rounded-md mt-3">
                            <p className='text-white'>File TDS Return Now</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* account-services section */}

            <div className="account-services-section xl:px-40 lg:px-4 flex flex-col items-center text-center py-28 ">
                <div className='service-heading'>
                    <h1 className='text-4xl font-semibold mb-8 '>Achieve Financial Success With Our Comprehensive Accounting Services</h1>
                    <p>Accounting services are essential for businesses and organizations to track their financial transactions, ensure
                        compliance with regulations, make informed decisions, and maintain financial health. Here are key components of
                        accounting services:</p>
                </div>
                <div className="account-services flex flex-wrap justify-center mt-8 gap-8">
                    <div className="account-service p-4 text-center">
                        <h4 className=' font-bold mb-3'>Bookkeeping:</h4>
                        <p className='text-sm'>Recording day-to-day financial transactions, including purchases, sales, receipts, and payments.
                            Maintaining ledgers and journals to organize and categorize financial data.</p>
                    </div>

                    <div className="account-service p-4 text-center">
                        <h4 className=' font-bold mb-3'>Consultation:</h4>
                        <p className='text-sm'>Providing expert advice on financial strategies, budgeting, and long-term planning. Collaborating with
                            clients to understand their financial goals and offering guidance on achieving them.</p>
                    </div>

                    <div className="account-service p-4 text-center">
                        <h4 className=' font-bold mb-3'>Data Integration:</h4>
                        <p className='text-sm' >Using technology to seamlessly integrate financial data from various sources. Minimizing
                            errors and ensuring consistency in financial records.</p>
                    </div>

                    <div className="account-service p-4 text-center">
                        <h4 className=' font-bold mb-3'>Ongoing Bookkeeping:</h4>
                        <p className='text-sm' >Continuously updating financial records to reflect the latest transactions.
                            Providing real-time insights into the financial status of the business.</p>
                    </div>

                    <div className="account-service p-4 text-center">
                        <h4 className=' font-bold mb-3'>Financial Reporting:</h4>
                        <p className='text-sm' >Generating accurate and timely financial reports, including balance sheets, income statements,
                            and cash flow statements. Offering a comprehensive overview of the organization's financial performance</p>
                    </div>

                    <div className="account-service p-4 text-center">
                        <h4 className=' font-bold mb-3'>Tax Compliance: </h4>
                        <p className='text-sm' >Ensuring adherence to tax regulations and filing accurate and timely tax returns. Providing guidance on
                            tax planning to minimize liabilities and optimize financial outcomes.</p>
                    </div>

                    <div className="account-service p-4 text-center">
                        <h4 className=' font-bold mb-3'>Audit Preparation:</h4>
                        <p className='text-sm'>Assisting in the preparation for external audits, ensuring that financial statements comply with accounting
                            standards and regulations. Facilitating a smooth audit process.</p>
                    </div>

                    <div className="account-service p-4 text-center">
                        <h4 className=' font-bold mb-3'>Payroll Processing:</h4>
                        <p className='text-sm'>Calculating and processing employee salaries, taxes, and benefits. Ensuring compliance with
                            labor laws and regulations.</p>
                    </div>

                    <div className="account-service p-4 text-center">
                        <h4 className=' font-bold mb-3'>Accounting Management:</h4>
                        <p className='text-sm'>Creating internal reports for managerial decision-making. Analyzing financial data to provide insights
                            into cost control, budgeting, and resource allocation.</p>
                    </div>
                </div>
            </div>

            {/* Accounting package */}
            <div className="account-package-section xl:px-40 lg:px-4 flex flex-col items-center text-center py-28">
                <div className="package-heading flex flex-wrap justify-center px-4">
                    <img src="https://static.wixstatic.com/media/5ef7f2_a183cffcb4dd4401bee3dc7dfe8e23bb~mv2.png/v1/fill/w_75,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Account%20Sevice_black.png" alt="" width={60} />
                    <h1 className='text-4xl font-semibold mb-8 '>Introducing our Comprehensive Accounting Service Packages</h1>
                </div>

                <div className="all-pricings  p-5 flex justify-center  gap-3 flex-wrap mt-8">
                    <div className="pricing p-4  flex flex-col justify-between rounded-md bg-white">
                        <div>

                            <h4 className='text-xl font-semibold mt-3 mb-4'>BASIC</h4>


                            <p className='text-4xl font-semibold text-blue mt-3'>₹6,799</p>
                            <div className='flex items-center gap-2 mt-3'>
                                <p className='text-4xl font-semibold text-blue  text-orange-500 line-through'>11,332</p>
                                <p>/ Year</p>
                            </div>

                            <p className='mt-3 text-sm'>*Exclusive of Taxes</p>

                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Accounting in Tally upto 100 entries</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Preparation of Final Accounts & Annual report, if yearly package is opted</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Monthly MIS reporting</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Income Tax Return Filing</p>
                            </div>

                        </div>
                        <div className="get-btn flex justify-center mb-4 w-full rounded-md py-2 mt-5">
                            <p className='btn-p'>I am Interested</p>
                        </div>
                    </div>


                    <div className="pricing p-4 rounded-md  flex flex-col justify-between bg-white">
                        <div>


                            <h4 className='text-xl font-semibold mt-3 mb-4'>STANDARD</h4>


                            <p className='text-4xl font-semibold text-blue'>₹10,199</p>
                            <div className='flex items-center gap-2 mt-3'>
                                <p className='text-4xl font-semibold text-blue  text-orange-500 line-through'>₹16,998</p>
                                <p>/ Year</p>
                            </div>

                            <p className='mt-3 text-sm'>*Exclusive of Taxes</p>

                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm' >Accounting in Tally upto 300 entries</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Preparation of Final Accounts & Annual report, if yearly package is opted</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Monthly MIS reporting</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Income Tax Return Filing</p>
                            </div>

                        </div>

                        <div className="get-btn flex justify-center mb-4 mt-4 w-full rounded-md py-2 mt-5">
                            <p className='btn-p'>I am Interested</p>
                        </div>
                    </div>


                    <div className="pricing p-4 rounded-md  flex flex-col justify-between bg-white">
                        <div>

                            <h4 className='text-xl font-semibold mt-3 mb-4'> ADVANCED</h4>


                            <p className='text-4xl font-semibold text-blue'>₹16,899</p>
                            <div className='flex items-center gap-2 mt-3'>
                                <p className='text-4xl font-semibold text-blue  text-orange-500  line-through'>₹28,165</p>
                                <p>/ Year</p>
                            </div>

                            <p className='mt-3 text-sm'>*Exclusive of Taxes</p>

                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Accounting in Tally upto 700 entries</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Preparation of Final Accounts & Annual report, if yearly package is opted</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Monthly MIS reporting</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Income Tax Return Filing</p>
                            </div>

                        </div>

                        <div className="get-btn flex justify-center mb-4 w-full rounded-md py-2 mt-5">
                            <p className='btn-p'>I am Interested</p>
                        </div>
                    </div>


                    <div className="pricing p-4 rounded-md  flex flex-col justify-between bg-white">
                        <div>
                            <h4 className='text-xl font-semibold mt-3 mb-4'> Pro (Complete Accounting & Taxation)</h4>
                            <p className='text-4xl font-semibold text-blue'>₹10,000</p>

                            <p className='mt-3 text-sm'>*Exclusive of Taxes</p>

                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm' >Personal Accountant Support</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Unlimited Tally Entries</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Monthly MIS Report</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Bank & Credit Card Reconciliation</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>TDS Returns Filing</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>GST Returns Filing</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Income Tax Return Filing</p>
                            </div>
                        </div>

                        <div className="get-btn flex justify-center mb-4 mt-5 w-full rounded-md py-2 ">
                            <p className='btn-p'>I am Interested</p>
                        </div>
                    </div>


                </div>

            </div>


            {/* Bookkeeping section */}

            <div className="bookkeeping-section xl:px-40 lg:px-4 flex flex-col items-center text-center py-20">
                <h1 className='text-4xl font-semibold mb-8 px-4'>Efficient Bookkeeping Services Tailored to Your Business Needs</h1>
                <p className='px-4'>Bookkeeping is a fundamental aspect of accounting that focuses on accurately tracking all financial activities,
                    ensuring that a company's financial records are up-to-date, accurate, and compliant with relevant regulations.
                    Here's a breakdown of what bookkeeping services typically entail:</p>

                <div className="book-points flex flex-wrap justify-center gap-8 mt-10">
                    <div className="book-point p-5 flex justify-center items-center">
                        <p>Systematic Recording of Financial Transactions</p>
                    </div>
                    <div className="book-point p-5 flex justify-center items-center">
                        <p>Precise Categorization of Transactions</p>
                    </div>
                    <div className="book-point p-5 flex justify-center items-center">
                        <p>Expert Maintenance of Ledgers</p>
                    </div>
                    <div className="book-point p-5 flex justify-center items-center">
                        <p>Thorough Bank Reconciliation</p>
                    </div>
                    <div className="book-point  p-5 flex justify-center items-center">
                        <p>Professional Generation of Financial Statements</p>
                    </div>
                    <div className="book-point  p-5 flex justify-center items-center">
                        <p>Proactive Monitoring of Cash Flow</p>
                    </div>
                    <div className="book-point  p-5 flex justify-center items-center">
                        <p>Stringent Compliance and Reporting</p>
                    </div>
                    <div className="book-point  p-5 flex justify-center items-center">
                        <p>Strategic Budgeting Support</p>
                    </div>
                    <div className="book-point  p-5 flex justify-center items-center">
                        <p>Efficient Audit Preparation</p>
                    </div>
                </div>

                <div className="book-btn flex py-3 justify-center rounded-md mt-8">
                        <p className='text-white'>Streamline your Bookkeeping</p>
                    </div>
            </div>
        </div>

    )
}

export default Accounting
