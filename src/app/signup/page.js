

// import LogFooter from '../../LogIn/LogFooter';
// import Nav from '../../LogIn/Nav';

import Nav from '../components/Navbar/Nav';
import LogFooter from '../login/LogFooter';
// import Nav from '../login/Nav';
import OTP from '../otp-verify/OTP';


import Sign_Form from './Sign_Form';


// import styles from './HomePage.module.css';

const page = () => {
  return (
    <div>
      {/* <Nav/> */}
    <Nav/>
<Sign_Form/>
<LogFooter/>
    </div>
  );
};

export default page;