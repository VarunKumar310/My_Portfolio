import React from 'react';
import './Mywork.css';
import theme from '../../assets/theme_pattern.svg';
import faceMaskImg from '../../assets/FaceMask.png';
import leafImg from '../../assets/Leaf.jpg';
import attendanceImg from '../../assets/SmartAttendance.png';
import intrusionImg from '../../assets/Intrusion.jpg'; // <-- Your new image

const Mywork = () => {
  const projects = [
    {
      img: faceMaskImg,
      title: 'Face Mask Detection',
      desc: 'Detects whether a person is wearing a mask using OpenCV and Deep Learning.'
    },
    {
      img: intrusionImg,
      title: 'XAI Intrusion Detection',
      desc: 'Explainable AI for intrusion detection using LIME and SHAP on Multi-Layer Perceptron models.'
    },
    {
      img: leafImg,
      title: 'Leaf Disease Detection',
      desc: 'Classifies plant diseases from leaf images using ML/DL models and Flask.'
    },
    {
      img: attendanceImg,
      title: 'Smart Attendance System',
      desc: 'Face recognition-based automated attendance system with database logging.'
    }
  ];

  return (     
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My <span>Latest Work</span></h1>
        <img src={theme} alt="theme design" />
      </div>

      <div className="mywork-container">
        {projects.map((project, index) => (
          <div className="mywork-card" key={index}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mywork;
