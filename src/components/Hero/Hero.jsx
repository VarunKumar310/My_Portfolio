// import React from 'react';
// import './Hero.css';
// import profile from '../../assets/profile_img.jpg';
// import AnchorLink from 'react-anchor-link-smooth-scroll';

// const Hero = () => {
//   return (
//     <div id='home' className='hero'>
//       <div className="hero-profile-container">
//         <img src={profile} alt="Profile" className="hero-img" />
//         <div className="skill-badge react"> React </div>
//         <div className="skill-badge node">AI&ML</div>
//         <div className="skill-badge dsa">DSA</div>
        
//       </div>

//       <h1>I'm G Varun Kumar</h1>
//       <p>
//         In the dynamic world of Computer Science, I bring a solution-oriented mindset and innovative approach to every project.
//         I'm excited to contribute my skills and knowledge to the ever-evolving tech landscape.
//       </p>

//       <div className="hero-action">
//         <AnchorLink href="#contact" offset={50} className="hero-connect">
//           Connect with me
//         </AnchorLink>
//         <a
//           className="hero-resume"
//           href="/varun_resume.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           My Resume
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import './Hero.css';
import profile from '../../assets/profile_img.jpg';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-profile-container">
        <img src={profile} alt="Profile" className="hero-img" />
        <div className="skill-badge react"> React </div>
        <div className="skill-badge node">AI & ML</div>
        <div className="skill-badge dsa">DSA</div>
      </div>

      <h1>I'm G Varun Kumar</h1>
      <p>
        In the dynamic world of Computer Science, I bring a solution-oriented mindset and innovative approach to every project.
        I'm excited to contribute my skills and knowledge to the ever-evolving tech landscape.
      </p>

      <div className="hero-action">
        <a href="#contact" className="hero-connect">
          Connect with me
        </a>
        <a
          className="hero-resume"
          href={`${import.meta.env.BASE_URL}varun_resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
