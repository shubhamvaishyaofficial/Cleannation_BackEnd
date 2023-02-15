import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';

const App = () => {

  return (
    <div className='app'>
    <BrowserRouter>
      <Navbar />
      <Routes>  <Route path="/" element={<Home />}/> 
      </Routes>  
    </BrowserRouter>

  </div>
  )
}
export default App
