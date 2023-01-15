// 1. useState - to store the data(array of documents from the db). 
// 2. useEffect - to get all the data from the db. 
import React, { useState, useEffect } from 'react'
// 1. collection(firestore, path) - will get the entire collection from our db.  
import { collection, getDocs } from 'firebase/firestore'
// db - access to the db in firestore. 
import { db } from '../firebase-config'
// task - separate file for each task. 
import Product from './Product';
import AddNewProduct from './AddNewProduct';

export default function ProductsList() {

      // 1. Array to store all the songs from the DB
      const [Products, setProducts] = useState([]);
      // Open & close a window of -Add a new task
      const [newProduct, setNewProduct] = useState(false)


      useEffect(()=>{

        const getProducts = async (db) => {
            // collection() - return all the collection for that path. 
            const ProductsCol = collection(db, 'Products');

            // getDocs() - return all documents for our collection
            const ProductsSnapshot = await getDocs(ProductsCol);

            const productsList = await ProductsSnapshot.docs.map(doc =>(
                {
                    id: doc.id, 
                    // Retrieves all fields in the document as an object
                    data: doc.data()
                }
            ))
            setProducts(productsList)
        }

        // call the function: 
        getProducts(db);

    }, [Products])

    return (
        <div className='container'>
    
            <h2>My Products</h2>

            <button className='btn mb-2' style={{backgroundColor:'darkcyan'}}
            onClick={()=>setNewProduct(true)}>Add a new Product</button>

            {/* onClose - prop we send to AddTask - it is a function. Will close the component `AddTask` */}
            {newProduct && <AddNewProduct onClose={()=>setNewProduct(false)}/>}
    
            {/* If array is not empty - loop over it and show each task: */}
            {Products.length > 0 && Products.map(product => (
                <div key={product.id}>
                    <Product
                    id={product.id}
                    name={product.data.name}
                    price={product.data.price}
                    image={product.data.image}
                    inStock={product.data.inStock}
                    category={product.data.category}/>
                </div>
            ))}
        </div>
      )
}