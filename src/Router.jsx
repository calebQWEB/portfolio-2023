import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from '../src/Pages/Home/Home'
import App from './App'
import Portfolio from '../src/Pages/Portfolio/Portfolio'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Home />,
    
                },
                {
                    path: '/portfolio',
                    element: <Portfolio/>
                }
            ]
        }
    ])

  return <RouterProvider router={router}/>

}

export default Router