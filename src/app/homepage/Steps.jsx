// section 2 of Home Page

import "./steps.css";

const Steps = () => {
    return (
        <div className="section-2 lg:px-24 px-4 mt-10 pb-18">
            <p className="ITR-btn inline-flex px-6 py-2 rounded-full ">How it works</p>
            <div className="section2-top flex flex-wrap items-center justify-between">
                <p className="heading section5-heading">5 Simple Steps to e-file your <span className="text-blue">GST Return</span></p>
                <div className="btn-div flex blue inline-flex px-12 py-3  gap-3 rounded-full">
                    <p className="eCA text-white">File Now</p>
                    <img src="https://tax2win.in/assets-new/img/new-theme/bdark-arrow.svg" alt="ITR Now" title="File Now" />
                </div>
            </div>
         {/* small sections */}                    
            <div className="section2-boxes flex items-center  lg:overflow-hidden overflow-x-scroll mt-12">
                <div className="box flex flex-col items-center text-center">
                    <img src="https://tax2win.in/assets-new/img/new-theme/step-signup.svg" alt="Easy Sign in/up" title="Easy Sign in/up" />
                    <h3 className="font-bold">Easy Sign in/up</h3>
                    <p>Login or create a new account</p>
                </div>
                <div className="dashed-line"> <img src="https://tax2win.in/assets-new/img/new-theme/steps_after.svg" alt="" /></div>
                <div className="box  flex flex-col items-center text-center">
                    <img src="https://tax2win.in/assets-new/img/new-theme/step-income.svg" alt="Quick pick" title="Quick pick" />
                    <h3 className="font-bold">Upload Outward Supply Data</h3>
                    <p>Sales Data</p>
                </div>
                <div className="dashed-line" ><img src="https://tax2win.in/assets-new/img/new-theme/steps_after.svg" alt="" /></div>
                <div className="box flex flex-col items-center text-center">
                    <img src="https://tax2win.in/assets-new/img/new-theme/step-prefill.svg" alt="Pre-filled data" title="Pre-filled data" />
                    <h3 className="font-bold">Upload Inward Supply Data</h3>
                    <p>Purchase Data</p>
                </div>
                <div className="dashed-line" ><img src="https://tax2win.in/assets-new/img/new-theme/steps_after.svg" alt="" /></div>
                <div className="box flex flex-col items-center text-center">
                    <img src="https://tax2win.in/assets-new/img/new-theme/step-compare.svg" alt="Compare Computations" title="Compare Computations" />
                    <h3 className="font-bold">Tax Computation</h3>
                    <p>Choose between old & new regimes</p>
                </div>
                <div className="dashed-line"> <img src="https://tax2win.in/assets-new/img/new-theme/steps_after.svg" alt="" /></div>
                <div className="box flex flex-col items-center text-center">
                    <img src="https://tax2win.in/assets-new/img/new-theme/step-filed.svg" alt="File ITR" title="File ITR" />
                    <h3 className="font-bold">Approval for Filing GST</h3>
                    {/* <p>E-File Income tax & get confirmation from IT dept</p> */}
                </div>
            </div>
        </div>

    );
};

export default Steps;
