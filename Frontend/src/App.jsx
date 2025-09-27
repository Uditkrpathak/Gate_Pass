import React from 'react'
import {Route, Routes} from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Unauthorized from './Layout/unauth/Unauthorized'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='*' element={<Unauthorized/>}/>
      </Routes>
      
      
    </div>
  )
}

export default App