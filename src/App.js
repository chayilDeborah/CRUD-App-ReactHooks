import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';

const App = () => {

  return (
    <>
     <Router>
      <div>
        <Header />
      {/* <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path="/crud" element={<Main/>} />
  </Routes> */}
  </div>
  </Router>
  
    
    </>
  )
}


export default App