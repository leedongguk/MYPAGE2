import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactPopup.css'; // 스타일링

const ContactPopup = ({ onClose }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_u2lf8ha',           // ✔️ 서비스 ID
        'template_4himhdd',          // ✔️ 템플릿 ID
        form.current,                // ✔️ 폼 ref
        'LkkQCYnUUFUMf8Xu0'      // ✔️ 올바른 public key (문자열)
      )
      .then(() => {
        alert('이메일이 성공적으로 전송되었습니다.');
        onClose();
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('이메일 전송 실패');
      });
  };


  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="title" placeholder="Title" required />
          <input type="text" name="time" value={new Date().toLocaleString()} readOnly hidden />
          <textarea name="message" placeholder="Message" rows="5" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
