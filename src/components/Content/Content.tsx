import React from 'react';
import { Routes, Route } from "react-router-dom";
import {Home, Constructor, Contacts} from "./components";
import './Content.css'

const Content = () => (
  <div className="content">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="constructor" element={<Constructor />} />
    <Route path="contacts" element={<Contacts />} />
  </Routes>
  </div>
);

export default Content;