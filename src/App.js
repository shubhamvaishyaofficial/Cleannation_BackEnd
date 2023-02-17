import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './Components/Aboutus';
import Childeservices from './Components/Childeservices';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';
import Menues from './Components/Menues';
import Offer from './Components/Offer';
import OurTeams from './Components/OurTeams';
import PaymentMethode from './Components/PaymentMethode';
import PrivecyPolicy from './Components/PrivecyPolicy';
import Refund from './Components/Refund';
import TearmCondition from './Components/TearmCondition';
import TotaleService from './Components/TotaleService';
import UserIdPass from './Components/UserIdPass';
import Home from './Home';
import Navbar from './Navbar';

const App = () => {

  return (
    <div className='app'>
    <BrowserRouter>
      <Navbar />
      <Routes>  
        <Route path="/" element={<Home />}/> 
        <Route path="/aboutus" element={<Aboutus />}/> 
        <Route path="/childerservice" element={<Childeservices />}/> 
        <Route path="/contactus" element={<Contactus />}/> 
        <Route path="/footer" element={<Footer />}/> 
        <Route path="/offer" element={<Offer />}/> 
        <Route path="/ourteams" element={<OurTeams />}/> 
        <Route path="/paymentmethode" element={<PaymentMethode />}/> 
        <Route path="/privecypolicy" element={<PrivecyPolicy />}/> 
        <Route path="/refund" element={<Refund />}/> 
        <Route path="/tearmcondition" element={<TearmCondition />}/> 
        <Route path="/totalservice" element={<TotaleService />}/> 
        <Route path="/userid" element={<UserIdPass />}/> 
        <Route path="/menues" element={<Menues />}/> 
      </Routes>  
    </BrowserRouter>

  </div>
  )
}
export default App
