import React from 'react';
import './Header.css';
import {Radio} from "antd";
import {useLocation, useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const place = useLocation().pathname.split('/').pop();
  console.log(place)
  return (
    <div className="header">
      <div className="header__logo" onClick={() => navigate(`videoFeature/`)}>
        <span className="header__logo-first-word">
          <span style={{color: '#1890ff', fontSize: "40px", marginLeft: "25px"}}>V</span>
          <span style={{fontSize: "26px", lineHeight: "30px"}}>ideo</span>
        </span>
        <span className="header__logo-second-word">
          <span style={{color: '#1890ff', fontSize: "40px"}}>F</span>
          <span style={{fontSize: "26px", lineHeight: "30px"}}>eature</span>
        </span>
      </div>
      <Radio.Group defaultValue={place || ""} buttonStyle="solid" size="large" onChange={({target}) => {
        navigate(`videoFeature/${target.value}`);
      }}>
        <Radio.Button value="">Home</Radio.Button>
        <Radio.Button value="catalog">Catalog</Radio.Button>
        <Radio.Button value="contacts">Contacts</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default Header;