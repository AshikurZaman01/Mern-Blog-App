import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots';
import Home from './Components/Pages/Home/Home';
import { Provider } from 'react-redux';
import NotFound from './Components/NotFound/NotFound';
import store from './Redux/Store/store';
import { Toaster } from 'react-hot-toast';
import Jobs from './Components/Pages/Jobs/Jobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/post/application/:id",
        element: <h1>Application </h1>,
      },
      {
        path: "/register",
        element: <h1>Register</h1>,
      },
      {
        path: "/login",
        element: <h1>Login</h1>,
      },
      {
        path: "/dashboard",
        element: <h1>Dashboard</h1>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </Provider>
  </React.StrictMode >
)
