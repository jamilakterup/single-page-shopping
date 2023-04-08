import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import ProductDetails from './components/ProductDetails/ProductDetails';
import loadAllData from './Loader/Loader';
import LearnMore from './components/LearnMore/LearnMore';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: ([
      {
        path: '/',
        element: <Header></Header>,
        loader: () => fetch('https://fakestoreapi.com/products')
      },
      {
        path: 'product/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({params}) => fetch(`https://fakestoreapi.com/products/${params.id}`)
      },
      {
        path: 'cart',
        element: <Cart></Cart>,
        loader: loadAllData,
      },
      {
        path: 'about',
        element: <AboutUs></AboutUs>
      },
      {
        path: 'more',
        element: <LearnMore></LearnMore>
      },
      {
        path: 'about',
        element: <AboutUs></AboutUs>
      }
    ])
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
