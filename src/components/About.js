import React, { useState } from 'react';
import '../styles/about.css';
import img from '../assets/images/meme.png';
import htmlIcon from '../assets/images/logo/html.png'; // 아래에서 쓰는 아이콘들
import cssIcon from '../assets/images/logo/css.png';
import jsIcon from '../assets/images/logo/js.png';
import reactIcon from '../assets/images/logo/react.png';
import figmaIcon from '../assets/images/logo/figma.png';
import githubIcon from '../assets/images/logo/github.png';
import notionIcon from '../assets/images/logo/notion.png';
import discordIcon from '../assets/images/logo/discord.png';
import springIcon from '../assets/images/logo/spring.png';
import awsIcon from '../assets/images/logo/aws.png';
import mysqlIcon from '../assets/images/logo/mysql.png';
import swaggerIcon from '../assets/images/logo/swagger.png';
import jwtIcon from '../assets/images/logo/jwt.png';
import jpaIcon from '../assets/images/logo/jpa.png';
import { FaMedal } from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('interview');

  return (
    <section className="about" id="career">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <img src={img} alt="profile" className="about-img" />
        <div className="about-tags">
          <span>#열정지식</span>
          <span>#빠른학습</span>
          <span>#피드백_수용</span>
          <span>#끊임없는_배움</span>
        </div>
        <div className="about-tabs">
          <button className={activeTab === 'interview' ? 'active' : ''} onClick={() => setActiveTab('interview')}>Interview</button>
          <button className={activeTab === 'skills' ? 'active' : ''} onClick={() => setActiveTab('skills')}>Skill & Tools</button>
          <button className={activeTab === 'History' ? 'active' : ''} onClick={() => setActiveTab('History')}>History</button>
        </div>
      </div>

      {activeTab === 'interview' && (
        <div className="interview-section">
          <div className="interview-card">
            <p><strong>Q. 프론트·백 둘 다 공부하는 이유?</strong></p>
            <p>
              단순히 코딩이 재미있어서 시작했습니다. 프론트엔드와 백엔드를 모두 경험해보며,<br />
              각각의 매력을 직접 느꼈고, 하나에만 집중하기보다는 전체 흐름을 이해하는 개발자가 되고 싶었습니다.<br />
              프론트에서는 사용자와의 상호작용을, 백엔드에서는 시스템 구조와 데이터 흐름을 다루는 재미가 있었고,<br />
              **하나의 서비스를 처음부터 끝까지 직접 만들어가는 과정**에서 큰 즐거움을 느끼고 있습니다.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'History' && (
        <div className="history-section">
      <div className="history-section">

        <div className="history-card">
          <p><span className="emoji">🎓</span><strong> 2024.03 - 2024.10</strong><br />
            [한이음] 전기차 충전소 안내 시스템 앱 제작 및 수료 (공공데이터활용)
          </p>
        </div>

        <div className="history-card">
          <p><span className="emoji">🎓</span><strong> 2024.03 - 2024.10</strong><br />
            [한이음] 테이블오더 웹/앱 제작 및 수료
          </p>
        </div>

        <div className="history-card">
          <p><span className="emoji">🥉</span><strong> 2024.03 - 2024.08</strong><br />
            [헥토그룹] 성과 발표회 (동상)
          </p>
        </div>

        <div className="history-card">
          <p><span className="emoji">🥉</span><strong> 2024.03 - 2024.08</strong><br />
            [서경대] SW아카데미 경진대회 (동상)
          </p>
        </div>

        <div className="history-card">
          <p><span className="emoji">🎓</span><strong> 2025.05</strong><br />
            [국토교통 경진대회] AI 상권 분석 플랫폼
          </p>
        </div>

      </div>

        </div>
      )}

      {activeTab === 'skills' && (
        <div className="skills-section">
          <div className="skills-category">
            <h4>FrontEnd</h4>
            <div className="skills-icons">
              <img src={htmlIcon} alt="html" />
              <img src={cssIcon} alt="css" />
              <img src={jsIcon} alt="js" />
              <img src={reactIcon} alt="react" />
            </div>
          </div>

          <div className="skills-category">
            <h4>BackEnd</h4>
            <div className="skills-icons">
              <img src={springIcon} alt="html" />
              <img src={jwtIcon} alt="css" />
              <img src={jpaIcon} alt="js" />
              <img src={awsIcon} alt="react" />
              <img src={swaggerIcon} alt="react" />
            </div>
          </div>

          <div className="skills-category">
            <h4>ETC</h4>
            <div className="skills-icons">
              <img src={figmaIcon} alt="figma" />
              <img src={githubIcon} alt="github" />
              <img src={notionIcon} alt="notion" />
              <img src={discordIcon} alt="discord" />
            </div>
          </div>

        </div>
      )}


    </section>
  );
};

export default About;
