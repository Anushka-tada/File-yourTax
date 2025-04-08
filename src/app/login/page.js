



import Nav from '../components/Navbar/Nav';
import LogFooter from './LogFooter';
import LoginFaq from './LoginFaq';
import LoginForm from './LoginForm';
// import Nav from './Nav';

// import styles from './HomePage.module.css';

const page = () => {
  return (
    <div>
        {/* <Nav/> */}
        <Nav/>
<LoginForm/>
<LoginFaq/>
<LogFooter/>
    </div>
  );
};

export default page;