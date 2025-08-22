import React from 'react';
import './Services.css';


const servicesData = [
  {
    id: '01',
    title: 'Frontend Development',
    description: 'Building responsive and user-friendly UIs using HTML, CSS, JavaScript, and React.',
  },
  {
    id: '02',
    title: 'Single Page Application Development',
    description: 'Developing high-performance SPAs using React or Next.js for a seamless experience.',
  },
  {
    id: '03',
    title: 'DSA & Coding Tutoring',
    description: 'Guiding students in Data Structures, Algorithms, and competitive programming practices.',
  },
  {
    id: '04',
    title: 'Database Integration',
    description: 'Connecting applications with SQL databases for full-stack solutions (Basic to Intermediate).',
  },
  {
    id: '05',
    title: 'Version Control',
    description: 'Using Git & GitHub for collaborative coding, branching strategies, and version tracking.',
  },
];

const Services = () => {
  return (
    <div id='services' className="services">
      <div className="services-title">
        <h1>Areas  <span>of Expertise</span></h1>
       
      </div>

      <div className="service-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-card-content">
              <span>{service.id}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
