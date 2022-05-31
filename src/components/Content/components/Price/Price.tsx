import React from 'react';
import {Typography} from 'antd';
import './Price.css';
import {Card} from "./components";

const image1 = require('./1.png');
const image2 = require('./2.png');

export const data = [
  {
    id: '1',
    name: 'GeForce RTS 3090 SUPRIM X 24G',
    image: image1,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '2',
    name: 'GeForce RTS 3090 Ti GAMING X TRIO 24G',
    image: image2,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '3',
    name: 'GeForce RTS 3090 SUPRIM X 24G',
    image: image1,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '4',
    name: 'GeForce RTS 3090 Ti GAMING X TRIO 24G',
    image: image2,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '5',
    name: 'GeForce RTS 3090 SUPRIM X 24G',
    image: image1,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '6',
    name: 'GeForce RTS 3090 Ti GAMING X TRIO 24G',
    image: image2,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '7',
    name: 'GeForce RTS 3090 SUPRIM X 24G',
    image: image1,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '8',
    name: 'GeForce RTS 3090 Ti GAMING X TRIO 24G',
    image: image2,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '9',
    name: 'GeForce RTS 3090 SUPRIM X 24G',
    image: image1,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '10',
    name: 'GeForce RTS 3090 Ti GAMING X TRIO 24G',
    image: image2,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '11',
    name: 'GeForce RTS 3090 SUPRIM X 24G',
    image: image1,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '12',
    name: 'GeForce RTS 3090 Ti GAMING X TRIO 24G',
    image: image2,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '13',
    name: 'GeForce RTS 3090 SUPRIM X 24G',
    image: image1,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '14',
    name: 'GeForce RTS 3090 Ti GAMING X TRIO 24G',
    image: image2,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '15',
    name: 'GeForce RTS 3090 SUPRIM X 24G',
    image: image1,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '16',
    name: 'GeForce RTS 3090 Ti GAMING X TRIO 24G',
    image: image2,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '17',
    name: 'GeForce RTS 3090 SUPRIM X 24G',
    image: image1,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '18',
    name: 'GeForce RTS 3090 Ti GAMING X TRIO 24G',
    image: image2,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '19',
    name: 'GeForce RTS 3090 SUPRIM X 24G',
    image: image1,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '20',
    name: 'GeForce RTS 3090 Ti GAMING X TRIO 24G',
    image: image2,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '21',
    name: 'GeForce RTS 3090 SUPRIM X 24G',
    image: image1,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '22',
    name: 'GeForce RTS 3090 Ti GAMING X TRIO 24G',
    image: image2,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '23',
    name: 'GeForce RTS 3090 SUPRIM X 24G',
    image: image1,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
  {
    id: '24',
    name: 'GeForce RTS 3090 Ti GAMING X TRIO 24G',
    image: image2,
    descriptions: ['The exclusive MSI Center software helps you get the most out of your MSI products. Monitor, tweak and optimize in real-time with just a few clicks.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.', 'Create game profiles with personalized graphics card settings including performance, True Color, and more.', 'MSI GAMING LAN Manager automatically classifies and prioritizes latency-sensitive applications, giving you great low latency online gaming experiences.']
  },
]

const Price = () => {
  return (
    <div className="price">
      <Typography.Title>Catalog</Typography.Title>
      <div className="price__item-block">
        {data.map(item => (
          <Card data={item} />
        ))}
      </div>
    </div>
  );
}

export default Price;
