import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Pgowner from './components/pgowner'
import Contact from './components/contact'

const App = () => {
  return (
 <>
 <Header/>
 <Router>
  <Routes>
    {/* <Route path="home" element={<Home />} /> */}
    <Route index element={<Home />} />
    <Route path="about" element={<About/>} />
    <Route path="pgowner" element={<Pgowner />} />
    <Route path="contact" element={<Contact />} />
  </Routes>
 </Router>

 
 </>
  )
}

export default App
