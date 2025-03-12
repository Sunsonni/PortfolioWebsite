import {
    createBrowserRouter
} from 'react-router-dom'

import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Resume from './components/Resume.jsx'
import Projects from './components/Projects.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, 
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/Projects',
                element: <Projects />
            },
            {
                path: '/About',
                element: <About />
            },
            {
                path: '/Resume',
                element: <Resume/>
            }
        ]  
    }
])

export default router;