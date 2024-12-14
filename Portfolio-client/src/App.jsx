import './App.css'
import { Outlet,useLocation } from 'react-router-dom'
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`app-container ${isHomePage ? 'home-page' : ''}`}>
      <Navigation/>
      <div className={`content ${isHomePage ? 'home-page' : ''}`}>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
