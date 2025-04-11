import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import {Home} from './pages/Home.jsx';
import {About} from './pages/About.jsx';
import{ Contact} from './pages/Contact.jsx';
import {Cart} from './pages/Cart.jsx';
<<<<<<< HEAD
import {Provider} from 'react-redux'
import store from './redux/store/Store.js';
=======
>>>>>>> 046a5c2e9a4d2456b661831d56b0d78fe10d9abc

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
<<<<<<< HEAD
    <Provider store={store}>


    <RouterProvider router={router} />
  </Provider>
=======
    <RouterProvider router={router} />
>>>>>>> 046a5c2e9a4d2456b661831d56b0d78fe10d9abc
  </React.StrictMode>
);

