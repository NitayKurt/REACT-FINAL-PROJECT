// This file will contain all links:
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* http://localhost:3000/ */}
          <li className="nav-item"> <Link className="nav-link" to='/'>HOME</Link> </li>
          {/* http://localhost:3000/about */}
          <li className="nav-item"> <Link className="nav-link" to='/about'>ABOUT</Link> </li>
          {/* http://localhost:3000/products */}
          <li className="nav-item"> <Link className="nav-link" to='/products'>PRODUCTS</Link> </li>
          {/* http://localhost:3000/contactus */}
          <li className="nav-item"> <Link className="nav-link" to='/contactus'>CONTACT US</Link> </li>
        </ul>
      </nav>
      {/* Renders the child route's element, if there is one. */}
      <Outlet />
    </>
  )
}