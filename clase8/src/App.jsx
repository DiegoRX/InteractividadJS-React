import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar'
import ProductList from './components/ProductList'
import { Routes, Route } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/about' element={<AboutPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </>
  )
}

export default App
