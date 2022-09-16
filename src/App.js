import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./containers/Landing";
import Home from "./containers/Home";
import NFTseries from "./containers/NFTseries";
import News from "./containers/News";
import Story from "./containers/Story";
import Otan_Story from "./containers/Story/Otan_Story";
import Dumbo_Story from "./containers/Story/Dumbo_Story";
import Tiger_Story from "./containers/Story/Tiger_Story";
import Claim from "./containers/Claim";
import About from "./containers/About";
const Link = require("react-router-dom").Link;

export default function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" exact element={<Landing />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/NFTseries" element={<NFTseries />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/story" element={<Story />}></Route>
          <Route path="/story/otan" element={<Otan_Story />}></Route>
          <Route path="/story/dumbo" element={<Dumbo_Story />}></Route>
          <Route path="/story/tiger" element={<Tiger_Story />}></Route>
          <Route path="/claim" element={<Claim />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
    </div>
  );
}
