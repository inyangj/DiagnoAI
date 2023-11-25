import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Home from '../pages/Home'
import ConfirmEmailScreen from '../pages/ConfirmEmailScreen'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route index path={`/`} element={<Home />} />
        <Route index path={`/signup`} element={<Signup />} />
        <Route index path={`/confirmemailscreen`} element={<ConfirmEmailScreen />} />
        <Route  path={`/login`} element={<Login />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter