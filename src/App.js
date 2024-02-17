import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Text2Design from './pages/Text2Design';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import DesignGenerator from './pages/DesignGenerator';
import DesignTemplates from './pages/DesignTemplates';
import SustainableCustomApparel from './pages/SustainableCustomApparel';
import Order from './pages/Order';
import ThankYou from './pages/ThankYou';
import AboutUs from './pages/AboutUs';
import MyAccount from './pages/MyAccount';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path="" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path='/design-generator' element={<DesignGenerator />} />
        <Route path='/design-templates' element={<DesignTemplates />} />
        <Route path="/sustainable-custom-apparel" element={<SustainableCustomApparel />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path='/products/order' element={<Order />} />
        <Route path='/products/thankyou' element={<ThankYou />} />
        <Route path="/products/*" element={<Products />}>
          <Route path='text2design' element={<Text2Design />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
