import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
// import '../src/styles/style.css'

import Main from './home/Main'
import Header from './home/Header'
import Footer from './home/Footer'
import Menu from './components/Menu'
const App = () => {
  return (
    <HashRouter>
      <Menu />
      <Header />
      <Main />
      <Footer />
      <Routes>
        <Route path='/' element={''} />
        <Route path='*' element={<p>Not Found</p>} />
      </Routes>
    </HashRouter>
  )
}

export default App