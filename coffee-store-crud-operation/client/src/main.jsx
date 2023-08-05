import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffee from './components/AddCoffee'
import UpdateCoffee from './components/UpdateCoffee'
import CoffeeView from './components/CoffeeView'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffees')
  },
  {
    path: '/add-coffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: 'update-coffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
  },
  {
    path: 'coffee-view/:id',
    element: <CoffeeView></CoffeeView>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
  },
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
