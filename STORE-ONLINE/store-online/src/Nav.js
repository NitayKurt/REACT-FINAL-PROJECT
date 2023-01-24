// This file will contain all links:
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info" style={{background:"linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)"}}>
        <ul className="nav justify-content-center">
          {/* http://localhost:3000/ */}
          <li className="nav-item"> <Link className="nav-link" to='/'>HOME</Link> </li>
          {/* http://localhost:3000/about */}
          <li className="nav-item"> <Link className="nav-link" to='/about'>ABOUT</Link> </li>
          {/* http://localhost:3000/products */}
          <li className="nav-item"> <Link className="nav-link" to='/products'>PRODUCTS</Link> </li>
          {/* http://localhost:3000/allproducts */}
          <li className="nav-item"> <Link className="nav-link" to='/allproducts'>All PRODUCTS</Link> </li>
          {/* http://localhost:3000/contactus */}
          <li className="nav-item"> <Link className="nav-link" to='/contactus'>CONTACT US</Link> </li>
        </ul>
      </nav>
      {/* Renders the child route's element, if there is one. */}
      <Outlet />
    </>
  )
}