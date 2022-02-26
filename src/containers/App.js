import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Login from '../components/Login';
import Statitics from '../components/Statitics';
import LoadPage from '../components/LoadPage';
import { Form } from '../components/Form';
import QuestionHTML from '../components/QuestionHTML';
import QuestionCSS from '../components/QuestionCSS';
import QuestionJS from '../components/QuestionJS';
import QuestionFIGMA from '../components/QuestionFIGMA';
import QuestionUX from '../components/QuestionUX';
import Profile from '../components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<LoadPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/questionHTML" element={<QuestionHTML />} />
        <Route path="/questionCSS" element={<QuestionCSS />} />
        <Route path="/questionJS" element={<QuestionJS/>} />
        <Route path="/questionFIGMA" element={<QuestionFIGMA />} />
        <Route path="/questionUX" element={<QuestionUX />} />
        <Route path="/statitics" element={<Statitics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/"/>}/> 

      </Routes>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
