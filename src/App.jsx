import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import About from './pages/About'
import Items from './pages/products/Items'
import Item from './pages/products/Item'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/items'>
          <Route index Component={Items} />
          <Route path=':id' Component={Item} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
