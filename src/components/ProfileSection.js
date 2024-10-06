import React from "react";
import "../css/ProfileSection.css";
import profileImg from "../assets/profileImg.png";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

function ProfileSection() {
  return (
    <div className="profileSection">
      <div className="profilecontainer">
        <div className="profileInfo">
          <div className="profileWrap">
            <img src={profileImg} alt="profile" />
            <div className="profileInfoText">
              <p>황효주</p>
              <p>2002.08.30</p>
              <p>Frontend Developer</p>
            </div>
          </div>
          <div className="profileLinkContainer">
            <div className="linkBorder"></div>
            <a
              href="mailto:hjoo830@naver.com"
              target="_blank"
              rel="noopener noreferrer"
              className="profileLink"
            >
              <IoIosMail className="profileLinkIcon" />
              hjoo830@naver.com
            </a>
            <a
              href="https://github.com/hjoo830"
              target="_blank"
              rel="noopener noreferrer"
              className="profileLink"
            >
              <FaGithub className="profileLinkIcon" />
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/%ED%9A%A8%EC%A3%BC-%ED%99%A9-629560331/"
              target="_blank"
              rel="noopener noreferrer"
              className="profileLink"
            >
              <FaLinkedin className="profileLinkIcon" />
              LINKEDIN
            </a>
            <a
              href="https://velog.io/@hjoo830/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="profileLink"
            >
              <SiVelog className="profileLinkIcon" />
              BLOG
            </a>
          </div>
        </div>
        <div className="introduction">
          <p>
            <span>주도적</span>으로 <span>문제를 해결</span>하고,
            <span> 지속적인 성장</span>을 추구하는
            <span> 프론트엔드 개발자</span>
            입니다.
            <br />
            최신 기술을 활용해 효율적이고 <span>유지보수성</span>이 높은 코드를
            작성하며,
            <br />
            사용자 경험을 고려한 <span>UI/UX 개선</span>에 집중하고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
