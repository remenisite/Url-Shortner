import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App