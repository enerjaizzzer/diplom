import React from "react";
import './Product.css'

const product1 = require('./01.jpg')
const product2 = require('./02.png')
const product3 = require('./03.png')
const product4 = require('./04.png')

const Product = () => {
  const product = React.useRef<HTMLDivElement>(null);
  const [percent, setPercent] = React.useState<number | undefined>();

  const position1 = {
    first: 0,
    second: 0,
  };
  const position2 = {
    first: -5,
    second: 5,
  };
  const position3 = {
    first: 10,
    second: 6,
  };
  const position4 = {
    first: 10,
    second: -5,
  };

  const getStatus = (node: any) => {
    if(node === undefined || node === null) {
      return;
    }

    const top = node.getBoundingClientRect().top;
    const height = node.offsetHeight;
    const d =  height - Math.abs(top);
    return d * 100 / height;
  };

  const getNewPosition = (position: {first: number, second: number}, percent: number | undefined) => {
    if(!percent || percent < 20) {
      return `${position.first}%, ${position.second}%`
    }

    return `${Math.round(position.first - (position.first * percent / 100))}%, ${Math.round(position.second - (position.second * percent / 100))}%`
  }

  React.useEffect(() => {
    if (!percent) {
      document.addEventListener('scroll', () => {
        const percent = getStatus(product.current) || 0;
        setPercent(percent);
      })
    }
  }, [])

  return (
    <div className="product-container" ref={product}>
      <img
        src={product1}
        className={`product-container__item product-container__item-1`} alt="product1"
        style={{transform: `translate(${getNewPosition(position1, percent)})`}}
      />
      <img
        src={product2}
        className={`product-container__item product-container__item-2`} alt="product2"
        style={{transform: `translate(${getNewPosition(position2, percent)})`}}
      />
      <img
        src={product3}
        className={`product-container__item product-container__item-3`} alt="product3"
        style={{transform: `translate(${getNewPosition(position3, percent)})`}}
      />
      <img
        src={product4}
        className={`product-container__item product-container__item-4`} alt="product4"
        style={{transform: `translate(${getNewPosition(position4, percent)})`}}
      />
    </div>
  )
}

export default Product;
