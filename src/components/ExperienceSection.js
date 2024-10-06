import React from "react";
import "../css/ExperienceSection.css";
import { experiences } from "../data/experiences";

function ExperienceSection() {
  return (
    <div className="experienceSection">
      <div className="sectionTitle">Experiences</div>
      <div className="experienceContainer">
        {experiences.map((experience, index) => (
          <div key={index} className="experienceItem">
            <h2 className="experienceTitle">{experience.title}</h2>
            <p className="experienceDate">{experience.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;
