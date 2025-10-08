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
import StudentLayout from './Layout/StudentLayout'
import PassForm from './components/student/PassForm'
import Notification from './components/student/Notification'
import Profile from './components/student/Profile'
import HelpAndSupport from './components/student/HelpAndSupport'

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
          <ProtectedRoute allowedRole="student">
            <StudentLayout/>
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<StudentDashboard/>} />
        <Route path="apply" element={<PassForm/>} />
        <Route path="notification" element={<Notification/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="help" element={<HelpAndSupport/>} />
      </Route>

      <Route
        path="/hod"
        element={
          <ProtectedRoute allowedRole="hod">
            <Hod/>
          </ProtectedRoute>
        }
      />

      <Route
        path="/warden"
        element={
          <ProtectedRoute allowedRole="warden">
            <WardenDashboard/>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminDashboard/>
          </ProtectedRoute>
        }
      />
      </Routes>
      
      
    </div>
  )
}

export default App