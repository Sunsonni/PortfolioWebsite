import {
    createBrowserRouter
} from 'react-router-dom'

import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Resume from './components/Resume.jsx'
import Projects from './components/Projects.jsx'
import { Post } from './components/Post.jsx'
import Error from './components/404.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error/>, 
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
            },
            {
                path: '/post/:id',
                element: <Post />
            }
        ]  
    }
])

export default router;