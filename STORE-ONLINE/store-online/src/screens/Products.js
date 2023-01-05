import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Products() {
  return (
    <div className='container'>
      <h2 className="text-center">Our Products</h2>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">
              <div className='card' style={{ width: '20rem' }} >
                <img className="card-img-top" src="https://cdn.pixabay.com/photo/2013/02/12/19/50/lesotho-80841_960_720.jpg" alt='kids playing outside' height={"300px"} width={"350px"}/>
                 <div className="card-body">
                  <h5 className="card-title">OUTSIDE</h5>
                  <p className="card-text">Playing outside with our products</p>
                  <button className="btn btn-info m-2"> 
                   {/* http://localhost:3000/products/outside */}
                 <Link className="nav-link" to='/products/outside'>OUTSIDE</Link> 
                  </button>
                </div>
             </div>
      </th>
      <th scope="col">
              <div className='card' style={{ width: '20rem' }} >
                <img className="card-img-top" src="https://cdn.pixabay.com/photo/2016/11/28/10/48/child-1864718_960_720.jpg" alt='kids playing inside'height={"300px"} width={"350px"}/>
                 <div className="card-body">
                  <h5 className="card-title">INSIDE</h5>
                  <p className="card-text">Playing indoor with our products</p>
                  <button className="btn btn-info m-2"> 
                   {/* http://localhost:3000/products/outside */}
                   <Link className="nav-link" to='/products/inside'>INSIDE</Link>  
                  </button>
                </div>
             </div>
      </th>
      <th scope="col">
              <div className='card' style={{ width: '20rem' }} >
                <img className="card-img-top" src="https://cdn.pixabay.com/photo/2013/12/17/20/10/bubbles-230014_960_720.jpg" alt='kids playing underwater'height={"300px"} width={"350px"}/>
                 <div className="card-body">
                  <h5 className="card-title">UNDERWATER</h5>
                  <p class="card-text">Playing underwater with us</p>
                  <button className="btn btn-info m-2"> 
                   {/* http://localhost:3000/products/outside */}
                   <Link className="nav-link" to='/products/underwater'>UNDERWATER</Link> 
                  </button>
                </div>
             </div>
      </th>
    </tr>
  </thead>
</table>
      {/* Renders the child route's element, if there is one. */}
      <Outlet />
    </div>
  )
}