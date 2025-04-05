

import React from 'react'


const TaxPlanning = () => {
    return (
        <div>
            <div className="itr-section flex  flex-wrap  gap-5 items-center justify-center">
                <div className='p-2'> 
                    <h2 className='text-3xl font-semibold text-white mb-3'>Tax Planner</h2>
                    <p className=' text-white text-sm itr-para'>Personalized tax planning assistance to individuals and
                        businesses by a team of qualified and credible tax experts.</p>

                </div>

                <div className='flex flex-wrap justify-center itr-inner gap-4 p-2'>
                <div className="flex gap-2 items-center ">
                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                    <p className='text-lg text-white'>Expert-driven tax planning</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                    <p className='text-lg text-white'>In-depth tax report </p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                    <p className='text-lg text-white'>Reduce tax liabilities</p>
                    </div>
                </div>
            </div>
            {/* Basic Tax Planner      */}

            <div className="basic-tax-section flex  flex-col items-center  xl:px-56 lg:px-52 md:px-32 sm:px-16 px-4 py-20">

                <h1 className='text-4xl font-semibold mb-8'>Basic Tax Planner</h1>
                <div className="basic-tax-planner bg-white p-10 ">
                    <div className='flex gap-8 xl:flex-nowrap lg:flex-nowrap md:flex-nowrap flex-wrap items-start'>
                        <div className=''>
                            <p className='text-4xl font-bold text-blue'>₹299</p>
                            <div className='flex gap-1 items-center'><p className='text-4xl font-bold truncate'>₹499</p> <p className='font-semibold'>/Year</p></div>
                            <p className='text-sm'>*Exclusive of Taxes</p>
                        </div>

                        <div >
                            <div className='flex gap-3 mb-3'>
                                <img src="https://static.wixstatic.com/media/5ef7f2_8167bc6880984aa3a282d970e1f197a3~mv2.png/v1/fill/w_20,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/account_balance_wallet.png" alt="" />
                                <p className='text-xl font-semibold'>Tax planning (DIY)</p>
                            </div>
                            <h4 className='text-sm font-semibold'>Maximize your financial potential with TaxBuddy - your exclusive access to tax planning resources.</h4>
                        </div>
                    </div>

                    <div className="plan-btn w-full flex justify-center py-2 mt-5">
                        <p className='btn-p'>Start Tax Planning</p>
                    </div>

                </div>
            </div>


            {/* Advance Tax Planner Plans */}

            <div className="advance-tax-section flex flex-col items-center px-8 rounded-lg py-6">

                <h1 className='text-4xl font-semibold mb-8 '>Advance Tax Planner Plans</h1>
                <div className='xl:mx-72 lg:mx-32 md:mx-20 sm:mx-16 mx-3 mb-10 flex flex-col items-center'>
                    <p>Our dedicated team of professionals provides personalized assistance to individuals and businesses, helping you:</p>
                    <div className='flex gap-10 mt-8 flex-wrap lg:flex-nowrap xl:flex-nowrap'>
                        <div className='flex gap-3'>
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                            <p>n-depth tax report based on your investments</p>
                        </div>
                        <div className='flex gap-3'>
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                            <p>Every potential tax saving investment options</p>
                        </div>

                        <div className='flex gap-3'>
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                            <p>All types of tax planning in one place (Individual, Business, NRI, Capital Gain)</p>
                        </div>
                    </div>

                </div>

                <div className="all-pricings  p-5 flex justify-center  gap-3 flex-wrap ">
                    <div className="pricing p-4  flex flex-col justify-between rounded-md bg-white">
                        <div>
                            <div className='flex gap-2 items-center'>
                                <img src="https://static.wixstatic.com/media/5ef7f2_8167bc6880984aa3a282d970e1f197a3~mv2.png/v1/fill/w_26,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/account_balance_wallet.png" alt="" className='tax-image' />
                                <h4 className='text-xl font-semibold mt-3 mb-4'> TaxSaver Pro</h4>
                            </div>

                            <p className='text-5xl font-semibold text-blue mt-3'>₹1,699</p>


                            <p className='mt-3 text-sm'>*Exclusive of Taxes</p>

                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>For salaried taxpayers</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Old v New tax regime: Which is best for you?</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Increase saving by salary restructuring</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Tax saving opportunities suited to your goals</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Bifurcation of HRA calculation</p>
                            </div>

                        </div>
                        <div className="get-btn flex justify-center mb-4 w-full rounded-md py-2">
                            <p className='btn-p'>Buy Now</p>
                        </div>
                    </div>


                    <div className="pricing p-4 rounded-md  flex flex-col justify-between bg-white">
                        <div>
                            <div className='flex gap-2 items-center'>
                                <img src="https://static.wixstatic.com/media/5ef7f2_8167bc6880984aa3a282d970e1f197a3~mv2.png/v1/fill/w_26,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/account_balance_wallet.png" alt="" className='tax-image' />
                                <h4 className='text-xl font-semibold mt-3 mb-4'>
                                    TaxSaver Advance</h4>
                            </div>

                            <p className='text-5xl font-semibold text-blue'>₹2,599</p>

                            <p className='mt-3 text-sm'>*Exclusive of Taxes</p>

                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm' >For taxpayers with income other than salary</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Sold a property? Get solutions against capital gains</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Tax calculation and saving opportunities based on your tax slab</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Tax loss harvesting solutions</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Advance Tax calculation</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Personalized tax saving options for business income</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Bifurcation of HRA calculation</p>
                            </div>
                        </div>

                        <div className="get-btn flex justify-center mb-4 mt-4 w-full rounded-md py-2">
                            <p className='btn-p'>Buy Now</p>
                        </div>
                    </div>


                    <div className="pricing p-4 rounded-md  flex flex-col justify-between bg-white">
                        <div>
                            <div className='flex gap-2 items-center'>
                                <img src="https://static.wixstatic.com/media/5ef7f2_8167bc6880984aa3a282d970e1f197a3~mv2.png/v1/fill/w_26,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/account_balance_wallet.png" alt="" className='tax-image' />
                                <h4 className='text-xl font-semibold mt-3 mb-4'>
                                    Advance Tax calculation</h4>
                            </div>

                            <p className='text-5xl font-semibold text-blue'>₹899</p>

                            <p className='mt-3 text-sm'>*Exclusive of Taxes</p>

                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Advance tax calculation based on source of income</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Quarterly review</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Assistance with Challan payment</p>
                            </div>

                        </div>

                        <div className="get-btn flex justify-center mb-4 w-full rounded-md py-2">
                            <p className='btn-p'>Buy Now</p>
                        </div>
                    </div>


                    <div className="pricing p-4 rounded-md  flex flex-col justify-between bg-white">
                        <div>
                            <div className='flex gap-2 items-center'>
                                <img src="https://static.wixstatic.com/media/5ef7f2_8167bc6880984aa3a282d970e1f197a3~mv2.png/v1/fill/w_26,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/account_balance_wallet.png" alt="" className='tax-image' />
                                <h4 className='text-xl font-semibold mt-3 mb-4'>
                                    TaxSaver NRI</h4>
                            </div>

                            <p className='text-5xl font-semibold text-blue'>₹4,199</p>

                            <p className='mt-3 text-sm'>*Exclusive of Taxes</p>

                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm' >Guidance for taxation on foreign investments</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Tax implications on NRO/NRE account</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Applicability of  DTAA provisions</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Optimizing tax strategies for managing RSU/ESOP including advance tax calculations on sale</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p className='text-sm'>Understanding residential status as per Indian law</p>
                            </div>
                        </div>

                        <div className="get-btn flex justify-center mb-4 mt-3 w-full rounded-md py-2">
                            <p className='btn-p'>Buy Now</p>
                        </div>
                    </div>


                </div>

                <p className='text-xl font-semibold my-8'>For Balance Sheet, Profit & Loss Statement, and Attestation: ₹1000. </p>
            </div>
        </div>
    )
}

export default TaxPlanning
