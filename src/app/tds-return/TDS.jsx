import React from 'react'
import "./tds.css"

const TDS = () => {
    return (
        <div>
            <div className="tds-section flex flex-col items-center py-28 px-4">
                <h1 className='text-4xl font-semibold mb-8 text-white'>Seamless TDS return filing by TaxBuddy</h1>
                <div className="tds-points flex flex-col gap-4">
                    <div className="tds-point flex gap-3 items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828739.png" alt="" width={22} />
                        <p className='text-white'>Optimized Deductions for Maximum Savings</p>
                    </div>
                    <div className="tds-point flex gap-3 items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828739.png" alt="" width={22} />
                        <p className='text-white'>Effortless TDS Submission</p>
                    </div>
                    <div className="tds-point flex gap-3 items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828739.png" alt="" width={22} />
                        <p className='text-white'>Swift Processing and Confirmation</p>
                    </div>
                    <div className="tds-point flex gap-3 items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828739.png" alt="" width={22} />
                        <p className='text-white'>Expert Support at Your Fingertips</p>
                    </div>

                    <div className="tds-btn flex py-2 justify-center rounded-md mt-3">
                        <p>File TDS Return Now</p>
                    </div>
                </div>
            </div>

            <div className="eligible-section py-20 flex justify-center "  >
                <div className="eligible-inner flex flex-col items-center">
                    <h1 className='font-semibold text-4xl mb-9'>WHO IS ELIGIBLE FOR TDS RETURN FILING?</h1>
                    <div>
                        <p className='eligible-para mb-5'>TaxBuddy extends its TDS return filing online services to a diverse range of entities. Eligible entities include employers
                            and organizations holding a valid TAN. Individuals subject to audit under Section 44AB and holding positions in government
                            offices or companies are mandated to file online TDS returns on a quarterly basis.</p>

                        <p className='eligible-para mb-5'>TaxBuddy accommodates various deductors, ranging from individuals and groups of individuals to HUFs, limited companies,
                            local authorities, associations of individuals, partnership firms, and more.</p>

                        <p className='eligible-para mb-5'>According to the Income Tax Act (ITA), TDS is applicable to various payouts, including</p>

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
                <p>Deduct the right amount of tax, maintain proper documentation, and submit your TDS returns</p>

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
                    <h2 className='font-bold'> TDS Certificate Importance:</h2>
                    <p className='text-sm' >After deducting TDS, it is essential for the deductor to furnish a TDS Certificate. Validating tax credits becomes 
                        easy for the deductee with a legitimate TDS Certificate from TRACES.</p>
                </div>
                <div className="certificate p-4 flex flex-col items-center justify-center gap-2">
                    <img src="https://static.wixstatic.com/media/5ef7f2_504dc95375a54eedbdf35f200bbb3587~mv2.png/v1/fill/w_48,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cutting-edge-tools.png" alt=""width={45} />
                    <h2 className='font-bold'>TDS Certificate Features:</h2>
                    <p className='text-sm'>TDS Certificates from TRACES feature a unique 7-digit certificate number. They also include a TRACES watermark for authenticity.</p>
                </div>
                <div className="certificate p-4 flex flex-col items-center justify-center gap-2">
                    <img src="https://static.wixstatic.com/media/42bffb_1de272f97f8d478c82a03c111675e3fb~mv2.png/v1/fill/w_54,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/file.png" alt=""width={45} />
                    <h2 className='font-bold'>TaxBuddy's Emphasis on Preservation                    </h2>
                    <p className='text-sm'>TaxBuddy emphasizes the importance of preserving TDS certificates diligently. Proper documentation is crucial for deductees
                         for a smooth tax journey.</p>
                </div>
                <div className="certificate p-4 flex flex-col items-center justify-center gap-2" >
                    <img src="https://static.wixstatic.com/media/42bffb_f4eda59fd4d04bf5b0390d3f422d151f~mv2.png/v1/fill/w_51,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/tax%20(1).png" alt=""width={45} />
                    <h2 className='font-bold'>Issuance Frequency for TDS Certificates:                    </h2>
                    <p className='text-sm'>TDS certificates for non-salary payments are issued quarterly. Those related to salary payments are provided annually.</p>
                </div>
                <div className="certificate p-4 flex flex-col items-center justify-center gap-2">
                    <img src="https://static.wixstatic.com/media/42bffb_602c881f621f47ce86ad67fccbf61013~mv2.png/v1/fill/w_64,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/online-support%20(1).png" alt="" width={45} />
                    <h2 className='font-bold'>Expert Support for a Hassle-Free Tax Journey:</h2>
                    <p className='text-sm'>TaxBuddy provides expert support to ensure deductees have the necessary documentation for a hassle-free tax journey.</p>
                </div>
            </div>

            <div className="tds-btn flex py-3 justify-center rounded-md mt-9">
                        <p>Secure TDS Filing </p>
                    </div>
            </div>
        </div>
    )
}

export default TDS
