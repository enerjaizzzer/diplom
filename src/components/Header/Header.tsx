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
      <div className="header__logo">VideoFeature</div>
      <Radio.Group defaultValue={place || ""} buttonStyle="solid" size="large" onChange={({target}) => {
        navigate(`/${target.value}`);
      }}>
        <Radio.Button value="">Home</Radio.Button>
        <Radio.Button value="catalog">Catalog</Radio.Button>
        <Radio.Button value="constructor">Constructor</Radio.Button>
        <Radio.Button value="contacts">Contacts</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default Header;