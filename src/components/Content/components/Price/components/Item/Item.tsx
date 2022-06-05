import React from "react";
import {Button, Typography } from 'antd';
import {LeftOutlined, CheckOutlined, CloseOutlined} from '@ant-design/icons';
import './Item.css'
import {useLocation, useNavigate} from "react-router-dom";
import {data} from '../../Price';

const informationTemplate = ["date", "interface", "processor", "cuda", "power", "frequency"];
const priceData: any = {
  "GeForce RTX 3090 Ti": '1 999 - 2 499',
  "GeForce RTX 3090": '1 549 - 1 799',
  "GeForce RTX 3080 Ti": '1 119 - 1 399',
  "GeForce RTX 3080": '719 - 839',
  "GeForce RTX 3070 Ti": '619-699',
  "GeForce RTX 3070": '519 - 609',
  "GeForce RTX 3060 Ti": '419 - 489',
  "GeForce RTX 3060": '399 - 439',
  "GeForce RTX 3050 Ti": '329 - 379',
  "GeForce RTX 3050": '259 - 299',

}

const Item: React.FC = () => {
  const id = useLocation().pathname.split('/').pop();
  const navigate = useNavigate();
  const record: any = data.find(item => item.id === id)

  return <div className="item">
    <div className="item__title">
      <Button type="primary" shape="circle" icon={<LeftOutlined />} onClick={() => navigate(`/videoFeature/catalog`)} />
      <Typography.Title>{record?.name}</Typography.Title>
    </div>
    <div className="item__gallery">
      {record?.images?.map((image: any) =>
        <div className="item__gallery-item">
          <img src={image} alt={record?.id}/>
        </div>
      )}
    </div>
    <div className="item__information">
      <Typography.Title level={4}>Information</Typography.Title>

        {informationTemplate.map(template => (
          <div className="item__information-item">
            <Typography.Title className="item__information-item-title" level={5}>{template.toUpperCase()}</Typography.Title>

            <Typography.Title className="item__information-item-description" level={5}>{record[template]?.toUpperCase()}</Typography.Title>
          </div>
        ))}
      <div className="item__information-item">
        <Typography.Title className="item__information-item-title" level={5}>LHR</Typography.Title>

        <Typography.Title className="item__information-item-description" level={5}>{record.lhr ? <CheckOutlined /> : <CloseOutlined /> }</Typography.Title>
      </div>
      <div className="item__information-item">
        <Typography.Title className="item__information-item-title" level={5}>Price</Typography.Title>

        <Typography.Title className="item__information-item-description" level={5}>{priceData[record.processor]}(€)</Typography.Title>
      </div>
    </div>
  </div>
}

export default Item;