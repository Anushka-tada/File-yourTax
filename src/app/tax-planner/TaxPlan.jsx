import React from 'react'
import "./taxplan.css"
import "../pricing/pricing.css"

const TaxPlan = () => {
  return (
    <>

      {/* Are you struggling with one of these  */}
      <div className="question-section py-20 flex flex-col items-center text-center">
        <h1 className='text-4xl font-semibold mb-8 xl:px-72 lg:px-52 md:px-32 sm:px-16 px-4'>Are you struggling with one of these questions? You definitely need Tax Planning!
        </h1>
        <div className="questions flex flex-wrap gap-5 justify-center ">
          <div className="question p-7  bg-white rounded-xl flex flex-col items-center gap-3">
            <img src="https://static.wixstatic.com/media/5ef7f2_8211b2d01a444993b58d4a289f54906b~mv2.png/v1/fill/w_64,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Flexible-working-condition.png" alt="" />
            <p className='font-semibold text-lg'>
              Is there a way to minimise my tax liability as a professional or a business owner?</p>
          </div>
          <div className="question p-7  bg-white rounded-xl flex flex-col items-center gap-3">
            <img src="https://static.wixstatic.com/media/5ef7f2_504dc95375a54eedbdf35f200bbb3587~mv2.png/v1/fill/w_48,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cutting-edge-tools.png" alt="" />
            <p className='font-semibold text-lg'>What may be the consequences of the new tax regulations and laws on my status as a taxpayer?</p>
          </div>
          <div className="question p-7  bg-white rounded-xl flex flex-col items-center gap-3">
            <img src="https://static.wixstatic.com/media/5ef7f2_7562af5585a945bcba45800377956811~mv2.png/v1/fill/w_70,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Maximize-your-earnings.png" alt="" />
            <p className='font-semibold text-lg'>How to handle taxes from my foreign income and assets, and tax treaties between India and other countries?</p>
          </div>

        </div>
      </div>


      {/* Importance of Tax Planning */}

      <div className="importance-section  py-20 flex flex-col items-center text-center">
        <h1 className='text-4xl font-semibold mb-8 xl:px-72 lg:px-52 md:px-32 sm:px-16 px-4'>Importance of Tax Planning- Why Should You Seek Advice from a Tax Planner</h1>
        <p className='text-sm xl:px-64 lg:px-52 md:px-32 sm:px-16 px-4'>Whether you are struggling with these questions or having a smooth sail, tax planning is the smartest decision you
          can take as a taxpayer. It enables you to eliminate guesswork from the tax process and helps you to complete it more
          confidently. Having a seasoned income tax planner showing you the way is the best option to reduce your liability,
          prevent penalties, and deal with potential changes to the tax code. Here are a few good reasons to have an expert on board.</p>
        <div className="importances flex flex-col text-left mt-8 gap-7">
          <div className='flex gap-4'>
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" className='tick-image' />
            <p className='text-lg font-semibold'>Minimise tax liability by making the most of tax-saving opportunities like deductions, credits, exemptions, and more</p>
          </div>
          <div className='flex gap-4'>
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt=""  className='tick-image'  />
            <p className='text-lg font-semibold'>Maximise tax efficiency with tax-advantaged investment vehicles and strategies like tax-deferred accounts and retirement plans</p>
          </div>
          <div className='flex gap-4'>
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt=""  className='tick-image'  />
            <p className='text-lg font-semibold'>Manage your risks and avoid penalties and legal hassles by staying on top of compliance with individual and corporate tax planning</p>
          </div>
          <div className='flex gap-4'>
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt=""  className='tick-image'  />
            <p className='text-lg font-semibold'>Achieve your financial goals by saving taxes year after year and keeping track of the latest changes in tax laws and guidelines</p>
          </div>
        </div>

      </div>

      {/* Why Choose TaxBuddy as Your Guide */}
           

      <div className="opportunities-section flex  flex-col  xl:px-56 lg:px-52 md:px-32 sm:px-16 px-4 py-20">
                <div className='text-left flex flex-col items-start'>
                    <h1 className='text-5xl font-semibold mb-5'> Why Choose TaxBuddy as Your Guide </h1>
           
                </div>
                <div className="oppurtunities flex gap-5 flex-wrap lg:flex-nowrap  justify-center items-center mt-10">
                    <div className="opprunity flex flex-col gap-3 ">
                        <p className='text-sm'>At TaxBuddy, we offer reliable tax planning expertise with a few clicks.</p>
                        <p className='text-sm'>1. Solution for all income types (Salaried, Business, Freelancers, Share traders, Futures and Option traders, and many more)</p>
                        <p className='text-sm'>2. Basic plan starts from only INR XXX</p>
                        <p className='text-sm'>3. Explore TaxSaver Pro and Advance plans for in-depth assistance</p>
                        <p className='text-sm'>4. Every potential tax-saving investment option in one report</p>

                        <div className="discover-btn py-2 rounded-md flex justify-center mt-10">
                            <p className='text-white'>Discover what's available for you</p>
                        </div>
                    </div>

                    <div className="oppotunity-image">
                        <img src="https://static.wixstatic.com/media/5ef7f2_24167713a31b4ac5b978023fec053ebb~mv2.png/v1/fill/w_574,h_464,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/tax-saving.png" alt="" />
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
                                <p  className='text-sm'>For salaried taxpayers</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Old v New tax regime: Which is best for you?</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Increase saving by salary restructuring</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Tax saving opportunities suited to your goals</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Bifurcation of HRA calculation</p>
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
                                <p  className='text-sm'>Sold a property? Get solutions against capital gains</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Tax calculation and saving opportunities based on your tax slab</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Tax loss harvesting solutions</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Advance Tax calculation</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Personalized tax saving options for business income</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Bifurcation of HRA calculation</p>
                            </div>
                        </div>

                        <div className="get-btn flex justify-center mb-4 mt-4 w-full rounded-md py-2">
                            <p className='btn-p'>Buy Now</p>
                        </div>
                    </div>


                    <div className="pricing p-4 rounded-md  flex flex-col justify-between bg-white">
                        <div>
                          <div className='flex gap-2 items-center'>
                          <img src="https://static.wixstatic.com/media/5ef7f2_8167bc6880984aa3a282d970e1f197a3~mv2.png/v1/fill/w_26,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/account_balance_wallet.png" alt=""className='tax-image' />
                            <h4 className='text-xl font-semibold mt-3 mb-4'>
                            Advance Tax calculation</h4>
                          </div>
                           
                                <p className='text-5xl font-semibold text-blue'>₹899</p>
                              
                            <p className='mt-3 text-sm'>*Exclusive of Taxes</p>
                         
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Advance tax calculation based on source of income</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Quarterly review</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Assistance with Challan payment</p>
                            </div>
                            
                        </div>

                        <div className="get-btn flex justify-center mb-4 w-full rounded-md py-2">
                            <p className='btn-p'>Buy Now</p>
                        </div>
                    </div>


                    <div className="pricing p-4 rounded-md  flex flex-col justify-between bg-white">
                        <div>
                           <div className='flex gap-2 items-center'>
                           <img src="https://static.wixstatic.com/media/5ef7f2_8167bc6880984aa3a282d970e1f197a3~mv2.png/v1/fill/w_26,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/account_balance_wallet.png" alt="" className='tax-image'/>
                            <h4 className='text-xl font-semibold mt-3 mb-4'>
                            TaxSaver NRI</h4>
                           </div>

                                <p className='text-5xl font-semibold text-blue'>₹4,199</p>
                            
                            <p className='mt-3 text-sm'>*Exclusive of Taxes</p>
                          
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm' >Guidance for taxation on foreign investments</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Tax implications on NRO/NRE account</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Applicability of  DTAA provisions</p>
                            </div>
                            <div className='flex gap-3 mt-3 items-center'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="" height={18} width={20} className='image' />
                                <p  className='text-sm'>Optimizing tax strategies for managing RSU/ESOP including advance tax calculations on sale</p>
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

                <p className='text-xl font-semibold my-8'>*18% GST will be applicable to the base plan amount </p>
                </div>


    </>
  )
}

export default TaxPlan
