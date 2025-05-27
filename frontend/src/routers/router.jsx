import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../App'
import Home from '../pages/home/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import CartPage from '../pages/books/CartPage'
import CheckoutPage from '../pages/books/CheckoutPage'
import SingleBook from '../pages/books/SingleBook'
import PrivateRoute from './PrivateRoute'
import OrderPage from '../pages/books/OrderPage'
import AdminRoute from './AdminRoute'
import AdminLogin from '../components/AdminLogin'
import DashboardLayout from '../pages/dashboard/DashboardLayout'
import DashBoard from '../pages/dashboard/DashBoard'
import ManageBook from '../pages/dashboard/manageBooks/ManageBook'
import AddBook from '../pages/dashboard/addBook/AddBook'
import EditBook from '../pages/dashboard/editBook/EditBook'
import FavoritesPage from '../pages/FavoritesPage'
import AboutUs from '../pages/AboutUs'
import Contact from '../pages/Contact'

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <AdminRoute><DashboardLayout/></AdminRoute>,
    children: [
      {
        path: "",
        element: <AdminRoute><DashBoard/></AdminRoute>,
      },
      {
        path: "add-new-book",
        element: <AdminRoute><AddBook/></AdminRoute>,
      },
      {
        path: "edit-book/:id",
        element: <AdminRoute><EditBook/></AdminRoute>,
      },
      {
        path: "manage-books",
        element: <AdminRoute><ManageBook/></AdminRoute>,
      }
    ]
  },
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/orders",
        element: <PrivateRoute><OrderPage/></PrivateRoute>,
      },
      {
        path: "/about",
        element: <AboutUs/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/cart",
        element: <CartPage/>,
      },
      {
        path: "/checkout",
        element: <PrivateRoute><CheckoutPage/></PrivateRoute>,
      },
      {
        path: "/books/:id",
        element: <SingleBook/>,
      },
      {
        path: "/admin",
        element: <AdminLogin/>,
      },
      {
        path: "/favorites",
        element: <FavoritesPage/>,
      }
    ],
  },
])

export default router
