import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation.jsx'

function App() {

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default App
