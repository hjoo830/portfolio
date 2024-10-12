import React from "react";
import "./App.css";

import StartSection from "./components/StartSection.js";
import ProfileSection from "./components/ProfileSection.js";
import ExperienceSection from "./components/ExperienceSection.js";
import TechStackSection from "./components/TechStackSection.js";
import ProjectSection from "./components/ProjectSection.js";

function App() {
  return (
    <div className="App">
      <StartSection />
      <ProfileSection />
      <ExperienceSection />
      <TechStackSection />
      <ProjectSection />
    </div>
  );
}

export default App;
