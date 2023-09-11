import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './mtmainstyle.css';

function MbtiMain() {
  const images = [
    // 이미지 
  ];

  const textData = [
    // 이미지 설명
  ];

  function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 1500);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="image-slider">
        <h3>성격유형테스트</h3>
        <h1>나와 어울리는</h1>
        <h1>이화여자대학교</h1>
        <h1>건물</h1>
        <h1>은?</h1>
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
      <Link to="/button1">
        <button>테스트 시작하기</button>
      </Link>
      <Link to="/button2">
        <button>친구에게 공유하기</button>
      </Link>
      <Routes>
        <Route path="/button1" component={TestStart} />
        <Route path="/button2" component={ShareWithFriends} />
      </Routes>
      <ImageSlider />
    </div>
  );

}

export default MbtiMain;
