import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Mywork from './components/Mywork/Mywork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Coding from './components/Coding/Coding';
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Certifications from './components/Certifications/Certifications';

const App = () => {
  return (
    <div>
      <BackgroundVideo />
      <Navbar />
      <Hero />
      <About />
      <Coding />
      <Services />
      <Certifications/>
      <Mywork />
      <Contact />
      <Footer />

      {/* 🔥 Toast Container for global notifications */}
      <ToastContainer
        position="top-center"   // ✅ Shows toast at top center
        autoClose={3000}        // Toast disappears after 3s
        hideProgressBar={false} // Keep progress bar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default App;
