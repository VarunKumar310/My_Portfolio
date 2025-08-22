import React from 'react';
import './Contact.css';
import theme from '../../assets/theme_pattern.svg';
import mail from '../../assets/mail_icon.svg';
import location from '../../assets/location_icon.svg';
import call from '../../assets/call_icon.svg';
import linkedin from '../../assets/linkedin_logo.png';
import github from '../../assets/github_logo.png'; 

// ✅ Import Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "e14cd044-f36d-43e7-a591-039c370f13b4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();
      if (result.success) {
        console.log("Success", result);
        toast.success("Message Sent Successfully!");
        event.target.reset();
      } else {
        console.error("Failed to send", result);
        toast.error("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(" Something went wrong!");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch With Me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>Feel free to reach out — I’m actively seeking creative challenges</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="Email" />
              <p>varunkumargakkula@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="Call" />
              <p>+91 9030218255</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="Location" />
              <p>Kompally, Hyderabad</p>
            </div>
            <div className="contact-detail">
              <img src={linkedin} alt="LinkedIn" />
              <a 
                href="https://www.linkedin.com/in/varun-kumar-gakkula-121a48255/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="contact-detail">
              <img src={github} alt="GitHub" />
              <a 
                href="https://github.com/VarunKumar310" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your Name" name="name" required />
          <label>Your Email</label>
          <input type="email" placeholder="Enter your Email" name="email" required />
          <label>Write Your Message here</label>
          <textarea name="message" rows="8" placeholder="Enter your Message" required></textarea>
          <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>

      {/* ✅ Toast container (Dark Theme Global Setup) */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"   // 🔥 Global dark theme
      />
    </div>
  );
};

export default Contact;
