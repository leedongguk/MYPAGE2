import React, { useRef, useEffect, useState } from 'react';
import './styles/global.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactPopup from './components/ContactPopup';
import { FaInstagram } from 'react-icons/fa';
import { IoMailSharp, IoEllipsisHorizontalSharp, IoArrowUpSharp, IoArrowDownSharp } from 'react-icons/io5';

const App = () => {
  const containerRef = useRef(null);
  const currentIndexRef = useRef(0);
  const isScrollingRef = useRef(false);
  const [isDownDisabled, setIsDownDisabled] = useState(false);
  const [isUpDisabled, setIsUpDisabled] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const scrollToSection = (index) => {
    const container = containerRef.current;
    const sections = container?.children;
    if (container && sections && sections[index]) {
      const target = sections[index];
      const topOffset = target.offsetTop;

      container.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });

      Array.from(sections).forEach((sec) => sec.classList.remove('visible'));
      target.classList.add('visible');

      setIsUpDisabled(index === 0);
      setIsDownDisabled(index === sections.length - 1);
    }
  };

  useEffect(() => {
    const mobileCheck = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(mobileCheck);
  }, []);

useEffect(() => {
  if (!isMobile) return;

  const projectSection = document.querySelector('#project');

  const preventScroll = (e) => {
    const isInProjectSection = projectSection?.contains(e.target);

    if (isInProjectSection) {
      // 가로 스크롤이 아닌 수직 스크롤만 차단
      const isVerticalScroll = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      if (isVerticalScroll && e.cancelable) {
        e.preventDefault();
      }
    } else {
      // 다른 영역은 전체 스크롤 차단
      e.preventDefault();
    }
  };

  window.addEventListener('wheel', preventScroll, { passive: false });
  window.addEventListener('touchmove', preventScroll, { passive: false });

  return () => {
    window.removeEventListener('wheel', preventScroll);
    window.removeEventListener('touchmove', preventScroll);
  };
}, [isMobile]);






  useEffect(() => {
    const sections = containerRef.current.querySelectorAll('section');
    if (sections[0]) {
      sections[0].classList.add('visible'); // 첫 번째 섹션은 보이게
    }
  }, []);

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh(); // 최초 실행

    window.addEventListener('resize', setVh); // 리사이즈 시 재계산

    return () => window.removeEventListener('resize', setVh);
  }, []);

  // App 컴포넌트 안에
  const handleWheel = (e) => {
    e.preventDefault();

    if (isScrollingRef.current) return;

    const delta = e.deltaY;
    const sections = containerRef.current?.children;

    if (delta > 0 && currentIndexRef.current < sections.length - 1) {
      currentIndexRef.current += 1;
    } else if (delta < 0 && currentIndexRef.current > 0) {
      currentIndexRef.current -= 1;
    }

    scrollToSection(currentIndexRef.current);

    isScrollingRef.current = true;
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  // App 컴포넌트 안에 useEffect로 등록
  useEffect(() => {
    if (isMobile) {
      // 모바일이면 section 단위 휠 스크롤 비활성화
      window.removeEventListener('wheel', handleWheel);
    } else {
      window.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => window.removeEventListener('wheel', handleWheel);
  }, [isMobile]);



  return (
  <>
    <main ref={containerRef}>
      <section id="hero"><Hero /></section>
      <section id="career"><About /></section>
      <section id="project"><Projects /></section>
      <section id="footer"><Footer /></section>
    </main>
      <div className="floating-icons-global">
        <button title="인스타그램" onClick={() => window.open('https://www.instagram.com/moving_country99/', '_blank')}>
          <FaInstagram size={24} />
        </button>
        <button title="메일" onClick={() => setShowContact(true)}>
          <IoMailSharp size={24} />
        </button>
        <button
          title="위로"
          disabled={isUpDisabled}
          onClick={() => {
            const sections = containerRef.current?.children;
            if (sections && currentIndexRef.current > 0) {
              currentIndexRef.current -= 1;
              scrollToSection(currentIndexRef.current);
            }
          }}
        >
          <IoArrowUpSharp size={24} />
        </button>
        <button
          title="아래로"
          disabled={isDownDisabled}
          onClick={() => {
            const sections = containerRef.current?.children;
            if (sections && currentIndexRef.current < sections.length - 1) {
              currentIndexRef.current += 1;
              scrollToSection(currentIndexRef.current);
            }
          }}
        >
          <IoArrowDownSharp size={24} />
        </button>
      </div>
      {showContact && <ContactPopup onClose={() => setShowContact(false)} />}
    </>
  );
};

export default App;
