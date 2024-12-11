import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'

function App() {

  return (
    <>
      <Navigation/>
      <Outlet className='checking'/>
      <Footer/>
    </>
  )
}

export default App
