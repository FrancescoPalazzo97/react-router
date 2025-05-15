import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import About from './pages/About'
import Items from './pages/Items'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/items' Component={Items} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
