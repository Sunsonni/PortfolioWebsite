import { StrictMode } from 'react'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from 'react-router-dom'
import router from './Routes.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
