import React from "react";
import {Typography} from 'antd';
import './Card.css'
import {useNavigate} from "react-router-dom";

const Card: React.FC<{data: any}> = ({data}) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`${data.id}`)}>
      <img src={data.image} alt="image" />
      <Typography.Title level={5}>{data.name}</Typography.Title>
    </div>
  )
}

export default Card;