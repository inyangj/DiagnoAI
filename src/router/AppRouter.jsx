import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route index path={`/`} element={<Signup />} />
        <Route  path={`/login`} element={<Login />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter