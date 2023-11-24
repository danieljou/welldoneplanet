import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Base from './components/Base'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Services from './pages/Services'
import Faq from './pages/Faq'
import Conferences from './pages/Conferences'
import NotFound from './pages/NotFound'
import { useSelector } from 'react-redux'

function App() {
  const theme = useSelector(state => state.theme)
  return (
    <div className={`${theme}`}>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Base />}>
            <Route index element={<HomePage />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/f-a-q" element={<Faq />} />
            <Route path="/conferences" element={<Conferences />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
