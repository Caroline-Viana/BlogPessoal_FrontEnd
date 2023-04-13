import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/static/navbar/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Footer from './components/static/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '80vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  )
}

export default App
