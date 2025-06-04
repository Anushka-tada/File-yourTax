import React from 'react'
import "./acounting.css"

const Accounting = () => {
    return (
        <div className='page'>
            <div className="unlock-financial-section flex flex-col items-center py-28 px-4">
                <div className="financial-inner">
                    <h1 className='text-4xl font-semibold mb-3 text-white'>Achieve Financial Transparency with FileyourTax's Accounting & Bookkeeping Services</h1>
                    <p className='mb-8 text-white text-xl'>Stay on top of your business finances with expert-managed records built for accuracy and growth.</p>
                    <div className="unlock-points flex flex-col gap-4">
                        <div className="unlock-point flex gap-3">
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828739.png" alt="" width={22} />
                            <p className='text-white'>Accurate and Reliable Financial Record Management</p>
                        </div>
                        <div className="unlock-point flex gap-3">
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828739.png" alt="" width={22} />
                            <p className='text-white'>Customized Bookkeeping Solutions for Your Business Needs</p>
                        </div>
                        <div className="unlock-point flex gap-3">
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828739.png" alt="" width={22} />
                            <p className='text-white'>Skilled in Crafting and Analyzing Financial Reports</p>
                        </div>
                        <div className="unlock-point flex gap-3">
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828739.png" alt="" width={22} />
                            <p className='text-white'>Timely Financial Insights for Smarter Decisions</p>
                        </div>
                        <div className="tds-btn flex py-2 justify-center rounded-md mt-3">
                            <p className='text-white'>Take the First Step Today</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* account-services section */}

            <div className="account-services-section xl:px-40 lg:px-4 flex flex-col items-center text-center py-28 ">
                <div className='service-heading'>
                    <h1 className='text-4xl font-semibold mb-8 '>Drive Financial Excellence with Our All-Inclusive Accounting Solutions</h1>
                    <p>Robust accounting services are crucial for every business and organization — enabling you to track financial transactions, 
                        ensure regulatory compliance, make informed decisions, and sustain financial well-being. Explore the core pillars of our
                         comprehensive accounting support:</p>
                </div>
                <div className="account-services flex flex-wrap justify-center mt-8 gap-8">
                    <div className="account-service p-4 text-center">
                        <h4 className=' font-bold mb-3'>Transaction Recording & Bookkeeping</h4>
                        <p className='text-sm'>Maintain clear and organized records of daily financial activities — from purchases and sales
                             to receipts and payments — through
                             precise ledger and journal entries.</p>
                    </div>

                    <div className="account-service p-4 text-center">
                        <h4 className=' font-bold mb-3'>Strategic Financial Consultation</h4>
                        <p className='text-sm'>Gain expert insights on budgeting, financial planning, and growth strategies. We partner with you 
                            to align your financial decisions with long-term business objectives.</p>
                    </div>

                    <div className="account-service p-4 text-center">
                        <h4 className=' font-bold mb-3'>Integrated Financial Data Management</h4>
                        <p className='text-sm' >Utilize modern tools to consolidate financial data across platforms, reduce inconsistencies, and enhance the accuracy of your records.</p>
                    </div>

                    <div className="account-service p-4 text-center">
                        <h4 className=' font-bold mb-3'>Continuous Bookkeeping Support</h4>
                        <p className='text-sm' >Keep your books current with real-time updates on transactions, offering you an up-to-date snapshot of your financial position anytime.</p>
                    </div>

                    <div className="account-service p-4 text-center">
                        <h4 className=' font-bold mb-3'>Comprehensive Financial Reporting</h4>
                        <p className='text-sm' >Access accurate and timely reports, including income statements, balance sheets, and cash flow summaries — essential for internal and external review.</p>
                    </div>

                    <div className="account-service p-4 text-center">
                        <h4 className=' font-bold mb-3'>Tax Filing & Regulatory Compliance</h4>
                        <p className='text-sm' >Ensure timely and accurate tax return submissions while minimizing liabilities through smart planning and adherence to tax laws.</p>
                    </div>

                    <div className="account-service p-4 text-center">
                        <h4 className=' font-bold mb-3'>Audit Readiness Assistance</h4>
                        <p className='text-sm'>Prepare confidently for audits with fully compliant financial statements and dedicated support to ensure a smooth review process.</p>
                    </div>

                    <div className="account-service p-4 text-center">
                        <h4 className=' font-bold mb-3'>Payroll Administration</h4>
                        <p className='text-sm'>Process salaries, taxes, and employee benefits efficiently while staying fully compliant with labor laws and payroll regulations.</p>
                    </div>

                    <div className="account-service p-4 text-center">
                        <h4 className=' font-bold mb-3'>Financial Control & Management Reporting</h4>
                        <p className='text-sm'>Leverage custom internal reports and financial analysis to support decision-making, budget planning, and optimal resource utilization.</p>
                    </div>
                </div>
            </div>

            {/* Accounting package */}
            <div className="account-package-section xl:px-40 lg:px-4 flex flex-col items-center text-center py-28">
                <div className="package-heading flex flex-wrap justify-center px-4">
                    <img src="https://static.wixstatic.com/media/5ef7f2_a183cffcb4dd4401bee3dc7dfe8e23bb~mv2.png/v1/fill/w_75,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Account%20Sevice_black.png" alt="" width={60} />
                    <h1 className='text-4xl font-semibold mb-8 '>Complete Accounting Packages Designed for Your Success</h1>
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
                <h1 className='text-4xl font-semibold mb-8 px-4'>Personalized Bookkeeping for Streamlined Financial Management</h1>
                <p className='px-4 mb-2'>Bookkeeping is a cornerstone of effective accounting, dedicated to the systematic recording and tracking of all financial transactions. It ensures that a company’s financial records remain current, accurate, and fully compliant with applicable laws and standards.</p>
                <p className='px-4 ' >Below is a breakdown of the key components typically included in professional bookkeeping services:</p>
                <div className="book-points flex flex-wrap justify-center gap-8 mt-10">
                    <div className="book-point p-5 flex justify-center items-center">
                        <p>Accurate and Systematic Financial Transaction Recording</p>
                    </div>
                    <div className="book-point p-5 flex justify-center items-center">
                        <p>Detailed and Precise Transaction Classification</p>
                    </div>
                    <div className="book-point p-5 flex justify-center items-center">
                        <p>Expert Ledger Maintenance and Management</p>
                    </div>
                    <div className="book-point p-5 flex justify-center items-center">
                        <p>Comprehensive Bank Reconciliation Services</p>
                    </div>
                    <div className="book-point  p-5 flex justify-center items-center">
                        <p>Professional Preparation of Financial Statements</p>
                    </div>
                    <div className="book-point  p-5 flex justify-center items-center">
                        <p>Active Monitoring and Management of Cash Flow</p>
                    </div>
                    <div className="book-point  p-5 flex justify-center items-center">
                        <p>Strict Compliance with Regulatory Reporting Requirements</p>
                    </div>
                    <div className="book-point  p-5 flex justify-center items-center">
                        <p>Strategic Assistance in Budget Planning and Control</p>
                    </div>
                    <div className="book-point  p-5 flex justify-center items-center">
                        <p>Comprehensive Audit Support</p>
                    </div>
                </div>

                <div className="book-btn flex py-3 justify-center rounded-md mt-8">
                        <p className='text-white'>Simplify Your Bookkeeping Process</p>
                    </div>
            </div>
        </div>

    )
}

export default Accounting
