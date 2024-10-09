import React, { useState } from "react";
import "../css/ExperienceSection.css";
import { experiences } from "../data/experiences";
import { FiFileText } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";

function ExperienceSection() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="experienceSection">
      <div className="sectionTitle">Experiences</div>
      <div className="experienceContainer">
        {experiences.map((experience, index) => (
          <div key={index} className="experienceItem">
            <div className="experienceTitleWrapper">
              <h2 className="experienceTitle">{experience.title}</h2>
              {experience.type === "file" && experience.imgSrc && (
                <div>
                  <FiFileText
                    onClick={() => openModal(experience.imgSrc)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              )}
              {experience.type === "github" &&
                experience.link !== "private" && (
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub style={{ color: "#EEEEEE" }} />
                  </a>
                )}
              {experience.type === "github" &&
                experience.link === "private" && (
                  <p>
                    <FaGithub />
                    <IoIosLock />
                  </p>
                )}
            </div>
            <p className="experienceDate">{experience.date}</p>
          </div>
        ))}
      </div>
      {modalImage && (
        <div className="modalBackground" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeButton" onClick={closeModal}>
              X
            </button>
            <img src={modalImage} alt="Experience" className="modalImage" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ExperienceSection;
