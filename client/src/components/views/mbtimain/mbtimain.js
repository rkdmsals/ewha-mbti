import React, { useState, useEffect } from 'react';
import { Link, useNavigate, Route, Routes } from 'react-router-dom';
import './mtmainstyle.css';

function MbtiMain() {
  const navigate = useNavigate();
  const images = [
    '/img/ResultPage/Building/art_design.png',
    '/img/ResultPage/Building/auditorium.png',
    '/img/ResultPage/Building/business.png',
    '/img/ResultPage/Building/dormitory.png',
    '/img/ResultPage/Building/ecc.png',
    '/img/ResultPage/Building/education.png',
    '/img/ResultPage/Building/engineering.png',
    '/img/ResultPage/Building/helen.png',
    '/img/ResultPage/Building/jinseonmi.png',
    '/img/ResultPage/Building/law.png',
    '/img/ResultPage/Building/library.png',
    '/img/ResultPage/Building/music.png',
    '/img/ResultPage/Building/physical.png',
    '/img/ResultPage/Building/posco.png',
    '/img/ResultPage/Building/science.png',
    '/img/ResultPage/Building/student_union.png',

  ]

  const textData = [
  ];

  function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="image-slider">
        {/* <div className="slider-item"> */}
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="slider-image"
        />
        {/* <p className="image-description">{textData[currentIndex]}</p> */}
        {/* </div> */}
      </div>
    );
  }

  function ShareWithFriends() {
    try {
      navigator.clipboard.writeText(window.location.href).then(res => { alert("링크가 복사되었습니다!") })
    } catch (error) {
      const textArea = document.createElement('textarea');
      document.body.appendChild(textArea);
      textArea.value = window.location.href;
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  }

  return (
    <div className="MbtiMain">
      <div style={{ color: '#3A3A3A' }}>성격유형테스트</div>
      <div>나와 어울리는</div>
      <div>이화여자대학교</div>
      <div style={{ margin: '0', display: 'inline' }}>
        <div>건물 <div style={{ display: 'inline' }}>은?</div></div>
      </div>
      <ImageSlider />
      {/* <Link to="/test"> */}
      <button className="MbtiMainButton" style={{ backgroundColor: '#2e6d4a' }} onClick={() => navigate("/test")}>테스트 시작하기</button>
      {/* </Link> */}
      {/* <Link to="/share"> */}
      <button className="MbtiMainButton" style={{ backgroundColor: '#494949' }} onClick={ShareWithFriends}>친구에게 공유하기</button>
      {/* </Link> */}
      <div>
        <img src="/img/Footer/Footer_logo.png" alt="footer_logo" />
      </div>
    </div>
  );
}

export default MbtiMain;
