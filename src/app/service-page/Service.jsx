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
                        <h2 className='text-4xl font-bold text-white'>Streamline Your Tax Compliance</h2>
                    </div>

                    <div className='flex justify-center flex-wrap lg:flex-nowrap gap-8 items-center mt-10 pb-9'>
                        <div className="points  flex flex-col gap-5">
                            <div className="point flex gap-2">
                                <img src="https://media-hosting.imagekit.io//fe368cbd174a42cc/correct.png?Expires=1837059653&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PBESMvACqx8yKRW8XIb~gWzW1UlBKK8e7pYQQudQ35euwoEWKhY7J4w0k~waJbosnoDPXiptEf2sCtOnTWWksrinj9xvIzuvtluZT4zcv1S2DrH3i0dgYEzmrrxldK8yZwUVQwjLR7JvECMLVx~Xk6YHBRmIQWR8S27BLosbVMr4cu0Sq5ydyhSPvWZO5nhkjeIxLI5ukwyMhZBB5bFphBV7Ufc9NoBhG0E3oUPMsASaerhwXmjG0k~20Z9fZXaEHBl7tmYR9kGMyKhRJQL2NVWQ6Luvs~SygqpKRL0gw~VJ7M3d1cWe6lOKNvXeFSS80AdKfBRPS6azA6MwYcfrXg__" alt="" className='image' />
                                <p className='text-xl font-semibold text-white'>Effortless ITR filing</p>
                            </div>
                            <div className="point flex gap-2">
                                <img src="https://media-hosting.imagekit.io//fe368cbd174a42cc/correct.png?Expires=1837059653&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PBESMvACqx8yKRW8XIb~gWzW1UlBKK8e7pYQQudQ35euwoEWKhY7J4w0k~waJbosnoDPXiptEf2sCtOnTWWksrinj9xvIzuvtluZT4zcv1S2DrH3i0dgYEzmrrxldK8yZwUVQwjLR7JvECMLVx~Xk6YHBRmIQWR8S27BLosbVMr4cu0Sq5ydyhSPvWZO5nhkjeIxLI5ukwyMhZBB5bFphBV7Ufc9NoBhG0E3oUPMsASaerhwXmjG0k~20Z9fZXaEHBl7tmYR9kGMyKhRJQL2NVWQ6Luvs~SygqpKRL0gw~VJ7M3d1cWe6lOKNvXeFSS80AdKfBRPS6azA6MwYcfrXg__" alt="" className='image' />
                                <p className='text-xl font-semibold text-white'>Maximum Tax Savings</p>
                            </div>
                            <div className="point flex gap-2">
                                <img src="https://media-hosting.imagekit.io//fe368cbd174a42cc/correct.png?Expires=1837059653&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PBESMvACqx8yKRW8XIb~gWzW1UlBKK8e7pYQQudQ35euwoEWKhY7J4w0k~waJbosnoDPXiptEf2sCtOnTWWksrinj9xvIzuvtluZT4zcv1S2DrH3i0dgYEzmrrxldK8yZwUVQwjLR7JvECMLVx~Xk6YHBRmIQWR8S27BLosbVMr4cu0Sq5ydyhSPvWZO5nhkjeIxLI5ukwyMhZBB5bFphBV7Ufc9NoBhG0E3oUPMsASaerhwXmjG0k~20Z9fZXaEHBl7tmYR9kGMyKhRJQL2NVWQ6Luvs~SygqpKRL0gw~VJ7M3d1cWe6lOKNvXeFSS80AdKfBRPS6azA6MwYcfrXg__" alt="" className='image' />
                                <p className='text-xl font-semibold text-white'>Prompt Processing and Confirmation</p>
                            </div>
                            <div className="point flex gap-2">
                                <img src="https://media-hosting.imagekit.io//fe368cbd174a42cc/correct.png?Expires=1837059653&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PBESMvACqx8yKRW8XIb~gWzW1UlBKK8e7pYQQudQ35euwoEWKhY7J4w0k~waJbosnoDPXiptEf2sCtOnTWWksrinj9xvIzuvtluZT4zcv1S2DrH3i0dgYEzmrrxldK8yZwUVQwjLR7JvECMLVx~Xk6YHBRmIQWR8S27BLosbVMr4cu0Sq5ydyhSPvWZO5nhkjeIxLI5ukwyMhZBB5bFphBV7Ufc9NoBhG0E3oUPMsASaerhwXmjG0k~20Z9fZXaEHBl7tmYR9kGMyKhRJQL2NVWQ6Luvs~SygqpKRL0gw~VJ7M3d1cWe6lOKNvXeFSS80AdKfBRPS6azA6MwYcfrXg__" alt="" className='image' />
                                <p className='text-xl font-semibold text-white'>Enhanced Security Measures</p>
                            </div>
                            <div className="point flex gap-2">
                                <img src="https://media-hosting.imagekit.io//fe368cbd174a42cc/correct.png?Expires=1837059653&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PBESMvACqx8yKRW8XIb~gWzW1UlBKK8e7pYQQudQ35euwoEWKhY7J4w0k~waJbosnoDPXiptEf2sCtOnTWWksrinj9xvIzuvtluZT4zcv1S2DrH3i0dgYEzmrrxldK8yZwUVQwjLR7JvECMLVx~Xk6YHBRmIQWR8S27BLosbVMr4cu0Sq5ydyhSPvWZO5nhkjeIxLI5ukwyMhZBB5bFphBV7Ufc9NoBhG0E3oUPMsASaerhwXmjG0k~20Z9fZXaEHBl7tmYR9kGMyKhRJQL2NVWQ6Luvs~SygqpKRL0gw~VJ7M3d1cWe6lOKNvXeFSS80AdKfBRPS6azA6MwYcfrXg__" alt="" className='image' />
                                <p className='text-xl font-semibold text-white'>Expert Support at Your Fingertips</p>
                            </div>

                            <div className="itr-btn py-2 rounded-md flex justify-center">
                                <p className='itr-btn-p'>ITR Filing without delay</p>
                            </div>
                        </div>

                        <img src="https://static.wixstatic.com/media/5ef7f2_83a8e74e674c401eb5fa58e45adf1d8b~mv2.png/v1/fill/w_584,h_615,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/iPhone13Pro-1.png" alt="" className='mobile-image' />
                    </div>
                </div>
            </div>

            {/* Three convenient ways for ITR Filing */}


            <div className='three-way-section flex flex-col items-center py-20'>
                <h1 className='text-4xl font-semibold mb-5 mx-5'>Three convenient ways for ITR Filing</h1>
                <div className="three-ways flex flex-wrap justify-center gap-6 ">
                    <div className="way p-5 bg-white rounded-md flex flex-col gap-3">
                        <h4 className='text-lg font-semibold'>Use a Digital Signature Certificate (DSC): </h4>
                        <p className='text-sm'>Streamline your e-filing process with a secure Digital Signature Certificate.
                            This digital equivalent of your physical signature ensures authenticity and ease of ITR tax filing.</p>
                    </div>

                    <div className="way p-5 bg-white rounded-md flex flex-col gap-3">
                        <h4 className='text-lg font-semibold'>E filing of income tax return without a DSC:</h4>
                        <p className='text-sm'>Choose the hassle-free option of e-filing without a Digital Signature Certificate.
                            Generate an ITR-V form, print it, sign it, and send it to the Central Processing Centre (CPC),
                            Bangalore within 30 days from e-filing. This option applies if Aadhaar details are not updated on the Income Tax site.</p>
                    </div>

                    <div className="way p-5 bg-white rounded-md flex flex-col gap-3">
                        <h4 className='text-lg font-semibold'>E-file and Verify with Aadhaar or Bank: </h4>
                        <p className='text-sm'>Simplify your e-filing experience by verifying your tax return through your Aadhaar number or bank account. This eliminates the need to submit the ITR-V form to CPC</p>
                    </div>
                </div>

                <div className='my-8 xl:px-64 lg:px-52 md:px-32 sm:px-16 px-4 '>
                    <p className='mb-4 text-sm'>Ensure a smooth E filing of Income Tax Return process by having key documents readily available. These may include PAN, Aadhaar linked to PAN, bank account information, salary slips, rent receipts, Form 16, interest certificates, insurance and home loan details, investment information, and proof of additional income such as from property or capital gains.</p>
                    <p className='text-sm'>Relax, you don't need to stress about the process. Simply upload your necessary documents, and our team will handle the rest. We are your reliable partners, committed to guiding you at every juncture.</p>

                    <div className="get-btn py-2 rounded-md flex justify-center mt-10">
                        <p className='text-white'>Let us get started</p>
                    </div>
                </div>
            </div>

            {/* Explore Tax-Saving Opportunities  */}

            <div className="opportunities-section flex  flex-col  xl:px-56 lg:px-52 md:px-32 sm:px-16 px-4 py-20">
                <div className='text-left flex flex-col items-start'>
                    <h1 className='text-5xl font-semibold mb-5'> Explore Tax-Saving </h1>
                    <h1 className='text-5xl font-semibold mb-5'> Opportunities for ITR efiling</h1>
                </div>
                <div className="oppurtunities flex gap-5 flex-wrap lg:flex-nowrap  justify-center items-center mt-10">
                    <div className="opprunity flex flex-col gap-3 ">
                        <p className='text-sm'>1. Tax Buddy keeps you aligned to the ever-changing landscape of tax deductions.</p>
                        <p className='text-sm'>2. We offer specialized packages based on your income nature.</p>
                        <p className='text-sm'>3. Our solutions keep you well-informed about the latest provisions.</p>
                        <p className='text-sm'>4. We work aggressively to maximize your deductions effectively.</p>
                        <p className='text-sm'>5. With Tax Buddy, you can confidently manage your taxes, sustain
                            the momentum of tax savings and meet demanding deadlines.</p>

                        <div className="discover-btn py-2 rounded-md flex justify-center mt-10">
                            <p className='text-white'>Discover what's available for you</p>
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
                <h1 className='text-5xl font-semibold mb-5 xl:px-72 lg:px-52 md:px-32 sm:px-16 px-4 '>Leverage the Benefits of Strategic Return Filing with TaxBuddy</h1>
                <p className='xl:px-72 lg:px-52 md:px-32 sm:px-16 px-4 '>With TaxBuddy, your exclusive access to tax planning information, you can maximize
                    your financial potential. Our devoted team of experts offers tailored advice to people
                    and enterprises, assisting you in:</p>

                <div className="leverage-benefits flex flex-wrap justify-center gap-5 mt-16 ">
                    <div className="benefit bg-white p-6 flex flex-col items-center">
                        <img src="https://static.wixstatic.com/media/5ef7f2_ffa71f31f30d4d8ab903d38c2a27470c~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1st%20icon.png" alt="" />
                        <p className='mt-4'>Produce a thorough tax report based on your investing activity.</p>
                    </div>
                    <div className="benefit bg-white p-6 flex flex-col items-center">
                        <img src="https://static.wixstatic.com/media/5ef7f2_ffa71f31f30d4d8ab903d38c2a27470c~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1st%20icon.png" alt="" />
                        <p className='mt-4'>Produce a thorough tax report based on your investing activity.</p>
                    </div>
                    <div className="benefit bg-white p-6 flex flex-col items-center">
                        <img src="https://static.wixstatic.com/media/5ef7f2_ffa71f31f30d4d8ab903d38c2a27470c~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1st%20icon.png" alt="" />
                        <p className='mt-4'>Produce a thorough tax report based on your investing activity.</p>
                    </div >
                    <div className="benefit bg-white p-6 flex flex-col items-center">
                        <img src="https://static.wixstatic.com/media/5ef7f2_ffa71f31f30d4d8ab903d38c2a27470c~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1st%20icon.png" alt="" />
                        <p className='mt-4'>Produce a thorough tax report based on your investing activity.</p>
                    </div>
                </div>

                <div className="itr-filling-btn py-2 rounded-md mt-10 cursor-pointer">
                    <p className='text-white'>Begin ITR Filing</p>
                </div>
            </div>

            {/* Hassle-Free Assisted Filing Online */}

            <div className="hasserl-free-section py-20 flex flex-col items-center text-center">
                <h1 className='text-5xl font-semibold mb-5 xl:px-72 lg:px-52 md:px-32 sm:px-16 px-4' >Hassle-Free Assisted Filing Online from Start to Finish</h1>
                <video width="900" autoPlay loop muted playsInline>

                    <source src="https://video.wixstatic.com/video/42bffb_b7160721c4254c8c94ce04c75df585ae/720p/mp4/file.mp4" type="video/mp4" />
                    Your browser does not support the video tag.

                </video>


            </div>

            {/* Discover Why Early E-Filing ITR Filing is a Smart Move! */}
            <div className='smart-move-section py-20 flex flex-col items-center text-center'>
                <h1 className='text-3xl font-semibold mb-8 xl:px-72 lg:px-52 md:px-32 sm:px-16 px-4 text-white' >Discover Why Early E-Filing ITR Filing is a Smart Move!</h1>
                <div className="smart-move-reasons flex gap-5 flex-wrap justify-center  ">
                    <div className="smart-move-reason flex flex-col items-center p-6 rounded-lg">
                        <img src="https://static.wixstatic.com/media/5ef7f2_f6e73e95088c42db8d18a94454e8b9fa~mv2.png/v1/fill/w_51,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1st%20icon.png" alt="" />
                        <h4 className='text-white text-xl font-semibold my-3'>Timely E-filing for Prompt Refunds</h4>
                        <p className='text-white text-sm'>Timely e-filing expedites verification, ensuring prompt refunds.</p>
                    </div>
                    <div className="smart-move-reason flex flex-col items-center  p-6 rounded-lg">
                        <img src="https://static.wixstatic.com/media/5ef7f2_d5f3e207549f4cbd9c1196ec8d24b8ed~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2nd%20icon.png" alt="" />
                        <h4 className='text-white text-xl font-semibold my-3'> Penalty-Free Tax Filing</h4>
                        <p className='text-white text-sm'>Stay clear of penalties by filing your taxes accurately and on time.</p>
                    </div>
                    <div className="smart-move-reason flex flex-col items-center  p-6 rounded-lg">
                        <img src="https://static.wixstatic.com/media/5ef7f2_28599c66fd1a4de8821f10151b98822d~mv2.png/v1/fill/w_56,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3rd%20icon.png" alt="" />
                        <h4 className='text-white text-xl font-semibold my-3'>Defective Return Notice Prevention</h4>
                        <p className='text-white text-sm'>Avoid receiving a Defective Return Notice through accurate tax filing.</p>
                    </div>
                    <div className="smart-move-reason flex flex-col items-center  p-6 rounded-lg">
                        <img src="https://static.wixstatic.com/media/5ef7f2_38bf7237a61e430f9a5b087224f0314b~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4th%20icon.png" alt="" />
                        <h4 className='text-white text-xl font-semibold my-3'>Timely E-filing for Prompt Refunds</h4>
                        <p className='text-white text-sm'>Say goodbye to the commotion of the last-minute tax filing rush.</p>
                    </div>
                </div>
            </div>

            {/* Leverage the Advantages of Filing ITR Online */}

            <div className="leverage-advantages ">

                <div className='flex gap-5 flex-wrap xl:flex-nowrap lg:flex-nowrap '>
                    <img src="https://static.wixstatic.com/media/5ef7f2_3973898880f74cd1a304111a4e7d788d~mv2.png/v1/fill/w_634,h_1048,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/5ef7f2_3973898880f74cd1a304111a4e7d788d~mv2.png" alt="" width={500} className='side-image' />
                    <div className="Advantages flex flex-col gap-6 xl:px-40 lg:px-28 md:px-20 sm:px-10 px-4 mt-20">
                        <h1 className='text-4xl font-semibold mb-8 '>Leverage the Advantages of Filing ITR Online</h1>
                        <div className="advantage flex gap-5 ">
                            <img src="https://cdn-icons-png.flaticon.com/128/13476/13476419.png" alt="" className='num-image' />
                            <div> <h4 className='text-xl font-semibold mb-3'>Assuredly maximize your returns:</h4>
                                <p className='text-sm'>By filing your income tax return (ITR) on time, you can ensure that you claim
                                    all eligible deductions and exemptions, optimizing your potential tax savings.</p></div>
                        </div>
                        <div className="advantage flex gap-5">
                            <img src="https://cdn-icons-png.flaticon.com/128/13476/13476422.png" alt="" className='num-image' />
                            <div>
                                <h4 className='text-xl font-semibold mb-3'>Build financial credibility:</h4>
                                <p className='text-sm'>Filing your ITR regularly establishes a record that can enhance your credibility when applying
                                    for loans or seeking better financial opportunities.</p>
                            </div>
                        </div>
                        <div className="advantage flex gap-5">
                            <img src="https://cdn-icons-png.flaticon.com/128/13476/13476465.png" alt="" className='num-image' />
                            <div>
                                <h4 className='text-xl font-semibold mb-3'>Avoid penalties consistently:</h4>
                                <p className='text-sm'>Timely ITR filing helps you steer clear of penalties and legal complications.</p>
                            </div>
                        </div>
                        <div className="advantage flex gap-5">
                            <img src="https://cdn-icons-png.flaticon.com/128/13476/13476508.png" alt="" className='num-image' />
                            <div>
                                <h4 className='text-xl font-semibold mb-3'>Track your financial progress:</h4>
                                <p className='text-sm'>Filing your ITR provides valuable insights into your income, expenses, and investments,
                                    allowing you to make informed decisions</p>
                            </div>
                        </div>
                        <div className="advantage flex gap-5">
                            <img src="https://cdn-icons-png.flaticon.com/128/13476/13476550.png" alt="" className='num-image' />
                            <div>
                                <h4 className='text-xl font-semibold mb-3'>Expedite visa processing:</h4>
                                <p className='text-sm'>Consistent ITR filing history can expedite processing of your visa applications, expanding your chances
                                    of obtaining international travel opportunities.</p>
                            </div>
                        </div>
                        <div className="itr-filling-btn py-2 rounded-md mt-6 cursor-pointer flex justify-center mb-6">
                            <p className='text-white'>File my ITR now</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Access Valuable Benefits by Filing Your Income Tax Return */}

                 <div className="valuable-benefits-section py-20 flex flex-col items-center text-center">
                    <h1 className='text-4xl font-semibold mb-8 px-4'>Access Valuable Benefits by Filing Your Income Tax Return</h1>
                   <div className="valuable-benefits flex flex-wrap gap-6 justify-center xl:px-40 lg:px-20 px-5">
                    <div className="value-benefit p-6 flex flex-col gap-4 bg-white">
                        <h4 className='text-xl font-semibold'>Acts as Legal Proof:</h4>
                        <p> Income Tax Return serves as a legal document, serving as proof in two ways: a) Identity Proof: It
                             can be used as identity proof, accepted by the government for various purposes, including obtaining
                              an AADHAAR card. b) Income Proof: The ITR form contains detailed information on incomes and expenses, 
                              serving as income proof for transactions like property purchases.</p>
                    </div>
                    <div className="value-benefit p-6 flex flex-col gap-4 bg-white">
                        <h4 className='text-xl font-semibold'>Claim Deductions:</h4>
                        <p>Filing an income tax return allows you to claim deductions, reducing the tax burden. These deductions can
                        be availed through investments and can include TDS and rebates.</p>
                    </div>
                    <div className="value-benefit p-6 flex flex-col gap-4 bg-white">
                        <h4 className='text-xl font-semibold'>Document for Loans:</h4>
                        <p>Income tax returns are essential when applying for loans. Banks and credit card companies require ITR as proof
                        of income and financial stability before approving loans or issuing credit cards.</p>
                    </div>
                    <div className="value-benefit p-6 flex flex-col gap-4 bg-white">
                        <h4 className='text-xl font-semibold'>Requirement for Going Abroad:</h4>
                        <p>Filing ITR is necessary when planning to go abroad. Many countries require ITR as part of the documentation process
                             for visa approval, as it showcases financial history and provides details to the embassy.</p>
                    </div>
                    <div className="value-benefit p-6 flex flex-col gap-4 bg-white">
                        <h4 className='text-xl font-semibold'>Avoid Penalties:</h4>
                        <p>Failure to file Income Tax Returns, despite being eligible to pay taxes, can lead to penalties and punishments. The Income Tax 
                            Act 1961 allows for penalties of up to Rs 5000 and other serious consequences for non-compliance.</p>
                    </div>
                    <div className="value-benefit p-6 flex flex-col gap-4 bg-white">
                        <h4 className='text-xl font-semibold'>Carry Forward Losses:</h4>
                        <p>The Income-tax Act 1961 allows for the carrying forward of losses from one year to the next (under Sections 70 and 71). 
                            This provision enables taxpayers to offset losses against future income.</p>
                    </div>
                   </div>
                 </div>
                    

        </>
    )
}

export default Service
