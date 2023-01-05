import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Products() {
  return (
    <div className='container'>
      <h2>Our Products</h2>
          {/* http://localhost:3000/products/outside */}
          <button className="btn btn-info m-2"> 
          <Link className="nav-link" to='/products/outside'>OUTSIDE</Link> 
          </button>
          {/* http://localhost:3000/products/inside */}
          <button className="btn btn-info m-2"> 
          <Link className="nav-link" to='/products/inside'>INSIDE</Link> 
          </button>
          {/* http://localhost:3000/products/underwater */}
          <button className="btn btn-info m-2"> 
          <Link className="nav-link" to='/products/underwater'>UNDERWATER</Link> 
          </button>
      {/* Renders the child route's element, if there is one. */}
      <Outlet />
    </div>
  )
}