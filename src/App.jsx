import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <>
    <Header />
    <Routes>
     <Route path='/' element={<HomePage />} />
     <Route path='/about' element={<AboutPage />} />
     <Route path='/contact' element={<ContactPage />} />
     <Route path='/faq' element={<FaqPage />} />
    </Routes>
    <Footer />
    </>
  )
}
