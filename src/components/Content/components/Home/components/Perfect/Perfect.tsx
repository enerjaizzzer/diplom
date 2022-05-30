import React from "react";
import './Perfect.css'
import {Typography} from "antd";

const perfect1 = require('./perfection1.png')
const perfect2 = require('./perfection2.png')
const perfect3 = require('./perfection3.png')
const perfect4 = require('./perfection4.png')
const perfect5 = require('./perfection5.png')
const perfect6 = require('./perfection6.png')

const Perfect = () => {
  const perfect = React.useRef<HTMLDivElement>(null);
  const [percent, setPercent] = React.useState<number>(0);

  const getStatus = (node: any) => {
    if(node === undefined || node === null) {
      return;
    }

    return node.getBoundingClientRect().top;
  };

  React.useEffect(() => {
    if (!percent) {
      document.addEventListener('scroll', () => {
        const percent = getStatus(perfect.current) || 0;
        setPercent(percent);
      })
    }
  }, [])

  console.log(percent)

  return (
    <div className="perfect-container" ref={perfect}>
      <div className="perfect-container__title">
        <Typography.Title>CHISELED TO PERFECTION</Typography.Title>
        <Typography.Text>
          Built upon two decades of award-winning graphics cards, the time to evolve beyond Gaming has come. A new design philosophy takes shape to pave the way for a new prestigious series.
        </Typography.Text>
      </div>

      <div
        className="perfect-container__item perfect-container__item-1"
        style={percent < 300 ? {
          opacity: 1,
          transform: 'scale(1)'
        } : {}}
      >
        <img
          src={perfect1}
          alt="perfect1"
        />
        <span className="perfect-container__span perfect-container__span-1-1">Brushed metal</span>
        <span className="perfect-container__span perfect-container__span-1-2">Brushed metal</span>
        <span className="perfect-container__span perfect-container__span-1-3">Finishing touches</span>
      </div>
      <div
        className="perfect-container__item perfect-container__item-2"
        style={percent < 250 ? {
          opacity: 1,
          transform: 'scale(1)'
        } : {}}
      >
        <img
          src={perfect2}
          alt="perfect2"
        />
        <span className="perfect-container__span perfect-container__span-2-1">Polygon shapes</span>
      </div>
      <div
        className="perfect-container__item perfect-container__item-3"
        style={percent < -100 ? {
          opacity: 1,
          transform: 'scale(1)'
        } : {}}
      >
        <img
          src={perfect3}
          alt="perfect3"
        />
        <span className="perfect-container__span perfect-container__span-3-1">Angle to add finesse</span>
      </div>
      <div
        className="perfect-container__item perfect-container__item-4"
        style={percent < -200 ? {
          opacity: 1,
          transform: 'translate(0, 0)'
        } : {}}
      >
        <img
          src={perfect4}
          alt="perfect4"
        />
      </div>
      <div
        className="perfect-container__item perfect-container__item-5"
        style={percent < -500 ? {
          opacity: 1,
          transform: 'scale(1)'
        } : {}}
      >
        <img
          src={perfect5}
          alt="perfect5"
        />
        <span className="perfect-container__span perfect-container__span-5-1">Polished surface for faster flow</span>
      </div>
      <div
        className="perfect-container__item perfect-container__item-6"
        style={percent < -600 ? {
          opacity: 1,
          transform: 'scale(1)'
        } : {}}
      >
        <img
          src={perfect6}
          alt="perfect6"
        />
        <span className="perfect-container__span perfect-container__span-6-1">Outer structure to foucs flow</span>
      </div>

      {/*<img*/}
      {/*  src={product2}*/}
      {/*  className={`product-container__item product-container__item-2`} alt="product2"*/}
      {/*  style={{transform: `translate(${getNewPosition(position2, percent)})`}}*/}
      {/*/>*/}
      {/*<img*/}
      {/*  src={product3}*/}
      {/*  className={`product-container__item product-container__item-3`} alt="product3"*/}
      {/*  style={{transform: `translate(${getNewPosition(position3, percent)})`}}*/}
      {/*/>*/}
      {/*<img*/}
      {/*  src={product4}*/}
      {/*  className={`product-container__item product-container__item-4`} alt="product4"*/}
      {/*  style={{transform: `translate(${getNewPosition(position4, percent)})`}}*/}
      {/*/>*/}
    </div>
  )
}

export default Perfect;
