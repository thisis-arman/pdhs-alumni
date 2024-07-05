import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import RegistrationForm from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-white'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
