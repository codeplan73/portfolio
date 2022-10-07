import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Footer, Navbar } from './components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App