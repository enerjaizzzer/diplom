import React from 'react';
import {Carousel, About, Product, Perfect} from "./components";
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <About />
      <Product />
      <Perfect />
    </div>
  );
}

export default Home;
