import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export default function ViewItem() {
  const [data, setData] = useState(null);
  const id = useParams();

  let retrieveData = async () => {
    const item = doc(db, "Products",`${id.id}`);
    const docSnap = await getDoc(item);
    // Retrieve your data
    setData(docSnap.data());
  }

  useEffect(() => {
      retrieveData();
  }, []);
  
  return (
    <>
    {/* אם יש מידע בתוך האובייקט תציג אותו בצורה מסוימת */}
    {data && (
      <div className='container'>
              {/* <h1>View Item</h1>
              <h1>Product name: {data.name}</h1>
              <h1>Price: {data.price}</h1>
              <h1>In Stock: {data.inStock.toString()}</h1>
              <h1>Category: {data.category}</h1>
              <img src={data.image} style={{ width: "400px", height: "400px" }} alt='item pic'/> */}


          <div className="card-deck">
            <div className="card" >
              <h5 className="card-title">Product name : {data.name}</h5>
              <img  src={data.image}  style={{ width: "400px", height: "400px" }} alt="Items in inside category"  />
              <div className="card-body">
              <p className="card-text">Category: {data.category}</p>
              <p className="card-text">In Stock: {data.inStock.toString()}</p>
              <p className="card-text">Price: {data.price} NIS</p>
               </div>
           </div>
        </div>


      </div>
       )}
       {/* אם אין מידע בתוך האובייקט תציג מסך טעינה */}
      {!data && (
        <div> Loading... </div>
      )}
    </>
  )
}

