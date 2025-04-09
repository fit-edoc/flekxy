import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import {Home} from './pages/Home.jsx';
import {About} from './pages/About.jsx';
import{ Contact} from './pages/Contact.jsx';
import {Cart} from './pages/Cart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> }, // "/"
      { path: 'about', element: <About /> }, // "/about"
      { path: 'contact', element: <Contact /> }, // "/contact"
      { path: 'cart', element: <Cart /> } // "/cart"
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

