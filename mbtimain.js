import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './mtmainstyle.css';

function MbtiMain() {
  const images = [
    'public/img/auditorium.png',
    'public/img/auditorium.png',
    'public/img/auditorium.png',
    'public/img/auditorium.png',
    'public/img/auditorium.png',
    'public/img/auditorium.png',
    'public/img/auditorium.png',
    'public/img/auditorium.png',
    'public/img/auditorium.png',
    'public/img/auditorium.png',
    'public/img/auditorium.png',
    'public/img/auditorium.png',
    'public/img/auditorium.png',
    'public/img/auditorium.png',
    'public/img/auditorium.png',
    'public/img/auditorium.png'
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
        <div className="slider-item">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="slider-image"
          />
          <p className="image-description">{textData[currentIndex]}</p>
        </div>
      </div>
    );
  }

  function TestStart() {
    return <h2>테스트 시작 페이지</h2>;
  }

  function ShareWithFriends() {
    return <h2>친구에게 공유 페이지</h2>;
  }

  return (
    <div className="MbtiMain">
      <h3>성격유형테스트</h3>
      <h1>나와 어울리는</h1>
      <h1>이화여자대학교</h1>
      <h1>건물 <span>은?</span></h1>
      <ImageSlider />
      <Link to="/button1">
        <button>테스트 시작하기</button>
      </Link>
      <Link to="/button2">
        <button style={{ backgroundColor: '#2e6d4a' }}>친구에게 공유하기</button>
      </Link>
      <Routes>
        <Route path="/button1" component={TestStart} />
        <Route path="/button2" component={ShareWithFriends} />
      </Routes>
      <div style={{ marginTop: '50px' }}>
        <img src="public/img/Footer/Footer_logo.png" alt="footer_logo" />
      </div>
    </div>
  );
}

export default MbtiMain;
