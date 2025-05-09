import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsList from './components/ProductsList.jsx';
import NotFound from './components/NotFound.jsx';
const ProductDetail = React.lazy(()=> import ('./components/ProductsDetail.jsx'))
const Cart = React.lazy(()=> import ('./components/Cart.jsx')) 

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <ProductsList />
      },
      {
        path: '/productDetail/:id',
        element: <Suspense fallback="Loading..."><ProductDetail /></Suspense>
      },
      {
        path: '/cart',
        element: <Suspense fallback="Loading..."><Cart /></Suspense>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}></RouterProvider>
)
