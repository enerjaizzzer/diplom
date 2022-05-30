import React from 'react';
import './Home.css';
import {Radio} from "antd";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="header">
      <div className="header__logo">VideoFeature</div>
      <Radio.Group defaultValue="" buttonStyle="solid" size="large" onChange={({target}) => {
        navigate(`/${target.value}`);
      }}>
        <Radio.Button value="">Home</Radio.Button>
        <Radio.Button value="constructor">Constructor</Radio.Button>
        <Radio.Button value="contacts">Contacts</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default Header;