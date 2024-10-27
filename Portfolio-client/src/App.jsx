import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation.jsx'
import FlowyBackground from './components/FlowyBackground.jsx'

function App() {

  return (
    <>
      <FlowyBackground />
      <Navigation className='checking'/>
      <Outlet />
    </>
  )
}

export default App
