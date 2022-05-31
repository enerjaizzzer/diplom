import React from 'react';
import { Routes, Route } from "react-router-dom";
import {Home, Price, Constructor, Contacts} from "./components";
import './Content.css'
import {Item} from "./components/Price/components";

const Content = () => (
  <div className="content">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="catalog" element={<Price />} />
    <Route path="catalog/*" element={<Item />} />
    <Route path="constructor" element={<Constructor />} />
    <Route path="contacts" element={<Contacts />} />
  </Routes>
  </div>
);

export default Content;