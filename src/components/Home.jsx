import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome';
import "../App.js";


const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome/>} />
  {/* <>
  <div className="flex justify-center items-center text-center text-200 text-5xl h-[100vh]">Contact Manager Application Using React Hooks</div>

  </> */}
  
  </Routes>
  </Router>)
};
export default Home;
 