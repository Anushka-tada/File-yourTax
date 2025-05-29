import React from 'react'
import "./service.css"
import Plans from './Plans'

const Service = () => {
    return (
        <>


            {/* Income Tax Return Filing: */}
            <div className='outer-div flex justify-center'>
                <div className="return-filling flex flex-col xl:items-start lg:items-start md:items-center sm:items-center items-center ps-5">
                    <div className='flex flex-col items-start'>
                        <h2 className='text-4xl font-bold  mb-2 mt-10 text-sky-500'>Income Tax Return Filing:</h2>
                        <h2 className='text-4xl font-bold text-white'>Ensuring Smooth and Timely Compliance</h2>
                    </div>

                    <div className='flex justify-center flex-wrap lg:flex-nowrap gap-8 items-center mt-10 pb-9'>
                        <div className="points  flex flex-col gap-5">
                            <div className="point flex gap-2">
                                <img src="https://media-hosting.imagekit.io//fe368cbd174a42cc/correct.png?Expires=1837059653&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PBESMvACqx8yKRW8XIb~gWzW1UlBKK8e7pYQQudQ35euwoEWKhY7J4w0k~waJbosnoDPXiptEf2sCtOnTWWksrinj9xvIzuvtluZT4zcv1S2DrH3i0dgYEzmrrxldK8yZwUVQwjLR7JvECMLVx~Xk6YHBRmIQWR8S27BLosbVMr4cu0Sq5ydyhSPvWZO5nhkjeIxLI5ukwyMhZBB5bFphBV7Ufc9NoBhG0E3oUPMsASaerhwXmjG0k~20Z9fZXaEHBl7tmYR9kGMyKhRJQL2NVWQ6Luvs~SygqpKRL0gw~VJ7M3d1cWe6lOKNvXeFSS80AdKfBRPS6azA6MwYcfrXg__" alt="" className='image' />
                                <p className='text-xl font-semibold text-white'>File your ITR effortlessly with a smooth, guided process.</p>
                            </div>
                            <div className="point flex gap-2">
                                <img src="https://media-hosting.imagekit.io//fe368cbd174a42cc/correct.png?Expires=1837059653&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PBESMvACqx8yKRW8XIb~gWzW1UlBKK8e7pYQQudQ35euwoEWKhY7J4w0k~waJbosnoDPXiptEf2sCtOnTWWksrinj9xvIzuvtluZT4zcv1S2DrH3i0dgYEzmrrxldK8yZwUVQwjLR7JvECMLVx~Xk6YHBRmIQWR8S27BLosbVMr4cu0Sq5ydyhSPvWZO5nhkjeIxLI5ukwyMhZBB5bFphBV7Ufc9NoBhG0E3oUPMsASaerhwXmjG0k~20Z9fZXaEHBl7tmYR9kGMyKhRJQL2NVWQ6Luvs~SygqpKRL0gw~VJ7M3d1cWe6lOKNvXeFSS80AdKfBRPS6azA6MwYcfrXg__" alt="" className='image' />
                                <p className='text-xl font-semibold text-white'>Unlock maximum tax savings with smart optimization.</p>
                            </div>
                            <div className="point flex gap-2">
                                <img src="https://media-hosting.imagekit.io//fe368cbd174a42cc/correct.png?Expires=1837059653&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PBESMvACqx8yKRW8XIb~gWzW1UlBKK8e7pYQQudQ35euwoEWKhY7J4w0k~waJbosnoDPXiptEf2sCtOnTWWksrinj9xvIzuvtluZT4zcv1S2DrH3i0dgYEzmrrxldK8yZwUVQwjLR7JvECMLVx~Xk6YHBRmIQWR8S27BLosbVMr4cu0Sq5ydyhSPvWZO5nhkjeIxLI5ukwyMhZBB5bFphBV7Ufc9NoBhG0E3oUPMsASaerhwXmjG0k~20Z9fZXaEHBl7tmYR9kGMyKhRJQL2NVWQ6Luvs~SygqpKRL0gw~VJ7M3d1cWe6lOKNvXeFSS80AdKfBRPS6azA6MwYcfrXg__" alt="" className='image' />
                                <p className='text-xl font-semibold text-white'>Enjoy fast processing and instant filing confirmation.</p>
                            </div>
                            <div className="point flex gap-2">
                                <img src="https://media-hosting.imagekit.io//fe368cbd174a42cc/correct.png?Expires=1837059653&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PBESMvACqx8yKRW8XIb~gWzW1UlBKK8e7pYQQudQ35euwoEWKhY7J4w0k~waJbosnoDPXiptEf2sCtOnTWWksrinj9xvIzuvtluZT4zcv1S2DrH3i0dgYEzmrrxldK8yZwUVQwjLR7JvECMLVx~Xk6YHBRmIQWR8S27BLosbVMr4cu0Sq5ydyhSPvWZO5nhkjeIxLI5ukwyMhZBB5bFphBV7Ufc9NoBhG0E3oUPMsASaerhwXmjG0k~20Z9fZXaEHBl7tmYR9kGMyKhRJQL2NVWQ6Luvs~SygqpKRL0gw~VJ7M3d1cWe6lOKNvXeFSS80AdKfBRPS6azA6MwYcfrXg__" alt="" className='image' />
                                <p className='text-xl font-semibold text-white'>Stay protected with advanced data security protocols.</p>
                            </div>
                            <div className="point flex gap-2">
                                <img src="https://media-hosting.imagekit.io//fe368cbd174a42cc/correct.png?Expires=1837059653&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PBESMvACqx8yKRW8XIb~gWzW1UlBKK8e7pYQQudQ35euwoEWKhY7J4w0k~waJbosnoDPXiptEf2sCtOnTWWksrinj9xvIzuvtluZT4zcv1S2DrH3i0dgYEzmrrxldK8yZwUVQwjLR7JvECMLVx~Xk6YHBRmIQWR8S27BLosbVMr4cu0Sq5ydyhSPvWZO5nhkjeIxLI5ukwyMhZBB5bFphBV7Ufc9NoBhG0E3oUPMsASaerhwXmjG0k~20Z9fZXaEHBl7tmYR9kGMyKhRJQL2NVWQ6Luvs~SygqpKRL0gw~VJ7M3d1cWe6lOKNvXeFSS80AdKfBRPS6azA6MwYcfrXg__" alt="" className='image' />
                                <p className='text-xl font-semibold text-white'>Access expert tax help anytime, right at your fingertips.</p>
                            </div>

                            <div className="itr-btn py-2 rounded-md flex justify-center">
                                <p className='itr-btn-p'>ITR Filing without delay</p>
                            </div>
                        </div>

                        {/* <img src="https://static.wixstatic.com/media/5ef7f2_83a8e74e674c401eb5fa58e45adf1d8b~mv2.png/v1/fill/w_584,h_615,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/iPhone13Pro-1.png" alt="" className='mobile-image' /> */}
                    </div>
                </div>
            </div>

            {/* Three convenient ways for ITR Filing */}


            <div className='three-way-section flex flex-col items-center py-20'>
                <h1 className='text-4xl font-semibold mb-5 mx-5'>ITR Filing Made Easy: Pick One of These 3 Convenient Methods</h1>
                <div className="three-ways flex flex-wrap justify-center gap-6 ">
                    <div className="way p-5 bg-white rounded-md flex flex-col gap-3">
                        <h4 className='text-lg font-semibold'>File your ITR securely using a Digital Signature Certificate
(DSC) for faster verification.</h4>
                        <p className='text-sm'>Streamline your e-filing with a
secure Digital Signature Certificate—your trusted digital identity for fast and authentic ITR
submission.</p>
                    </div>

                    <div className="way p-5 bg-white rounded-md flex flex-col gap-3">
                        <h4 className='text-lg font-semibold'>DSC: E-file ITR easily without DSC.</h4>
                        <p className='text-sm'>Opt for hassle-free e-filing without DSC by sending a signed ITR-V to CPC Bangalore within 30 days,
if Aadhaar isn’t linked.</p>
                    </div>

                    <div className="way p-5 bg-white rounded-md flex flex-col gap-3">
                        <h4 className='text-lg font-semibold'>E-file your ITR and verify instantly using Aadhaar OTP or bank details.</h4>
                        <p className='text-sm'>Simplify your e-filing experience by verifying your tax return through your Aadhaar number or
bank account. This eliminates the need to submit the ITR-V form to CPC</p>
                    </div>
                </div>

                <div className='my-8 xl:px-64 lg:px-52 md:px-32 sm:px-16 px-4 '>
                    <p className='mb-4 text-sm'>Ensure a smooth Income Tax Return e-filing by keeping essential documents handy—such as PAN,
Aadhaar linked to PAN, bank details, salary slips, rent receipts, Form 16, interest certificates,
insurance and home loan papers, investment proofs, and evidence of additional income like
property or capital gains.</p>
                    <p className='text-sm'>Relax—there’s no need to stress about the process. Just upload your documents, and our expert
team will take care of everything. We’re your trusted partners, guiding you every step of the way.</p>

                    <div className="get-btn py-2 rounded-md flex justify-center mt-10">
                        <p className='text-white'>Let us get started</p>
                    </div>
                </div>
            </div>

            {/* Explore Tax-Saving Opportunities  */}

            <div className="opportunities-section flex  flex-col  xl:px-56 lg:px-52 md:px-32 sm:px-16 px-4 py-20">
                <div className='text-left flex flex-col items-start'>
                    <h1 className='text-5xl font-semibold mb-5'>Maximize Your Tax Savings During ITR E-Filing</h1>
              
                </div>
                <div className="oppurtunities flex gap-5 flex-wrap lg:flex-nowrap  justify-center items-center mt-10">
                    <div className="opprunity flex flex-col gap-3 ">
                        <p className='text-sm'>1. FileYourTax keeps you up-to-date with the constantly evolving tax deduction landscape.</p>
                        <p className='text-sm'>2. We offer tailored packages designed to suit your specific income type.</p>
                        <p className='text-sm'>3. Our solutions ensure you stay informed about the latest tax provisions.</p>
                        <p className='text-sm'>4. We proactively work to maximize your eligible deductions and savings.</p>
                        <p className='text-sm'>5. With FileYourTax, confidently manage your taxes, maintain your savings momentum, and
meet critical deadlines with ease..</p>

                        <div className="discover-btn py-2 rounded-md flex justify-center mt-10">
                            <p className='text-white'>Explore Your Benefits and Options.</p>
                        </div>
                    </div>

                    <div className="oppotunity-image">
                        <img src="https://static.wixstatic.com/media/5ef7f2_24167713a31b4ac5b978023fec053ebb~mv2.png/v1/fill/w_574,h_464,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/tax-saving.png" alt="" />
                    </div>

                </div>
            </div>

            {/* Choose Tailored Plans to Get Your IT Returns */}

            <Plans />

            {/* Leverage the Benefits of Strategic Return     */}


            <div className="leverage-benefits-section py-20 flex flex-col items-center text-center">
                <h1 className='text-5xl font-semibold mb-5 xl:px-72 lg:px-52 md:px-32 sm:px-16 px-4 '>Maximize the Advantages of Smart
ITR Filing with FileyourTax.</h1>
                <p className='xl:px-72 lg:px-52 md:px-32 sm:px-16 px-4 '>FileyourTax gives you exclusive access to expert tax planning insights, helping you unlock your full
financial potential. Our dedicated team provides personalized guidance for individuals and
businesses, assisting you in:</p>

                <div className="leverage-benefits flex flex-wrap justify-center gap-5 mt-16 ">
                    <div className="benefit bg-white p-6 flex flex-col items-center">
                        <img src="https://static.wixstatic.com/media/5ef7f2_ffa71f31f30d4d8ab903d38c2a27470c~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1st%20icon.png" alt="" />
                        <p className='mt-4'>Generate a detailed tax report based on your investment activities.</p>
                    </div>
                    <div className="benefit bg-white p-6 flex flex-col items-center">
                        <img src="https://static.wixstatic.com/media/5ef7f2_ffa71f31f30d4d8ab903d38c2a27470c~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1st%20icon.png" alt="" />
                        <p className='mt-4'>Receive personalized investment tips to minimize your tax liability.</p>
                    </div>
                    <div className="benefit bg-white p-6 flex flex-col items-center">
                        <img src="https://static.wixstatic.com/media/5ef7f2_ffa71f31f30d4d8ab903d38c2a27470c~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1st%20icon.png" alt="" />
                        <p className='mt-4'>Professional support, personalized for your individual needs.</p>
                    </div >
                    <div className="benefit bg-white p-6 flex flex-col items-center">
                        <img src="https://static.wixstatic.com/media/5ef7f2_ffa71f31f30d4d8ab903d38c2a27470c~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1st%20icon.png" alt="" />
                        <p className='mt-4'>One-stop solution for individual, business, NRI, and capital gain tax planning.</p>
                    </div>
                </div>

                <div className="itr-filling-btn py-2 rounded-md mt-10 cursor-pointer">
                    <p className='text-white'>File Your Income Tax Return Today</p>
                </div>
            </div>

            {/* Hassle-Free Assisted Filing Online */}

            <div className="hasserl-free-section py-20 flex flex-col items-center text-center">
                <h1 className='text-5xl font-semibold mb-5 xl:px-72 lg:px-52 md:px-32 sm:px-16 px-4' >Stress-Free Online Filing with Full Expert Guidance</h1>
                <video width="900" autoPlay loop muted playsInline>

                    <source src="https://video.wixstatic.com/video/42bffb_b7160721c4254c8c94ce04c75df585ae/720p/mp4/file.mp4" type="video/mp4" />
                    Your browser does not support the video tag.

                </video>


            </div>

            {/* Discover Why Early E-Filing ITR Filing is a Smart Move! */}
            <div className='smart-move-section py-20 flex flex-col items-center text-center'>
                <h1 className='text-3xl font-semibold mb-8 xl:px-72 lg:px-52 md:px-32 sm:px-16 px-4 text-white' >Early E-Filing Made Easy – And Worth It!</h1>
                <div className="smart-move-reasons flex gap-5 flex-wrap justify-center  ">
                    <div className="smart-move-reason flex flex-col items-center p-6 rounded-lg">
                        <img src="https://static.wixstatic.com/media/5ef7f2_f6e73e95088c42db8d18a94454e8b9fa~mv2.png/v1/fill/w_51,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1st%20icon.png" alt="" />
                        <h4 className='text-white text-xl font-semibold my-3'>Timely Filing Means Faster Refund Processing</h4>
                        <p className='text-white text-sm'>Timely e-filing speeds up
verification, guaranteeing faster refunds.</p>
                    </div>
                    <div className="smart-move-reason flex flex-col items-center  p-6 rounded-lg">
                        <img src="https://static.wixstatic.com/media/5ef7f2_d5f3e207549f4cbd9c1196ec8d24b8ed~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2nd%20icon.png" alt="" />
                        <h4 className='text-white text-xl font-semibold my-3'> Submit Your Return Without Any Penalties</h4>
                        <p className='text-white text-sm'>Avoid penalties by filing your
taxes accurately and on time.</p>
                    </div>
                    <div className="smart-move-reason flex flex-col items-center  p-6 rounded-lg">
                        <img src="https://static.wixstatic.com/media/5ef7f2_28599c66fd1a4de8821f10151b98822d~mv2.png/v1/fill/w_56,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3rd%20icon.png" alt="" />
                        <h4 className='text-white text-xl font-semibold my-3'>Defective Return Notice: How to Avoid It</h4>
                        <p className='text-white text-sm'>Prevent Defective Return
Notices by filing your taxes accurately.</p>
                    </div>
                    <div className="smart-move-reason flex flex-col items-center  p-6 rounded-lg">
                        <img src="https://static.wixstatic.com/media/5ef7f2_38bf7237a61e430f9a5b087224f0314b~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4th%20icon.png" alt="" />
                        <h4 className='text-white text-xl font-semibold my-3'>Early E-filing Ensures Quick Refunds</h4>
                        <p className='text-white text-sm'>Beat the last-minute tax filing
scramble with ease.</p>
                    </div>
                </div>
            </div>

            {/* Leverage the Advantages of Filing ITR Online */}

            <div className="leverage-advantages ">

                <div className='flex gap-5 flex-wrap xl:flex-nowrap lg:flex-nowrap '>
                    <img src="https://static.wixstatic.com/media/5ef7f2_3973898880f74cd1a304111a4e7d788d~mv2.png/v1/fill/w_634,h_1048,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/5ef7f2_3973898880f74cd1a304111a4e7d788d~mv2.png" alt="" width={500} className='side-image' />
                    <div className="Advantages flex flex-col gap-6 xl:px-40 lg:px-28 md:px-20 sm:px-10 px-4 mt-20">
                        <h1 className='text-4xl font-semibold mb-8 '>Discover the Advantages of Filing Your ITR Online</h1>
                        <div className="advantage flex gap-5 ">
                            <img src="https://cdn-icons-png.flaticon.com/128/13476/13476419.png" alt="" className='num-image' />
                            <div> <h4 className='text-xl font-semibold mb-3'> Assuredly Maximize Your Returns:</h4>
                                <p className='text-sm'>Filing your Income Tax Return (ITR) on time ensures you claim all eligible deductions and
exemptions, helping you optimize your tax savings.</p></div>
                        </div>
                        <div className="advantage flex gap-5">
                            <img src="https://cdn-icons-png.flaticon.com/128/13476/13476422.png" alt="" className='num-image' />
                            <div>
                                <h4 className='text-xl font-semibold mb-3'>Build Financial Credibility:</h4>
                                <p className='text-sm'>Regular ITR filing establishes a financial record that enhances your credibility when applying
for loans or other financial opportunities.</p>
                            </div>
                        </div>
                        <div className="advantage flex gap-5">
                            <img src="https://cdn-icons-png.flaticon.com/128/13476/13476465.png" alt="" className='num-image' />
                            <div>
                                <h4 className='text-xl font-semibold mb-3'>Avoid Penalties Consistently:</h4>
                                <p className='text-sm'>Timely filing helps you stay clear of penalties and legal issues, keeping your tax matters in
good standing.</p>
                            </div>
                        </div>
                        <div className="advantage flex gap-5">
                            <img src="https://cdn-icons-png.flaticon.com/128/13476/13476508.png" alt="" className='num-image' />
                            <div>
                                <h4 className='text-xl font-semibold mb-3'>Track your financial progress</h4>
                                <p className='text-sm'>Your ITR offers valuable insights into your income, expenses, and investments, empowering
you to make well-informed financial decisions.</p>
                            </div>
                        </div>
                        <div className="advantage flex gap-5">
                            <img src="https://cdn-icons-png.flaticon.com/128/13476/13476550.png" alt="" className='num-image' />
                            <div>
                                <h4 className='text-xl font-semibold mb-3'>Expedite visa processing</h4>
                                <p className='text-sm'>A consistent ITR filing history can speed up visa approvals, improving your chances for
international travel and opportunities.</p>
                            </div>
                        </div>
                        <div className="itr-filling-btn py-2 rounded-md mt-6 cursor-pointer flex justify-center mb-6">
                            <p className='text-white'>Start Filing My ITR Now</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Access Valuable Benefits by Filing Your Income Tax Return */}

                 <div className="valuable-benefits-section py-20 flex flex-col items-center text-center">
                    <h1 className='text-4xl font-semibold mb-8 px-4'>Return Enjoy Important Benefits When You File
Your Tax Return</h1>
                   <div className="valuable-benefits flex flex-wrap gap-6 justify-center xl:px-40 lg:px-20 px-5">
                    <div className="value-benefit p-6 flex flex-col gap-4 bg-white">
                        <h4 className='text-xl font-semibold'>Serves as Legal Evidence:</h4>
                        <p>Income Tax Return serves as a legal document, acting as proof in two ways: a) Identity Proof: It is
accepted by government authorities as identity proof for various purposes, including obtaining an
Aadhaar card. b) Income Proof: The ITR contains detailed income and expense information,
serving as income proof for transactions such as property purchases.</p>
                    </div>
                    <div className="value-benefit p-6 flex flex-col gap-4 bg-white">
                        <h4 className='text-xl font-semibold'>Avail Tax Deductions::</h4>
                        <p>Filing an income tax return facilitates the claiming of deductions that effectively reduce your tax
liability, encompassing those arising from investments, tax deducted at source (TDS), and applicable
rebates.</p>
                    </div>
                    <div className="value-benefit p-6 flex flex-col gap-4 bg-white">
                        <h4 className='text-xl font-semibold'>Proof for Loan Applications:</h4>
                        <p>Income tax returns are a vital requirement when applying for loans, as banks and credit card
companies use them to verify income and assess financial stability prior to approval</p>
                    </div>
                    <div className="value-benefit p-6 flex flex-col gap-4 bg-white">
                        <h4 className='text-xl font-semibold'>Necessary Documentation for Overseas Travel</h4>
                        <p>Filing an Income Tax Return is essential when planning to travel abroad, as many countries require it
for visa approval to demonstrate financial history and provide relevant details to the embassy.</p>
                    </div>
                    <div className="value-benefit p-6 flex flex-col gap-4 bg-white">
                        <h4 className='text-xl font-semibold'>Stay Penalty-Free:</h4>
                        <p>Failure to file Income Tax Returns, despite being liable to pay taxes, may result in penalties and legal
consequences. Under the Income Tax Act, 1961, non-compliance can attract penalties of up to
₹5,000, along with other serious repercussions.</p>
                    </div>
                    <div className="value-benefit p-6 flex flex-col gap-4 bg-white">
                        <h4 className='text-xl font-semibold'>Set Off and Carry Forward Losses</h4>
                        <p>The Income-tax Act, 1961 permits the carry forward of losses to subsequent financial years under
Sections 70 and 71, allowing taxpayers to set off such losses against future income and reduce their
tax liability.</p>
                    </div>
                   </div>
                 </div>
                    

        </>
    )
}

export default Service
