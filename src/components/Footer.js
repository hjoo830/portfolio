import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>Developed by Hyoju</p>
      <a
        href="https://github.com/hjoo830/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        style={{ height: "16px" }}
      >
        <FaGithub style={{ color: "#EEEEEE" }} />
      </a>
    </footer>
  );
};

const footerStyle = {
  display: "flex",
  padding: "1rem",
  backgroundColor: "#393E46",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
};

const textStyle = {
  fontSize: "0.9rem",
  color: "#A0AEC0",
  margin: "0",
};

export default Footer;
