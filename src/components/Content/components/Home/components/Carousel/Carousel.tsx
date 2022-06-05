import React from "react";
import {Carousel as CarouselANTD} from "antd";
import './Carousel.css'

const slide1 = require('./8k-fb-600-p@2x.jpg')
const slide2 = require('./34e7cd29d9ca66c66873d69403a05c33e6c3b249a718c87ee348f87059f7bd25.jpg')
const slide3 = require('./geforce-rtx-30-series-2nd-gen-rtx.jpg')
const slide4 = require('./geforce-rtx-30-series-nvidia-dlss.jpg')
const slide5 = require('./H32UeKryVG-y9mZKFzkmMw.jpeg')
const slide6 = require('./NVIDIA-GeForce-RTX-30-Series-Graphics-Cards_Announcement_GeForce-RTX-3090_RTX-3080_RTX-3070_6.png')
const slide7 = require('./NVIDIA-GeForce-RTX-3080-Graphics-Card_Benchmarks-Game-Performance-Tests_3DMark_1.jpg')
const slide8 = require('./RTX30.jpeg')
const slide9 = require('./vr-600-p@2x.jpg')

const Carousel = () => {
  return (
    <div className="carousel-container">
    <CarouselANTD autoplay >
      <div className="carousel-container__slide">
        <div className="carousel-container__slide-mask" />
        <img src={slide1} alt="1" />
      </div>
      <div className="carousel-container__slide">
        <div className="carousel-container__slide-mask" />
        <img src={slide2} alt="2" />
      </div>
      <div className="carousel-container__slide">
        <div className="carousel-container__slide-mask" />
        <img src={slide3} alt="3" />
      </div>
      <div className="carousel-container__slide">
        <div className="carousel-container__slide-mask" />
        <img src={slide4} alt="4" />
      </div>
      <div className="carousel-container__slide">
        <div className="carousel-container__slide-mask" />
        <img src={slide5} alt="5" />
      </div>
      <div className="carousel-container__slide">
        <div className="carousel-container__slide-mask" />
        <img src={slide6} alt="6" />
      </div>
      <div className="carousel-container__slide">
        <div className="carousel-container__slide-mask" />
        <img src={slide7} alt="7" />
      </div>
      <div className="carousel-container__slide">
        <div className="carousel-container__slide-mask" />
        <img src={slide8} alt="8" />
      </div>
      <div className="carousel-container__slide">
        <div className="carousel-container__slide-mask" />
        <img src={slide9} alt="9" />
      </div>
    </CarouselANTD>
    </div>
  )
}

export default Carousel;