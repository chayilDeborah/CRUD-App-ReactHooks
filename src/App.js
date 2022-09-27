import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AddContacts from './components/AddContacts';
import ContactsLists from './components/ContactsLists';
import Header from './components/Header';

const App = () => {

  return (
    <>
     <Router>
        <Header />
      <Routes>
        <Route element={<ContactsLists />} path='/' />
        <Route element={<AddContacts />} path="/add"/>
  </Routes>
  </Router>
  
    
    </>
  )
}


export default App