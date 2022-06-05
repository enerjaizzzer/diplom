import React from "react";
import './About.css'
import {Typography} from "antd";

const About = () => {
  return (
    <div className="about-container">
      <Typography.Text className="about-container__item">
        The portal is intended for getting acquainted with the characteristics of video cards. Here you can find out about the latest arrivals and compare them with their peers. Also only honest video card reviews and prices.
      </Typography.Text>
      <Typography.Text className="about-container__item">
        This is the gamer community here. In times of scarcity it is very difficult to find a gamer an adequate graphics card and buy it for adequate money. Miners and other exploiters of iron peripherals should leave and not interfere with gamers going into their bright future with modern hardware. Crisis times unite. Join us!
      </Typography.Text>
    </div>
  )
}

export default About;