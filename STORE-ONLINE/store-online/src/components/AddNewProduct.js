import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../firebase-config'

export default function AddNewProduct({ onClose }) {

  // store the previous data, and can update to new data from input.  
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [inStock, setInStock] = useState('');

  

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
        // addDoc(collection, new document)
        await addDoc(collection(db, 'Products'), {
            name: name, price: price, image: image, category: category, inStock: inStock
        })
        onClose();
    }catch(error){
        alert(error)
    }
  }


  return (
    <form onSubmit={handleSubmit} style={{backgroundColor:'lightgray', padding: 10, marginTop:3}}>
            <h4 className='text-center'>Add new product</h4>
            <label>Add product name</label>
            <input type='text' onChange={(e)=>setName(e.target.value)}
            className='form-control' value={name}/>

            <label>Add price</label>
            <textarea type='text' onChange={(e)=>setPrice(e.target.value)}
            className='form-control' value={price}></textarea>
            

            <label>Add image</label>
            <textarea type='text' onChange={(e)=>setImage(e.target.value)}
            className='form-control' value={image}></textarea>

            <label>Choose Category: 'inside' , 'outside' , 'underwater'</label>
            <textarea type='text' onChange={(e)=>setCategory(e.target.value)}
            className='form-control' value={category}></textarea>

            <label>In stock: 'true' , 'false'</label>
            <textarea type='text' onChange={(e)=>setInStock(e.target.value)}
            className='form-control' value={inStock}></textarea>
            
            <input type='submit' className='btn btn-success mt-2'/>
    </form>
  )
}