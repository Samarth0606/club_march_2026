import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Helpp from './components/Helpp.jsx'
import Signup from './components/Signup.jsx'
import Offer from './components/Offer.jsx'
import Body from './components/Body.jsx'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/offers',
        element: <Offer />
      },
      {
        path: '/help',
        element: <Helpp />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}></RouterProvider>
)
