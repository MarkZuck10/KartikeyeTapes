import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const Style = {
    height: "40vh",
  };
  const images = [
    "elastic-tape.png",
    "34.jpg",
    "35.jpg",
    "36.jpg",
    "37.jpg",
    "38.jpg",
    "39.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="slideshow" style={{ display: "flex" }}>
      <LeftOutlined
        style={{ fontSize: "30px", color: "#2e3794" }}
        onClick={handlePrevious}
      />
      <img
        style={Style}
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
      <RightOutlined
        style={{ fontSize: "30px", color: "#2e3794" }}
        onClick={handleNext}
      />
    </div>
  );
}

export default Slideshow;
