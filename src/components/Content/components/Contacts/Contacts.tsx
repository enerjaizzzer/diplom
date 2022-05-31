import React from 'react';
import {Descriptions} from "antd";
import './Contacts.css'

const map = require('./map.jpg')

const Contacts = () => {
  return (
    <div className="contacts">
      <Descriptions title="Contacts">
        <Descriptions.Item label="Phone number">+375 (44) 777 77 77</Descriptions.Item>
        <Descriptions.Item label="Address">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Phone number">+375 (44) 777 77 77</Descriptions.Item>
      </Descriptions>
      <div className="contacts__map">
        <img src={map} alt="map" />
      </div>
    </div>
  );
}

export default Contacts;
