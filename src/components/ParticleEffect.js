import React, { useEffect, useRef } from "react";
import "../css/ParticleEffect.css";

const ParticleEffect = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const colors = [
      "#60A5FA",
      "#93C5FD",
      "#4B5563",
      "#A0AEC0",
      "#1E3A8A",
      "#2563EB",
      "#38BDF8",
    ];

    const createParticle = (x, y) => {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      // 랜덤 색상 선택
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.backgroundColor = color;

      // 랜덤한 방향과 거리로 이동
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 20 + 10;
      particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
      particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

      containerRef.current.appendChild(particle);

      particle.addEventListener("animationend", () => {
        particle.remove();
      });
    };

    const handleMouseMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="particle-container" ref={containerRef}></div>;
};

export default ParticleEffect;
