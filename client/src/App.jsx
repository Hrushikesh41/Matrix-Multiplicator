import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Matrix from './pages/Double-Matrix/Matrix'
import TripleMatrix from './pages/Triple-Matrix/TripleMatrix';
import Navbar from './components/Header/Navbar';
import DoubleMatrix from './pages/2X3/DoubleMatrix';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
         
          <Route exact path='/' element={<Matrix />} />
          <Route exact path='https://multify-matrix.netlify.app/3X3' element={<TripleMatrix />} />
          <Route exact path='https://multify-matrix.netlify.app/2X3' element={<DoubleMatrix />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App