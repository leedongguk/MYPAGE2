import React, { useRef, useState, useEffect } from 'react';
import '../styles/footer.css';
import bgImg from '../assets/images/front_bg.jpg';

const Footer = () => {
  const footerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [typingDone, setTypingDone] = useState(false); // ✅ 추가

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  useEffect(() => {
    let timer;

    if (inView) {
      setTypingDone(false); // 재진입 시 초기화

      timer = setTimeout(() => {
        setTypingDone(true); // 1초 후 다시 등장
      }, 1000);
    } else {
      setTypingDone(false); // 뷰에서 나갈 때 초기화
    }

    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <section
      className="footer"
      ref={footerRef}
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="footer-inner">
        <div className="footer-title-wrapper">
          <h1 className={`footer-title ${inView ? 'typing' : ''}`}>
            Thank You
          </h1>
          {typingDone && (
            <p className="footer-sub-overlap">
              봐주셔서 감사합니다 :)
            </p>
          )}
        </div>

        {typingDone && (
          <>
            <p className="footer-desc fade-in">
              좋은 개발자로 성장하기 위해 낮선 기술에도 적극적으로 도전하고,<br />
              항상 사용자의 관점에서 생각하며 사용하기 좋은 서비스를 만들고 싶습니다.
            </p>

            <div className="footer-links fade-in">
              <a href="https://github.com/leedongguk" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://velog.io/@leedongguk/posts" target="_blank" rel="noreferrer">Velog</a>
            </div>
          </>
        )}

        <p className="footer-copy">© 2025. 이동국. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
