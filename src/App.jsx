import React from 'react'
import Header from './componets/Header'
import Home from './componets/Home'
import Footer from './componets/Footer'
import Contact from './componets/Contact'
import Services from './componets/Services'
import './style/App.css'
import './style/Home.css'
import './style/Header.css'
import './style/Footer.css'
import './style/Contact.scss'
import './style/Mediaquery.scss'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/services' element={<Services/>}/>
</Routes>
<Footer/>
    </Router>
  )
}

export default App