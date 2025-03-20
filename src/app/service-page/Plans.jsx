import React from 'react'
import "../pricing/pricing.css"

const Plans = () => {
    return (
        <div>
            <div className="pricing-page flex flex-col items-center xl:mx-40 lg:mx-32 md:mx-20 sm:mx-16 mx-3 my-7 px-8 rounded-lg py-6 ">
                <h1 className='font-bold text-4xl pricing-heading my-5'>Choose Tailored Plans to Get Your IT Returns</h1>
                <div className="all-pricings  p-5 flex justify-center  gap-3 flex-wrap ">
                    <div className="pricing p-4  flex flex-col justify-between rounded-md">
                        <div>
                            <img src="https://static.wixstatic.com/media/5ef7f2_8167bc6880984aa3a282d970e1f197a3~mv2.png/v1/fill/w_26,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/account_balance_wallet.png" alt="" />
                            <h4 className='text-xl font-semibold mt-2 mb-4'> Salary + 1 House property Plan</h4>
                            <div className="price flex gap-3 items-center">
                                <p className='text-5xl font-semibold text-blue'>₹999</p>
                                <p className='text-sm'>/Year</p>
                            </div>
                            <p className='mt-2 text-sm'>*Exclusive of Taxes</p>
                            <p className='my-4 suited font-bold'>SUITED FOR:</p>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p >Single & Multiple Employers</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Single House Property</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Income from Other Sources</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Agriculture Income</p>
                            </div>

                        </div>
                        <div className="get-btn flex justify-center mb-4 w-full rounded-md py-2">
                            <p className='btn-p'>Get Started Now</p>
                        </div>
                    </div>


                    <div className="pricing p-4 rounded-md  flex flex-col justify-between">
                        <div>
                            <img src="https://static.wixstatic.com/media/5ef7f2_8167bc6880984aa3a282d970e1f197a3~mv2.png/v1/fill/w_26,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/account_balance_wallet.png" alt="" />
                            <h4 className='text-xl font-semibold mt-2 mb-4'>
                                Salary + more than 1 House property</h4>
                            <div className="price flex gap-3 items-center">
                                <p className='text-5xl font-semibold text-blue'>₹1,099</p>
                                <p className='text-sm'>/Year</p>
                            </div>
                            <p className='mt-2 text-sm'>*Exclusive of Taxes</p>
                            <p className='my-4 suited font-bold'>SUITED FOR:</p>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p >Single & Multiple Employers</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Multiple House Property</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Income from Other Sources</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Agriculture Income</p>
                            </div>
                        </div>

                        <div className="get-btn flex justify-center mb-4 w-full rounded-md py-2">
                            <p className='btn-p'>Get Started Now</p>
                        </div>
                    </div>


                    <div className="pricing p-4 rounded-md  flex flex-col justify-between">
                        <div>
                            <img src="https://static.wixstatic.com/media/5ef7f2_8167bc6880984aa3a282d970e1f197a3~mv2.png/v1/fill/w_26,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/account_balance_wallet.png" alt="" />
                            <h4 className='text-xl font-semibold mt-2 mb-4'>
                                Business & Professional Plan</h4>
                            <div className="price flex gap-3 items-center">
                                <p className='text-5xl font-semibold text-blue'>₹2,499</p>
                                <p className='text-sm'>/Year</p>
                            </div>
                            <p className='mt-2 text-sm'>*Exclusive of Taxes</p>
                            <p className='my-4 suited font-bold'>SUITED FOR:</p>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p >Single & Multiple Employers</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Single & Multiple House Property</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Business & Professional Income (Non Audit) - Without B/S P/L*</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Income from Other Sources</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Agriculture Income</p>
                            </div>
                        </div>

                        <div className="get-btn flex justify-center mb-4 w-full rounded-md py-2">
                            <p className='btn-p'>Get Started Now</p>
                        </div>
                    </div>


                    <div className="pricing p-4 rounded-md  flex flex-col justify-between">
                        <div>
                            <img src="https://static.wixstatic.com/media/5ef7f2_8167bc6880984aa3a282d970e1f197a3~mv2.png/v1/fill/w_26,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/account_balance_wallet.png" alt="" />
                            <h4 className='text-xl font-semibold mt-2 mb-4'>
                                Capital Gain Plan</h4>
                            <div className="price flex gap-3 items-center">
                                <p className='text-5xl font-semibold text-blue'>₹2,999</p>
                                <p className='text-sm'>/Year</p>
                            </div>
                            <p className='mt-2 text-sm'>*Exclusive of Taxes</p>
                            <p className='my-4 suited font-bold'>SUITED FOR:</p>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p >Single & Multiple Employers</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Single & Multiple House Property</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Multiple Capital Gain Income</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Business & Professional Income (Non Audit) - Without B/S P/L*</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Income from Other Sources</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Agriculture Income</p>
                            </div>
                        </div>

                        <div className="get-btn flex justify-center mb-4 mt-3 w-full rounded-md py-2">
                            <p className='btn-p'>Get Started Now</p>
                        </div>
                    </div>


                </div>

                <div className="all-pricing2 p-5 flex justify-center gap-3 flex-wrap">

                    <div className="pricing-2 p-4 rounded-md  flex flex-col justify-between">
                        <div>
                            <img src="https://static.wixstatic.com/media/5ef7f2_8167bc6880984aa3a282d970e1f197a3~mv2.png/v1/fill/w_26,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/account_balance_wallet.png" alt="" />
                            <h4 className='text-xl font-semibold mt-2 mb-4'>
                                Future & Options Plan</h4>
                            <div className="price flex gap-3 items-center">
                                <p className='text-5xl font-semibold text-blue'>₹4,499</p>
                                <p className='text-sm'>/Year</p>
                            </div>
                            <p className='mt-2 text-sm'>*Exclusive of Taxes</p>
                            <p className='my-4 suited font-bold'>SUITED FOR:</p>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p >F&O Income/Loss (Non Audit)</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Speculative Income</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Single & Multiple Employers</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Single & Multiple House Property</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Multiple Capital Gain Income</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Income from Other Sources</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Business & Professional Income(Non Audit)- Without B/S P/L*</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Agriculture Income</p>
                            </div>
                        </div>

                        <div className="get-btn flex justify-center mb-4 mt-6 w-full rounded-md py-2 ">
                            <p className='btn-p'>Get Started Now</p>
                        </div>
                    </div>   

                    <div className="pricing-2 p-4 rounded-md  flex flex-col justify-between">
                        <div>
                            <img src="https://static.wixstatic.com/media/5ef7f2_8167bc6880984aa3a282d970e1f197a3~mv2.png/v1/fill/w_26,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/account_balance_wallet.png" alt="" />
                            <h4 className='text-xl font-semibold mt-2 mb-4'>
                            Crypto Currency Plan</h4>
                            <div className="price flex gap-3 items-center">
                                <p className='text-5xl font-semibold text-blue'>₹4,499</p>
                                <p className='text-sm'>/Year</p>
                            </div>
                            <p className='mt-2 text-sm'>*Exclusive of Taxes</p>
                            <p className='my-4 suited font-bold'>SUITED FOR:</p>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p >Crypto Income</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>F&O Income/Loss(Non Audit)</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Speculative Income</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Single & Multiple Employers</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Single & Multiple House Property</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Multiple Capital Gain Income</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Business & Professional Income(Non Audit)- Without B/S P/L*</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Income from Other Sources</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Agriculture Income</p>
                            </div>
                        </div>

                        <div className="get-btn flex justify-center mb-4 mt-6 w-full rounded-md py-2 ">
                            <p className='btn-p'>Get Started Now</p>
                        </div>
                    </div>


                    <div className="pricing-2 p-4 rounded-md  flex flex-col justify-between">
                        <div>
                            <img src="https://static.wixstatic.com/media/5ef7f2_8167bc6880984aa3a282d970e1f197a3~mv2.png/v1/fill/w_26,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/account_balance_wallet.png" alt="" />
                            <h4 className='text-xl font-semibold mt-2 mb-4'>
                               NRI/Resident Having Foreign Income</h4>
                            <div className="price flex gap-3 items-center">
                                <p className='text-5xl font-semibold text-blue'>₹4,499</p>
                                <p className='text-sm'>/Year</p>
                            </div>
                            <p className='mt-2 text-sm'>*Exclusive of Taxes</p>
                            <p className='my-4 suited font-bold'>SUITED FOR:</p>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p >Foreign salary(Including Foreign Tax relief)</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>DTAA Tax Relief</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Single & Multiple Employers</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Single & Multiple House Property</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Multiple Capital Gain Income</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>RSU/ESOP</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Business & Professional Income(Non Audit)- Without B/S P/L*</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>RSU/ESOP</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>F&O Income/Loss(Non Audit)</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Speculative Income</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Income from Other Sources</p>
                            </div>
                            <div className='flex gap-3 mt-2 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p>Agriculture Income</p>
                            </div>
                        </div>

                        <div className="get-btn flex justify-center mb-4 mt-6 w-full rounded-md py-2 ">
                            <p className='btn-p'>Get Started Now</p>
                        </div>
                    </div>


                </div>

               <div className='flex flex-col items-center text-center my-10  xl:mx-40 lg:mx-32 md:mx-20 sm:mx-16 mx-3 gap-2'>
               <p className='text-xl font-semibold'>*For Balance sheet & P/L / Attestation: ₹1000</p>
                <p className='text-xl font-semibold'>*If you have received any arrears and want to claim relief then need to pay Rs. 499 over and above on mentioned plans</p>
                <p className='text-xl font-semibold'>*18% GST will be applicable to the base plan amount</p>
               </div>
            </div>

        </div>
    )
}

export default Plans
