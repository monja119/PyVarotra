import React, {  useEffect } from "react"
import { Routes, Route } from "react-router-dom"

// Import Routes
import MainRoute from "./routes/MainRoute"

// Cart Provider
import { CartProvider } from "react-use-cart"

//IMPORT DATA-AOS
import AOS from 'aos'
import 'aos/dist/aos.css'


function App() {

  useEffect(function (){
    AOS.init()
  }) 

  return (
    <>
      <CartProvider>
        <MainRoute/>
      </CartProvider>
    </>    
  )
}

export default App
