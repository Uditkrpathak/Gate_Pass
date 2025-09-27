import React from 'react'
import {Route, Routes} from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Unauthorized from './Layout/unauth/Unauthorized'
import ProtectedRoute from './Layout/ProtectedRoute'
import Hod from './DashBoard/Hod/Hod'
import StudentDashboard from './DashBoard/student/StudentDashboard'
import WardenDashboard from './DashBoard/warden/WardenDashboard'
import AdminDashboard from './DashBoard/Admin/AdminDashboard'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='*' element={<Unauthorized/>}/>

        <Route
        path="/student"
        element={
          <ProtectedRoute allowedRole="Student">
            <StudentDashboard/>
          </ProtectedRoute>
        }
      />

      <Route
        path="/hod"
        element={
          <ProtectedRoute allowedRole="HOD">
            <Hod/>
          </ProtectedRoute>
        }
      />

      <Route
        path="/warden"
        element={
          <ProtectedRoute allowedRole="Warden">
            <WardenDashboard/>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="Admin">
            <AdminDashboard/>
          </ProtectedRoute>
        }
      />
      </Routes>
      
      
    </div>
  )
}

export default App