import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import PageTitle from './components/Pagetitle/PageTitle'
export default function App() {
  return (
    <>
    <Header />
    <Routes>

     <Route path='/' element={<> <PageTitle title="Home" /><HomePage /> </>} />
     <Route path='/about' element={<><PageTitle title="About" /><AboutPage /> </>} />
     <Route path='/contact' element={<><PageTitle title="Contact" /><ContactPage /> </>} />
     <Route path='/faq' element={<><PageTitle title="FAQ" /><FaqPage /> </>} />
    </Routes>
    <Footer />
    </>
  )
}
