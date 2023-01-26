import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='container text-center' style={{backgroundColor:"", display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'navy', fontStyle: 'italic'}} >
        <div>
            <h4 style={{fontSize: '50px'}}>Welcome To Ariel University Toys Store</h4>
            <br></br>
                <button className="btn btn-primary m-2">
                <Link className="nav-link" to='/products'>PRODUCTS</Link> 
                </button>
                <br></br>
                <br></br>
                <img height="500px" width="500px" src='https://media0.giphy.com/media/yvmouogYXTNbq/giphy.gif?cid=ecf05e47t1b4zm6zvgvugtogsgfp3i6pjdu2jxhn2j445ho8&rid=giphy.gif&ct=g' alt='some gif'/>
               </div>
                
                <img height="800px" width="600px" src='https://kitstore.s8.cdn-upgates.com/_cache/6/9/69c37e754bea9896c0ebb7a1451f6552.png' alt='imgHome'/>
        </div>
  )
}
