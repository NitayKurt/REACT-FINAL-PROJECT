import { addDoc, collection, Timestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../firebase-config'

export default function AddNewProduct({ onClose }) {

  // store the previous data, and can update to new data from input.  
  const [songName, setsongName] = useState('');
  const [artist, setartist] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
        // addDoc(collection, new document)
        await addDoc(collection(db, 'songs'), {
            songName: songName, artist: artist, dateUploaded: Timestamp.now() 
        })
        onClose();
    }catch(error){
        alert(error)
    }
  }


  return (
    <form onSubmit={handleSubmit} style={{backgroundColor:'lightgray', padding: 10, marginTop:3}}>
            <h4 className='text-center'>Add new song</h4>
            <label>Add song name</label>
            <input type='text' onChange={(e)=>setsongName(e.target.value)}
            className='form-control' value={songName}/>

            <label>Add artist</label>
            <textarea type='text' onChange={(e)=>setartist(e.target.value)}
            className='form-control' value={artist}></textarea>
            
            <input type='submit' className='btn btn-success mt-2'/>
    </form>
  )
}