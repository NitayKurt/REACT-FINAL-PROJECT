import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Items() {
  return (
    <div className='container'>
      <h2>Our menu</h2>
          {/* http://localhost:3000/items/cofee */}
          <button className="btn btn-info m-2"> 
          <Link className="nav-link" to='/items/coffee'>Coffee</Link> 
          </button>
          {/* http://localhost:3000/items/drinks */}
          <button className="btn btn-info m-2"> 
          <Link className="nav-link" to='/items/drinks'>Drinks</Link> 
          </button>
          {/* http://localhost:3000/items/salads */}
          <button className="btn btn-info m-2"> 
          <Link className="nav-link" to='/items/salads'>Salads</Link> 
          </button>
      {/* Renders the child route's element, if there is one. */}
      <Outlet />
    </div>
  )
}