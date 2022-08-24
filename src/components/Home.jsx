import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome';
import "../App.js";
import AddContact from "./pages/AddContact";


const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path="/AddContact" element={<AddContact/>} />
  </Routes>
  </Router>)
};
export default Home;
 