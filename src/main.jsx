import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import {Home} from './pages/Home.jsx';
import {About} from './pages/About.jsx';
import{ Contact} from './pages/Contact.jsx';
import {Cart} from './pages/Cart.jsx';

import {Provider} from 'react-redux'
import store from './redux/store/Store.js';
import { MobileBill } from './pages/MobileBill.jsx';
import { Login } from './pages/Auth/Login.jsx';
import { Register } from './pages/Auth/Register.jsx';
import UserProfile from './pages/UserProfile.jsx';
import {SingleProduct} from './pages/SingleProduct.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> }, // "/"
      { path: 'about', element: <About /> }, // "/about"
      { path: 'contact', element: <Contact /> }, // "/contact"
      { path: 'cart', element: <Cart /> } ,
      {path:'mob',element :<MobileBill/>},// "/cart"
      {path:'login',element:<Login/>},
      {path:'register',element:<Register/>},
      {path:'profile',element:<UserProfile/>},
     {path:'/product/:id', element:<SingleProduct /> }

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>


    <RouterProvider router={router} />
  </Provider>

   

  </React.StrictMode>
);

