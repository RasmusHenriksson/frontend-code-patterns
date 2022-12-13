import './index.css';
import Navbar from './Components/Navbar';
import Home from './Views/Home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductView from './Views/ProductView';
import CategoryView from './Views/CategoryView';
import ContactsView from './Views/ContactsView';

function App() {
  return (
    <>
    {/* Använder mig utav MVC modellen, men eftersom jag använder mig utav få routes så agerar App.js som controller */}
    <Navbar />
    

      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/categories" element={ <CategoryView /> }/>
        <Route path="/products" element={ <ProductView /> }/>
        <Route path="/contacts" element={ <ContactsView /> }/>
      </Routes>
    
    </>
  );
}

export default App;
