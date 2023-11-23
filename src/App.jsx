import { } from 'react'
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

function App() {


  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Base}>
            <Route index path='' Component={HomePage} />
            <Route path='about-us' Component={About} />
            <Route path='services' Component={Services} />
            <Route path='f-a-q' Component={Faq} />
            <Route path='conferences' Component={Conferences} />
            <Route path='*' Component={NotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
