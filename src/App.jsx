import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';

import ProductDetails from './pages/ProductDetails';



function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Products />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />

      </Routes>

    </>
  )
}

export default App
