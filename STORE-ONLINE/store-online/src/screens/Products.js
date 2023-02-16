import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Products() {
  return (
    <div className='container'>
      <h2 className="text-center" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       color: 'navy',
       fontStyle: 'italic'
      }}>Our Products</h2>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">
              <div className='card' style={{ width: '20rem' }} >
                <img className="card-img-top" src="https://media3.giphy.com/media/NsEljS2ZJf1bDQRHcC/giphy.gif?cid=ecf05e4778wd6wr1qjk4fa4yvtxeunc99fqzjro64sf62ur6&rid=giphy.gif&ct=g" alt='kids playing outside' height={"350px"} width={"380px"}/>
                 <div className="card-body">
                  <h5 className="card-title">OUTSIDE</h5>
                  <p className="card-text">Playing outside with our products</p>
                  <button className="btn btn-primary m-2"> 
                   {/* http://localhost:3000/products/outside */}
                 <Link className="nav-link" to='/products/outside'>OUTSIDE</Link> 
                  </button>
                </div>
             </div>
      </th>
      <th scope="col">
              <div className='card' style={{ width: '20rem' }} >
                <img className="card-img-top" src="https://media3.giphy.com/media/9POMmQiLkvhRzKFXyT/giphy.gif?cid=ecf05e47cy4krdiy9ihz6oe9dya255wnknxwftqlbs9qoefn&rid=giphy.gif&ct=g" alt='kids playing inside'height={"350px"} width={"380px"}/>
                 <div className="card-body">
                  <h5 className="card-title">INSIDE</h5>
                  <p className="card-text">Playing indoor with our products</p>
                  <button className="btn btn-primary m-2"> 
                   {/* http://localhost:3000/products/outside */}
                   <Link className="nav-link" to='/products/inside'>INSIDE</Link>  
                  </button>
                </div>
             </div>
      </th>
      <th scope="col">
              <div className='card' style={{ width: '20rem' }} >
                <img className="card-img-top" src="https://media0.giphy.com/media/e5DcS1mZO9Y2o4A5EI/giphy.gif?cid=ecf05e475kx4tw63b5o0zygjpl8kw1pxogit4wotq1ccaxns&rid=giphy.gif&ct=g" alt='kids playing underwater'height={"350px"} width={"380px"}/>
                 <div className="card-body">
                  <h5 className="card-title">UNDERWATER</h5>
                  <p class="card-text">Playing underwater with us</p>
                  <button className="btn btn-primary m-2"> 
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