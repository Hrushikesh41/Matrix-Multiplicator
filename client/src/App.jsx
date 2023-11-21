import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Matrix from './pages/Double-Matrix/Matrix'
import TripleMatrix from './pages/Triple-Matrix/TripleMatrix'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Matrix />} />
        <Route exact path='/3X3' element={<TripleMatrix />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
