
import ProductsList from '../components/ProductsList'
import React from 'react'

export default function AllProducts() {
  return (
    <div><h1 className="text-center" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
     color: 'navy',
     fontStyle: 'italic'
    }}>All Products</h1>
        <ProductsList/>
    </div>
  )
}

