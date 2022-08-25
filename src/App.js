import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './components/pages/Welcome';
import Main  from './components/pages/Main';
import './App.css';

const App = () => {

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path="/crud" element={<Main/>} />
  </Routes>
  </Router>
    
    </>
  )
}


export default App