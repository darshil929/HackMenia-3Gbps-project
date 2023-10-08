import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Catalogue from './pages/Catalogue'

import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("E-Learn with Shiksha");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            <Route path="/catalogue" element={<Catalogue />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
