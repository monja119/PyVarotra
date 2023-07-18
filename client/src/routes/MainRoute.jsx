import React from 'react'
import {Routes, Route} from "react-router-dom"

// layouts
import MainLayout from '../layouts/MainLayout'


// Import Pages
import Cart from "../pages/Cart/Cart"
import Products from "../pages/Products/Products"
import ProductDetail from "../pages/ProductDetail/ProductDetail"
import NotFound from "../pages/NotFound/NotFound"


export default function MainRoute() {
  return (
    <Routes>
        <Route path="/" element={<MainLayout/>}>   
            <Route index element={<div>Home</div>}></Route> 
            <Route path="/products" element={<Products/>}></Route> 
            <Route path="/products/:productId" element={<ProductDetail/>}></Route> 
            <Route path="/cart" element={<Cart/>}></Route> 
        </Route>  
        <Route path="*" element={<NotFound/>}></Route>
    </Routes>
  )
}
