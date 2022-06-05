import React from 'react';
import { Routes, Route } from "react-router-dom";
import {Home, Price, Constructor, Contacts} from "./components";
import './Content.css'
import {Item} from "./components/Price/components";

const Content = () => (
  <div className="content">
  <Routes>
    <Route path="/videoFeature" element={<Home />} />
    <Route path="/videoFeature/catalog" element={<Price />} />
    <Route path="/videoFeature/catalog/:id" element={<Item />} />
    <Route path="/videoFeature/constructor" element={<Constructor />} />
    <Route path="/videoFeature/contacts" element={<Contacts />} />
  </Routes>
  </div>
);

export default Content;