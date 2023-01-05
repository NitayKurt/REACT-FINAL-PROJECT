import React, { useState } from 'react'
import EditProduct from './EditProduct'
// import for DELETE
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase-config'


export default function Product({id ,name,category,price,image,inStock}) {

    const [edit, setedit] = useState(false)


     // Function to handle delete - delete specific doc from firestore
     const handleDelete = async() => {
        const productDocRef = doc(db, 'Products', id);
        try{
          // deleteDoc(document reference) - delete the document from the firestore. 
          await deleteDoc(productDocRef)
        } 
        catch(error){ alert(error)}
      }
      return (
        <div className='alert alert-info'>
            <h3>Name:{name}</h3>
            <p>Category:{category}</p>
            <p>Price:{price}</p>
            <p>In stock:{inStock}</p>
            <img src={image} alt=' img from db' width={"200px"}/>
            <br/>
            
    
            <button className='btn btn-primary' onClick={()=>setedit(true)}>Edit</button>
    
            <button className='btn btn-danger m-1' onClick={()=>handleDelete()}>DELETE</button>
    
            {edit &&
            <EditProduct
            id={id}
            editPoductName={name}
            editPrice={price}
            editImage={image}
            editStock={inStock}
            finishEdit={()=>setedit(false)} />}
        </div>
      )
    }