import React, { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase-config'



export default function EditProduct({id ,name,price,image}) {

// store the previous data, and can update to new data from input.  
const [name, setProductName] = useState(editName);
const [price, setPrice] = useState(editPrice);
const [image, setImage] = useState(editImage);

  const handleUpdate = async(e) =>{
    // will prevent the page from reloading and not saving the data
    e.preventDefault();

    // doc(datanase, collection, id) - will return the specific document
    const productDocRef = doc(db, 'Products', id);

    try {
        await updateDoc(productDocRef, {
          // key of element in firestore: our new value
            name: name,
            image: image,
            price: price,
        })
        // call the function that changes edit to false. (close the edit window)
        finishEdit()
    } catch (error) {
        alert(error)
    }
  }
  
  return (
    <div>
        <form onSubmit={handleUpdate} style={{backgroundColor:'lightgray', padding: 10, marginTop:3}}>
            <label>Edit Product name</label>
            <input type='text' onChange={(e)=>setProductName(e.target.value)}
            className='form-control' value={name}/>

            <label>Edit Price</label>
            <textarea type='text' onChange={(e)=>setPrice(e.target.value)}
            className='form-control' value={price}></textarea>
            <label>Edit Image</label>
            <textarea type='text' onChange={(e)=>setImage(e.target.value)}
            className='form-control' value={image}></textarea>
            {/* mt-2: margin-top:2 */}
            <input type='submit' className='btn btn-success mt-2'/>
        </form>
    </div>
  )
}