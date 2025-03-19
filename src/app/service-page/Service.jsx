import React from 'react'
import "./service.css"

const Service = () => {
    return (
        <>
            <div className='outer-div flex justify-center'>
                <div className="return-filling flex flex-col items-start">
                    <div className='flex flex-col items-start'>
                        <h2 className='text-4xl font-bold text-white mb-2 mt-10'>Income Tax Return Filing:</h2>
                        <h2 className='text-4xl font-bold text-white'>Streamline Your Tax Compliance</h2>
                    </div>

                    <div className='flex justify-center gap-8 items-center mt-10 pb-9'>
                        <div className="points  flex flex-col gap-5">
                            <div className="point flex gap-2">
                                <img src="https://cdn-icons-png.flaticon.com/128/3856/3856668.png" alt="" className='image' />
                                <p className='text-xl font-semibold text-white'>Effortless ITR filing</p>
                            </div>
                            <div className="point flex gap-2">
                                <img src="https://cdn-icons-png.flaticon.com/128/3856/3856668.png" alt="" className='image' />
                                <p className='text-xl font-semibold text-white'>Maximum Tax Savings</p>
                            </div>
                            <div className="point flex gap-2">
                                <img src="https://cdn-icons-png.flaticon.com/128/3856/3856668.png" alt="" className='image' />
                                <p className='text-xl font-semibold text-white'>Prompt Processing and Confirmation</p>
                            </div>
                            <div className="point flex gap-2">
                                <img src="https://cdn-icons-png.flaticon.com/128/3856/3856668.png" alt="" className='image' />
                                <p className='text-xl font-semibold text-white'>Enhanced Security Measures</p>
                            </div>
                            <div className="point flex gap-2">
                                <img src="https://cdn-icons-png.flaticon.com/128/3856/3856668.png" alt="" className='image' />
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



            <div className='three-way-section flex flex-col items-center py-20'>
                <h1 className='text-4xl font-semibold mb-5'>Three convenient ways for ITR Filing</h1>
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

                <div className='my-8  px-64 '>
                    <p className='mb-4 text-sm'>Ensure a smooth E filing of Income Tax Return process by having key documents readily available. These may include PAN, Aadhaar linked to PAN, bank account information, salary slips, rent receipts, Form 16, interest certificates, insurance and home loan details, investment information, and proof of additional income such as from property or capital gains.</p>
                    <p className='text-sm'>Relax, you don't need to stress about the process. Simply upload your necessary documents, and our team will handle the rest. We are your reliable partners, committed to guiding you at every juncture.</p>

                    <div className="get-btn py-2 rounded-md flex justify-center mt-10">
                        <p className='text-white'>Let us get started</p>
                    </div>
                </div>
            </div>


            <div className="opportunities-section flex  flex-col items-center px-56 py-20">
               <div className='text-left flex flex-col items-start'>
               <h1 className='text-5xl font-semibold mb-5'> Explore Tax-Saving </h1>
               <h1 className='text-5xl font-semibold mb-5'> Opportunities for ITR efiling</h1>
               </div>
                <div className="oppurtunities flex gap-5  justify-center mt-10">
                    <div className="opprunity flex flex-col gap-3 ">
                        <p >1. Tax Buddy keeps you aligned to the ever-changing landscape of tax deductions.</p>
                        <p>2. We offer specialized packages based on your income nature.</p>
                        <p>3. Our solutions keep you well-informed about the latest provisions.</p>
                        <p>4. We work aggressively to maximize your deductions effectively.</p>
                        <p>5. With Tax Buddy, you can confidently manage your taxes, sustain
                            the momentum of tax savings and meet demanding deadlines.</p>

                        <div className="get-btn py-2 rounded-md flex justify-center mt-10">
                            <p className='text-white'>Let us get started</p>
                        </div>
                        </div>

                        <div className="oppotunity-image">
                            <img src="https://static.wixstatic.com/media/5ef7f2_24167713a31b4ac5b978023fec053ebb~mv2.png/v1/fill/w_574,h_464,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/tax-saving.png" alt="" />
                        </div>
                    
                </div>
            </div>
        </>
    )
}

export default Service
