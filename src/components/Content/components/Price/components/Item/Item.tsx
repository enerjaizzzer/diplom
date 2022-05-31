import React from "react";
import {Button, Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import './Item.css'
import {useLocation, useNavigate} from "react-router-dom";
import {data} from '../../Price';

const Item: React.FC = () => {
  const id = useLocation().pathname.split('/').pop();
  const navigate = useNavigate();
  const record = data.find(item => item.id === id)

  return <div className="item">
    <div className="item__title">
      <Button type="primary" shape="circle" icon={<LeftOutlined />} onClick={() => navigate(`/catalog`)} />
      <Typography.Title>{record?.name}</Typography.Title>
    </div>
    <div className="item__gallery">
      <img src={record?.image} alt={record?.id}/>
      <img src={record?.image} alt={record?.id}/>
      <img src={record?.image} alt={record?.id}/>
      <img src={record?.image} alt={record?.id}/>
    </div>
    <div className="item__information">
      <Typography.Title level={4}>Information</Typography.Title>

        {record?.descriptions.map(description => (
          <Typography.Title className="item__information-description" level={5}>{description}</Typography.Title>
        ))}
      {record?.descriptions.map(description => (
        <Typography.Title className="item__information-description" level={5}>{description}</Typography.Title>
      ))}
      {record?.descriptions.map(description => (
        <Typography.Title className="item__information-description" level={5}>{description}</Typography.Title>
      ))}
      {record?.descriptions.map(description => (
        <Typography.Title className="item__information-description" level={5}>{description}</Typography.Title>
      ))}
      {record?.descriptions.map(description => (
        <Typography.Title className="item__information-description" level={5}>{description}</Typography.Title>
      ))}
    </div>
  </div>
}

export default Item;