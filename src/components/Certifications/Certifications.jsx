import React from "react";
import "./Certifications.css";

import OracleLogo from "../../assets/Oracle.jpg";
import HackerRankLogo from "../../assets/HackerRank.png";
import InfySpringLogo from "../../assets/infyspring.png";

const certifications = [
  {
    title: "Python Certification - Infosys Springboard",
    logo: InfySpringLogo,
    file: "certifications/python_foundation.pdf",
  },
  {
    title: "Generative AI Professional Certification - Oracle",
    logo: OracleLogo,
    file: "certifications/oracle.pdf",
  },
  {
    title: "Data Science Certification - Infosys Springboard",
    logo: InfySpringLogo,
    file: "certifications/DataScienceFoundation.pdf",
  },
  {
    title: "SQL (Advanced) Certification - HackerRank",
    logo: HackerRankLogo,
    file: "certifications/sql_advanced.pdf",
  },
  {
    title: "Angular Certification - Infosys Springboard",
    logo: InfySpringLogo,
    file: "certifications/angular.pdf",
  },
];

const Certifications = () => {
  return (
    <div id="certifications" className="certifications">
      <h1>Certifications</h1>
      <div className="cert-list">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={`${import.meta.env.BASE_URL}${cert.file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
          >
            <img src={cert.logo} alt={cert.title} className="cert-logo" />
            <p>{cert.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
