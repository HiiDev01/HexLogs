import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import Faq from './pages/Faq';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/product' element={<Product/>}/>
      <Route  path='/faq' element={<Faq/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default App
