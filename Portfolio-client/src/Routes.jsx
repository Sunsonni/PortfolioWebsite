import {
    createBrowserRouter
} from 'react-router-dom'

import App from './App.jsx'
import About from './components/About.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, 
        children: [
            {
                path: '/',
                element: <About />
            },
            {
                path: '/Work',
                element: <h1>Work</h1>
            },
            {
                path: '/Resume',
                element: <h1>Resume</h1>
            }
        ]  
    }
])

export default router;