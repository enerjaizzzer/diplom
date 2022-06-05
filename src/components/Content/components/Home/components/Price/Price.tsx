import React from "react";
import './Price.css'
import {Button, Typography} from "antd";

const Price = () => {
  return (
    <div className="price-container">
      <Typography.Text className="price-container__item">
        Check out the price list right now. There you will find only the last 2 generations of video cards and detailed information about them. Since it's not that easy to find video cards you have to visit the price list and then write us an email to order your video card. Try it now
      </Typography.Text>
      <Button size="large">Price</Button>
    </div>
  )
}

export default Price;