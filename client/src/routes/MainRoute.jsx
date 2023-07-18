import React from 'react'
import {Routes, Route} from "react-router-dom"

// layouts
import MainLayout from '../layouts/MainLayout'


// Import Pages
import Cart from "../pages/Cart/Cart"
import Products from "../pages/Products/Products"
import ProductDetail from "../pages/ProductDetail/ProductDetail"
import NotFound from "../pages/NotFound/NotFound"
import Login from "../pages/authentification/Login"
import Register from "../pages/authentification/Register"

export default function MainRoute() {
  return (
    <Routes>
        <Route path="/" element={<MainLayout/>}>   
            <Route index element={<div>Home</div>}></Route> 
            <Route path="/products" element={<Products/>}></Route> 
            <Route path="/products/:productId" element={<ProductDetail/>}></Route> 
            <Route path="/cart" element={<Cart/>}></Route>

            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
        </Route>  
        <Route path="*" element={<NotFound/>}></Route>
    </Routes>
  )
}
