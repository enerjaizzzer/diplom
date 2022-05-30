import React from "react";
import {Carousel as CarouselANTD} from "antd";
import './Carousel.css'

const slide1 = require('./1.jpg')
const slide2 = require('./2.jpg')
const slide3 = require('./3.jpg')

const Carousel = () => {
  return (
    <div className="carousel-container">
    <CarouselANTD autoplay>
      <div className="carousel-container__slide">
        <img src={slide1} alt="1" />
      </div>
      <div className="carousel-container__slide">
        <img src={slide2} alt="2" />
      </div>
      <div className="carousel-container__slide">
        <img src={slide3} alt="3" />
      </div>
    </CarouselANTD>
    </div>
  )
}

export default Carousel;