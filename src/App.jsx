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

function App() {


  return (
    <>
      <BrowserRouter basename=''>
        <Routes>
          <Route path='' Component={Base}>
            <Route exact path="" element={<Navigate to='' />} />
            <Route index path='/' Component={HomePage} />
            <Route path='/about' Component={About} />
            <Route path='/services' Component={Services} />
            <Route path='/f-a-q' Component={Faq} />
            <Route path='/conferences' Component={Conferences} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
