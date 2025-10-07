import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import Faq from './pages/Faq';

function App() {

  return (
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/product' element={<Product/>}/>
      <Route  path='/faq' element={<Faq/>}/>
    </Routes>
  )
}

export default App
