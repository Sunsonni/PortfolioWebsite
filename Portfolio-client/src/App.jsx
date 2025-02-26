import './App.css'
import { Outlet,useLocation } from 'react-router-dom'
import Navigation from './Navigation.jsx'

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`app-container ${isHomePage ? 'home-page' : ''}`}>
      <Navigation/>
      <div className={`content ${isHomePage ? 'home-page' : ''}`}>
        <Outlet/>
      </div>
  
    </div>
  )
}

export default App
