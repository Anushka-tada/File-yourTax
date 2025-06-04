import React from 'react'
import "./tds.css"

const TDS = () => {
    return (
        <div className='page'>
            <div className="tds-section flex flex-col items-center py-28 px-4">
                <h1 className='text-4xl font-semibold mb-8 text-white'>Effortless TDS Return Filing with FileyourTax</h1>
                <div className="tds-points flex flex-col gap-4">
                    <div className="tds-point flex gap-3 items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828739.png" alt="" width={22} />
                        <p className='text-white'>Maximize Savings with Smart Deductions</p>
                    </div>
                    <div className="tds-point flex gap-3 items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828739.png" alt="" width={22} />
                        <p className='text-white'>Seamless TDS Filing Process</p>
                    </div>
                    <div className="tds-point flex gap-3 items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828739.png" alt="" width={22} />
                        <p className='text-white'>Fast Processing &amp; Instant Acknowledgment</p>
                    </div>
                    <div className="tds-point flex gap-3 items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828739.png" alt="" width={22} />
                        <p className='text-white'>Expert Assistance Anytime, Anywhere</p>
                    </div>

                    <div className="tds-btn flex py-2 justify-center rounded-md mt-3">
                        <p>Start Your TDS Filing Today</p>
                    </div>
                </div>
            </div>

            <div className="eligible-section py-20 flex justify-center "  >
                <div className="eligible-inner flex flex-col items-center">
                    <h1 className='font-semibold text-4xl mb-9'>Eligibility Criteria for TDS Return Filing</h1>
                    <div>
                        <p className='eligible-para mb-5'><span className='font-bold'>FileyourTax</span> provides comprehensive online TDS return filing services to a broad spectrum of
entities. This includes employers and organizations holding a valid TAN. Additionally, individuals
subject to audit under Section 44AB, as well as officials in government offices or companies, are
obligated to file quarterly TDS returns electronically.</p>

                        <p className='eligible-para mb-5'><span className='font-bold'>FileyourTax</span> caters to various deductors, ranging from individuals and groups of individuals to Hindu
Undivided Families (HUFs), private limited companies, local authorities, associations of individuals,
partnership firms, and others.</p>

                        <p className='eligible-para mb-5'>According to the Income Tax Act (ITA), TDS provisions apply to multiple types of payments,
including...</p>

                    </div>
                    <div className="eligible-points flex flex-nowrap justify-center gap-7  mt-10">
                        <div className="eligible-point px-7 flex justify-center items-center">
                            <p>Salary income</p>
                        </div>
                        <div className="eligible-point px-7 flex justify-center items-center">
                            <p>Income on securities</p>
                        </div>
                        <div className="eligible-point px-7 flex justify-center items-center">
                            <p>Insurance commissions</p>
                        </div>
                        <div className="eligible-point px-7 flex justify-center items-center">
                            <p>Payouts towards NSC</p>
                        </div>
                        <div className="eligible-point px-7 flex justify-center items-center">
                            <p>Earnings from winning horse races, lotteries, puzzles, and similar sources.</p>
                        </div>
                    </div>

                    <div className="tds-btn flex py-3 justify-center rounded-md mt-9">
                        <p>Submit TDS Return </p>
                    </div>
                </div>
            </div>

            <div className="deducted-section flex flex-col items-center py-16 px-4 ">
                <div className='flex flex-wrap gap-4 items-center justify-center text-center mb-8 '>
                    <img src="https://static.wixstatic.com/media/5ef7f2_e68c880a6a314a358e500302224f3b0a~mv2.png/v1/fill/w_75,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/TDS_black.png" alt="" />
                    <h1 className='text-5xl font-semibold'>Tax Deducted at Source (TDS)</h1>
                </div>
                <p>Ensure accurate tax deduction, maintain comprehensive documentation, and file your TDS returns
promptly.</p>

                <div className="all-pricings  p-5 mt-7 flex justify-center  gap-3 flex-wrap ">
                    <div className="pricing p-4  flex flex-col justify-between rounded-md bg-white">
                        <div>
                          
                           <h4 className='text-xl font-semibold mt-3 mb-2 pb-3 border-b'>
                           26 QB (TDS on Sale of property)</h4>
                           
                           
                                <p className='text-5xl font-semibold text-blue mt-3'>₹1,299</p>
                                
                       
                            <p className='mt-3 text-sm'>*Exclusive of Taxes</p>
                        
                            <div className='flex gap-3 mt-4 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>TDS on Property Transactions</p>
                            </div>
                            <div className='flex gap-3 mt-4 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Legal Requirement</p>
                            </div>
                            <div className='flex gap-3 mt-4 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Transparency</p>
                            </div>
                            <div className='flex gap-3 mt-4 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Avoiding Penalties</p>
                            </div>

                        </div>
                        <div className="get-btn flex justify-center mb-4 w-full rounded-md py-2">
                            <p className='btn-p'>I am Interested</p>
                        </div>
                    </div>


                    <div className="pricing p-4 rounded-md  flex flex-col justify-between bg-white">
                        <div>
                            <h4 className='text-xl font-semibold mt-3 mb-4 mb-2 pb-3 border-b'>Demand Payment for TDS on Property</h4>

                                <p className='text-5xl font-semibold text-blue'>₹1,299</p>
                               
                            <p className='mt-3 text-sm'>*Exclusive of Taxes</p>
                            
                            <div className='flex gap-3 mt-4 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm' >Fulfilling Legal Obligations</p>
                            </div>
                            <div className='flex gap-3 mt-4 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Financial Fairness</p>
                            </div>
                            <div className='flex gap-3 mt-4 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Transparency</p>
                            </div>
                            <div className='flex gap-3 mt-4 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Documentation and Records</p>
                            </div>
                        </div>

                        <div className="get-btn flex justify-center mb-4 mt-4 w-full rounded-md py-2">
                            <p className='btn-p'>I am Interested</p>
                        </div>
                    </div>


                    <div className="pricing p-4 rounded-md  flex flex-col justify-between bg-white">
                        <div>
                            <h4 className='text-xl font-semibold mt-3 mb-2 pb-3 border-b '>
                            26 QC (TDS on Rent of Property)</h4>                
                                <p className='text-5xl font-semibold text-blue'>₹1,299</p>
                              
                            <p className='mt-3 text-sm'>*Exclusive of Taxes</p>
                         
                            <div className='flex gap-3 mt-4 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>TDS on property Transactions</p>
                            </div>
                            <div className='flex gap-3 mt-4 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Legal Requirements</p>
                            </div>
                            <div className='flex gap-3 mt-4 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Transparency</p>
                            </div>
                            <div className='flex gap-3 mt-4 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Avoiding Penalties</p>
                            </div>
                            
                        </div>

                        <div className="get-btn flex justify-center mb-4 w-full rounded-md py-2">
                            <p className='btn-p'>I am Interested</p>
                        </div>
                    </div>


                    <div className="pricing p-4 rounded-md  flex flex-col justify-between bg-white">
                        <div>
                            <h4 className='text-xl font-semibold mt-3 mb-2 pb-3 border-b'> Demand Payment for TDS on Rent of Property</h4>
                                <p className='text-5xl font-semibold text-blue'>₹1,299</p>
                            
                            <p className='mt-3 text-sm'>*Exclusive of Taxes</p>
                          
                            <div className='flex gap-3 mt-4 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm' >Fulfilling Legal Obligations</p>
                            </div>
                            <div className='flex gap-3 mt-4 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Financial Fairness</p>
                            </div>
                            <div className='flex gap-3 mt-4 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Transparency</p>
                            </div>
                            <div className='flex gap-3 mt-4 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Documentation and Records</p>
                            </div>
                        </div>

                        <div className="get-btn flex justify-center mb-4 mt-3 w-full rounded-md py-2">
                            <p className='btn-p'>I am Interested</p>
                        </div>
                    </div>
                      

                </div>

            </div>

            <div className="certificate-section flex flex-col items-center py-16 px-40">
                <h1 className='text-5xl font-semibold'>What is a TDS Certificate?</h1>
            <div className="certificates flex flex-wrap gap-7 justify-center mt-14">
                <div className="certificate p-4 flex flex-col items-center justify-center gap-2">
                    <img src="https://static.wixstatic.com/media/5ef7f2_8211b2d01a444993b58d4a289f54906b~mv2.png/v1/fill/w_64,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Flexible-working-condition.png" alt="" width={45} />
                    <h2 className='font-bold'> Significance of TDS Certificates</h2>
                    <p className='text-sm' >Issuing a TDS Certificate after deducting tax is mandatory. It facilitates easy validation of tax credits
for the deductee through an authentic certificate issued by TRACES.</p>
                </div>
                <div className="certificate p-4 flex flex-col items-center justify-center gap-2">
                    <img src="https://static.wixstatic.com/media/5ef7f2_504dc95375a54eedbdf35f200bbb3587~mv2.png/v1/fill/w_48,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cutting-edge-tools.png" alt=""width={45} />
                    <h2 className='font-bold'>Key Features of TDS Certificates</h2>
                    <p className='text-sm'>TDS Certificates from TRACES include a unique 7-digit certificate number and a watermark, ensuring
their authenticity and security.</p>
                </div>
                <div className="certificate p-4 flex flex-col items-center justify-center gap-2">
                    <img src="https://static.wixstatic.com/media/42bffb_1de272f97f8d478c82a03c111675e3fb~mv2.png/v1/fill/w_54,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/file.png" alt=""width={45} />
                    <h2 className='font-bold'>FileyourTax Stresses the Importance of Safe-Keeping     </h2>
                    <p className='text-sm'>At FileyourTax, we emphasize the importance of maintaining TDS certificates carefully. Proper
record-keeping is vital for a hassle-free tax compliance journey.</p>
                </div>
                <div className="certificate p-4 flex flex-col items-center justify-center gap-2" >
                    <img src="https://static.wixstatic.com/media/42bffb_f4eda59fd4d04bf5b0390d3f422d151f~mv2.png/v1/fill/w_51,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/tax%20(1).png" alt=""width={45} />
                    <h2 className='font-bold'>TDS Certificate Issuance Schedule</h2>
                    <p className='text-sm'>Certificates for non-salary deductions are issued quarterly, while those for salary deductions are
provided annually.</p>
                </div>
                <div className="certificate p-4 flex flex-col items-center justify-center gap-2">
                    <img src="https://static.wixstatic.com/media/42bffb_602c881f621f47ce86ad67fccbf61013~mv2.png/v1/fill/w_64,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/online-support%20(1).png" alt="" width={45} />
                    <h2 className='font-bold'>Professional Support for Seamless Tax Compliance</h2>
                    <p className='text-sm'>FileyourTax offers expert assistance to ensure deductees have all required documentation, making
tax compliance smooth and stress-free.</p>
                </div>
            </div>

            <div className="tds-btn flex py-3 justify-center rounded-md mt-9">
                        <p>Secure and Reliable TDS Filing</p>
                    </div>
            </div>
        </div>
    )
}

export default TDS
