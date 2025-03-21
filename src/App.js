import React from "react";
import "./App.css";

import StartSection from "./components/StartSection.js";
import ProfileSection from "./components/ProfileSection.js";
import ExperienceSection from "./components/ExperienceSection.js";
import TechStackSection from "./components/TechStackSection.js";
import ProjectSection from "./components/ProjectSection.js";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import ParticleEffect from "./components/ParticleEffect.js";

function App() {
  return (
    <div className="App">
      <ParticleEffect />
      <Navbar />
      <StartSection />
      <ProfileSection />
      <ExperienceSection />
      <TechStackSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
