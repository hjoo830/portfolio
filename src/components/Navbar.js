import React from "react";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#profile">Profile</a>
        </li>
        <li>
          <a href="#experience">Experiences</a>
        </li>
        <li>
          <a href="#techstack">Tech Stacks</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
