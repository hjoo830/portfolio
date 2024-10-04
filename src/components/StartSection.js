import React, { useEffect } from "react";
import "../css/StartSection.css";

const StartSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const firstText = document.querySelectorAll(
        ".startText h1:first-child, .strokeText h1:first-child"
      );
      const secondText = document.querySelectorAll(
        ".startText h1:last-child, .strokeText h1:last-child"
      );

      firstText.forEach((element) => {
        element.style.transform = `translateX(-${scrollY * 0.5}px)`; // 왼쪽으로 이동
      });

      secondText.forEach((element) => {
        element.style.transform = `translateX(${scrollY * 0.5}px)`; // 오른쪽으로 이동
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="startSection">
      <div className="startText">
        <h1>HWANG HYO JU</h1>
        <h1>Frontend Developer</h1>
      </div>
      <div className="circle"></div>
      <div className="strokeText">
        <h1>HWANG HYO JU</h1>
        <h1>Frontend Developer</h1>
      </div>
    </div>
  );
};

export default StartSection;
