



import Navbar from '../components/Navbar/Nav';
import Footer from '../homepage/Footer';
import LogFooter from '../login/LogFooter';
import Contact_footer from './Contact_footer';
import Contactform from './Contactform';
import Nav from './Nav';
import Solutions from './Solutions';

// import styles from './HomePage.module.css';

const page = () => {
  return (
    <div >
        {/* <Nav/> */}
        <Navbar/>
<Contactform />
  <Solutions/>
  <Footer/>
 
    </div>
  );
};

export default page;