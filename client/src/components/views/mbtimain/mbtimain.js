import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './mtmainstyle.css';

function MbtiMain() {
  const images = [
    '/img/auditorium.png',
    '/img/auditorium.png',
    '/img/auditorium.png',
    '/img/auditorium.png',
    '/img/auditorium.png',
    '/img/auditorium.png',
    '/img/auditorium.png',
    '/img/auditorium.png',
    '/img/auditorium.png',
    '/img/auditorium.png',
    '/img/auditorium.png',
    '/img/auditorium.png',
    '/img/auditorium.png',
    '/img/auditorium.png',
    '/img/auditorium.png',
    '/img/auditorium.png',
    
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
      <div style={{ color:'#3A3A3A'}}>성격유형테스트</div>
      <div>나와 어울리는</div>
      <div>이화여자대학교</div>
      <div style={{ margin: '0', display: 'inline', marginBottom: '22px' }}>
        <div>건물 <div style={{display: 'inline', paddingRight: '10px'}}>은?</div></div>
      </div>
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
      <div>
        <img src="/img/Footer/Footer_logo.png" alt="footer_logo"/>
      </div>
    </div>
  );
}

export default MbtiMain;
