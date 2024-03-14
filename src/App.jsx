import { useState } from 'react'
import Landing from './pages/Landing'
import History from './pages/History'
import Dashbord from './pages/Dashbord'
import './bootstrap.min.css'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

import { Routes,Route } from 'react-router-dom'

function App() {


  return (
    <>
    <Header/>
   <Routes>
    <Route path='/' Component={Landing}/>
    <Route path='/dash' Component={Dashbord}/>
    <Route path='/his' Component={History}/>

   </Routes>

   <Footer/>

   
    </>
  )
}

export default App
