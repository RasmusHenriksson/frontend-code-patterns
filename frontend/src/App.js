import './index.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    
    <Navbar />
    

      <Routes>
        <Route path="/" element={ <Home /> }/>
      </Routes>
    
    </>
  );
}

export default App;
