import React from 'react';
import * as C from "./components";
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <C.Carousel />
      <C.About />
      <C.Product />
      <C.Perfect />
      <C.Price />
    </div>
  );
}

export default Home;
