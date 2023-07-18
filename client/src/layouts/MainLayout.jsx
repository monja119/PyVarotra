import React from 'react'
import { Outlet } from 'react-router-dom'

// Import component
import Navbar from "../components/Navbar/Navbar"

export default function MainLayout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}
