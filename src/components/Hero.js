import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import profileImg from '../assets/images/me.png';
import bgImg from '../assets/images/front_bg.jpg';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showRest, setShowRest] = useState(false);


useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener('scroll', handleScroll);

  // 초기에도 강제 트리거
  handleScroll();

  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
    });
    return () => window.removeEventListener('scroll', () => {});
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowSubtitle(true), 1800);
    const timer2 = setTimeout(() => setShowRest(true), 1800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const progress = Math.min(scrollY / window.innerHeight, 1);
  const opacity = 1 - progress;
  const scale = 1 - progress * 0.1;
  const translateY = progress * 100;

  return (
    <section
      id="hero"
      className="hero"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        className="hero-inner"
        style={{
          opacity,
          transform: `translateY(-${translateY}px) scale(${scale})`,
          filter: `blur(${progress * 4}px)`
        }}
      >
        <div className="top-links">
          <a href="https://github.com/leedongguk" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://velog.io/@leedongguk/posts" target="_blank" rel="noreferrer">Velog</a>
        </div>
        <h1 className="title typing-title">FULL-STACK</h1>
        {showRest && (
          <div className="hero-content fade-in">
            <p className="subtitle">백·프론트 개발자 <strong>이동국</strong>입니다.</p>
            <p className="desc">
              저는 <strong>사용자 중심</strong>의 시선으로,<br />
              끝까지 <strong>신뢰와 책임</strong>을 지키는 개발자입니다.
            </p>
            <img src={profileImg} alt="profile" className="profile-img" />
          </div>
        )}

        <div className="update-date">update. 25. 05. 27</div>
      </div>
    </section>
  );
};

export default Hero;
