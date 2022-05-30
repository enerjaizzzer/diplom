import React from "react";
import './About.css'
import {Typography} from "antd";

const About = () => {
  return (
    <div className="about-container">
      <Typography.Text className="about-container__item">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tincidunt quam. Proin nec tristique turpis, eget ornare elit. Phasellus scelerisque nisl sed fringilla vestibulum. Phasellus arcu elit, pharetra sagittis iaculis non, euismod in quam. Aenean sed urna eget justo rutrum venenatis. Suspendisse nec pretium lacus. Sed vestibulum urna at velit porttitor, eget dictum turpis auctor. Integer blandit porttitor nunc quis maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris consequat dolor felis, dignissim cursus nisl pharetra nec.
      </Typography.Text>
      <Typography.Text className="about-container__item">
        Nulla fringilla metus vel ultricies facilisis. Suspendisse potenti. Nam at metus quis urna laoreet ultrices. Nam nec lectus eu augue dignissim commodo id non nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sit amet dui at elit dapibus pretium. Quisque fermentum pulvinar nibh, id aliquet orci semper non. Nam rutrum tempus turpis, in eleifend arcu. Sed non tellus egestas, sagittis metus id, dictum augue. Cras pretium augue quis elit mattis molestie. Praesent eu massa et massa iaculis cursus eget in ex. In dolor dui, rhoncus eget diam eget, facilisis facilisis nulla. Nunc sodales non quam vel vehicula. Phasellus varius, enim id fermentum fringilla, sem lacus condimentum metus, sed interdum tortor purus at sem. Donec eu hendrerit nisi, ut lobortis risus.
      </Typography.Text>
    </div>
  )
}

export default About;