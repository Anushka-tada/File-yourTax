import React from 'react'

const Notice = () => {
  return (
    <div>
      <div className="itr-section  flex flex-wrap gap-5 items-center justify-center">
                     <div className='p-2'>
                     <h2 className='text-3xl font-semibold text-white mb-3'>Income Tax Notices</h2>
                      <p className=' text-white text-sm itr-para'>Experience stress-free notice management, tailored to your needs. Stay effortlessly informed and organized, with our user-friendly expertise.</p>
                     </div>

                     <div className='flex flex-wrap justify-center itr-inner gap-4 p-2'>
                     <div className="flex gap-2 items-center">
                     <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                        <p className='text-lg text-white'>Dedicated Notice Team</p>
                        </div>
                        <div className="flex gap-2 items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                        <p className='text-lg text-white'>1-1 Expert Guidance</p>
                        </div>
                        <div className="flex gap-2 items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                        <p className='text-lg text-white'>End-to-End Notice Management </p>
                        </div>
                     </div>
                </div>

                <div className="notice-section  flex flex-col items-center xl:mx-40  mx-3 my-7 px-8 rounded-lg py-6 ">
                    <h1  className='text-4xl font-semibold mb-8 ' >PRICING</h1>
                    <div className="notice-pricings  sm:p-5 p-0 flex justify-center  gap-3 flex-wrap">
                    <div className="notice-price p-4  flex flex-col justify-between rounded-md">
                        <div>
                           
                            <h4 className='font-semibold mt-2 mb-4'>Appeal Cases</h4>
                            
                                 <p className='text-sm text-orange-400'>Starting from</p>
                                <p className='text-4xl font-semibold text-blue'>₹25,399</p>
                            
                            <p className='mt-2 text-sm'>*Exclusive of Taxes</p>
                            <p className='my-4 suited font-bold'>SUITED FOR:</p>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p >For 1st & 2nd Appeal</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Appeals that can be conducted through online tax portals, without requiring a physical visit</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>ITAT Appeals will be charged separately, depending upon location & availability of tax consultant</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>For cases where you cannot proceed with simple Rectification, Revise Return, Feedback</p>
                            </div>

                        </div>
                        <div className="get-btn flex justify-center mb-4 w-full rounded-md py-2">
                            <p className='btn-p'>Get Started Now</p>
                        </div>
                    </div>

                    <div className="notice-price p-4 rounded-md  flex flex-col justify-between">
                        <div>
                            <h4 className=' font-semibold mt-2 mb-4'>Rectification / Revised / Defective</h4>
                           
                                <p className='text-4xl font-semibold text-blue'>₹2,499</p>
            
                            <p className='mt-2 text-sm'>*Exclusive of Taxes</p>
                            <p className='my-4 suited font-bold'>SUITED FOR:</p>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p >Applicable to rectifying defects, revisions, adjustments, HVT Notice, adjustments, Form 67 defects,26AS-AIS/TIS Mismatch etc.</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Major overhauls or replacements beyond basic rectification</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>If the ITR plan fee is higher than the Notice fee, the higher of the two fees will be applicable</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Full payment upfront</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>We aim to complete the service within 4 business days from the date of receiving the notice with all related documents</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>This pricing plan covers a two-time rectification / revise / defective service for each eligible customer.</p>
                            </div>
                        </div>

                        <div className="get-btn flex justify-center mb-4 w-full rounded-md py-2">
                            <p className='btn-p'>Get Started Now</p>
                        </div>
                    </div>

                    <div className="notice-price p-4 rounded-md  flex flex-col justify-between">
                        <div>

                            <h4 className=' font-semibold mt-2 mb-4'>Routine Notice</h4>
                          
                                <p className='text-4xl font-semibold text-blue'>₹899</p>
                               
                            <p className='mt-2 text-sm'>*Exclusive of Taxes</p>
                            <p className='my-4 suited font-bold'>SUITED FOR:</p>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p >For providing a simple response and cross checking your filed ITR.</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Applicable for Risk Management Notices, Refund Re-issue, Simple Response to outstanding demands, E-Campaign Response etc</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>For revise filing due to omission of income or taken incorrect deductions, plan will change accordingly</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>For Agree/Disagree Responses</p>
                            </div>
                        </div>

                        <div className="get-btn flex justify-center mb-4 w-full rounded-md py-2">
                            <p className='btn-p'>Get Started Now</p>
                        </div>
                    </div>

                    <div className="notice-price p-4  flex flex-col justify-between rounded-md">
                        <div>
                           
                            <h4 className='font-semibold mt-2 mb-4'> Scrutiny Cases</h4>
                            
                                 <p className='text-sm text-orange-400'>Starting from</p>
                                <p className='text-4xl font-semibold text-blue'>₹21,199</p>
                            
                            <p className='mt-2 text-sm'>*Exclusive of Taxes</p>
                            <p className='my-4 suited font-bold'>SUITED FOR:</p>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p >Comprehensive services for scrutiny cases, including document review, preparation of responses.</p>
                            </div>
                        <p className='text-sm mt-5'>NOTE: Scrutiny is done by the tax department on a random basis. The filing of income tax
                             returns (ITR) OR the type of sources of income OR type of ITR Form are not related to this process.</p>

                        </div>
                        <div className="get-btn flex justify-center mb-4 w-full rounded-md py-2">
                            <p className='btn-p'>Get Started Now</p>
                        </div>
                    </div>

                    <div className="notice-price p-4 rounded-md  flex flex-col justify-between">
                        <div>
                            <h4 className=' font-semibold mt-2 mb-4'>Calling For Information/Seeking Clarification
                            </h4>
                            
                                <p className='text-4xl font-semibold text-blue'>₹6,399</p>
                               
                            <p className='mt-2 text-sm'>*Exclusive of Taxes</p>
                            <p className='my-4 suited font-bold'>SUITED FOR:</p>
                            <p>Assistance in seeking clarification or providing additional details in response to  :</p>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p >Financial Transactions</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Deductions</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>F&O Trades</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Unreported Income</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Misreported/Underreported Income</p>
                            </div>
                        </div>

                        <div className="get-btn flex justify-center mb-4 w-full rounded-md py-2">
                            <p className='btn-p'>Get Started Now</p>
                        </div>
                    </div>

                    <div className="notice-price p-4 rounded-md  flex flex-col justify-between">
                        <div>

                            <h4 className=' font-semibold mt-2 mb-4'>Scrutiny Cases (ITR Filed By TaxBuddy)</h4>
                           
                            <p className='text-sm text-orange-400'>Starting from</p>
                                <p className='text-4xl font-semibold text-blue'>₹12,699</p>
                              
                            <p className='mt-2 text-sm'>*Exclusive of Taxes</p>
                            <p className='my-4 suited font-bold'>SUITED FOR:</p>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p >Special rate for scrutiny cases where Taxbuddy has already filed the Income Tax Return (ITR) on behalf of the client for that particular A.Y. only</p>
                            </div>
                            <p className='text-sm mt-5'>NOTE: Scrutiny is done by the tax department on a random basis. The filing of income tax returns (ITR)
                                 OR the type of sources of income OR type of ITR Form are not related to this process.</p>
                        </div>

                        <div className="get-btn flex justify-center mb-4 w-full rounded-md py-2">
                            <p className='btn-p'>Get Started Now</p>
                        </div>
                    </div>

                    
                    </div>

                </div>
    </div>
  )
}

export default Notice
