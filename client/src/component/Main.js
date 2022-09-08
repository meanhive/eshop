import React, { useContext } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { GlobalContext } from '../GlobalContext'

/* react toast */
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

/* component */
import AdminDashboard from './Admin/AdminDashboard'
import Login from './Auth/Login'
import Register from './Auth/Register'
import About from './screens/About'
import Contact from './screens/Contact'
import Home from './screens/Home'
import Menu from './screens/Menu'
import UserDashboard from './User/UserDashboard'
import Pnf from './Util/Pnf'
import ProtectedRoute from '../middleware/ProtectedRoute'
import Profile from './screens/Profile'
import Order from './screens/Order'
import ProductDetails from './Product/ProductDetails'
import CreateProduct from './Admin/CreateProduct'
import Cart from './Product/Cart'
import Checkout from './Product/Checkout'
import OrderList from './Admin/OrderList'
import AllUsers from './Admin/AllUsers'
import ProductList from './Admin/ProductList'
import UpdateProduct from './Admin/UpdateProduct'
import history from '../helpers/history'


function Main(props) {
    const context = useContext(GlobalContext)

    const [isLogged, setIsLogged] = context.authApi.isLogged;
    const [isAdmin, setIsAdmin] = context.authApi.isAdmin;
    const [isUser, setIsUser] = context.authApi.isUser;

    return (
        <Router history={history} >
            <Menu />
            <ToastContainer autoClose={1500} position="top-center" />
            <Routes>
                <Route path={`/`} element={<Home />} />
                <Route path={`/about`} element={<About />} />
                <Route path={`/contact`} element={<Contact />} />
                <Route path={`/login`} element={isLogged ? <Pnf /> : <Login />} />
                <Route path={`/register`} element={isLogged ? <Pnf /> : <Register />} />

                {
                    isAdmin ? (
                        <Route element={<ProtectedRoute />}>
                            <Route path={`/admin/dashboard`} element={<AdminDashboard />} />
                            <Route path={`/profile`} element={<Profile />} />
                            <Route path={`/admin/allUsers`} element={<AllUsers />} />
                            <Route path={`/admin/allOrders`} element={<OrderList />} />
                            <Route path={`/admin/products`} element={<ProductList />} />
                            <Route path={`/product/create`} element={<CreateProduct />} />
                            <Route path={`/product/update/:id`} element={<UpdateProduct />} />
                            <Route path={`/product/details/:id`} element={<ProductDetails />} />
                        </Route>) : (
                        <Route element={<ProtectedRoute />}>
                            <Route path={`/user/dashboard`} element={<UserDashboard />} />
                            <Route path={`/profile`} element={<Profile />} />
                            <Route path={`/orders`} element={<Order />} />
                            <Route path={`/product/details/:id`} element={<ProductDetails />} />
                            <Route path={`/product/cart`} element={<Cart />} />
                            <Route path={`/checkout`} element={<Checkout />} />
                        </Route>
                    )
                }
                <Route path={`/*`} element={<Pnf />} />
            </Routes>
        </Router>
    )
}

export default Main