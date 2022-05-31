import React from "react";
import './Price.css'
import {Button, Typography} from "antd";

const Price = () => {
  return (
    <div className="price-container">
      <Typography.Text className="price-container__item">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tincidunt quam. Proin nec tristique turpis, eget ornare elit. Phasellus scelerisque nisl sed fringilla vestibulum. Phasellus arcu elit, pharetra sagittis iaculis non, euismod in quam. Aenean sed urna eget justo rutrum venenatis. Suspendisse nec pretium lacus. Sed vestibulum urna at velit porttitor, eget dictum turpis auctor. Integer blandit porttitor nunc quis maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris consequat dolor felis, dignissim cursus nisl pharetra nec.
      </Typography.Text>
      <Button>Price</Button>
    </div>
  )
}

export default Price;