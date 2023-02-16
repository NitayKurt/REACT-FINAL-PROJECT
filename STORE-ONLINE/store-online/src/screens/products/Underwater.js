// 1. useState - to store the data(array of documents from the db).
// 2. useEffect - to get all the data from the db.
import React, { useState, useEffect } from "react";
// 1. collection(firestore, path) - will get the entire collection from our db.
import { collection, getDocs } from "firebase/firestore";
// db - access to the db in firestore.
import { db } from "../../firebase-config";
import { Link } from "react-router-dom";

export default function Underwater() {
  // 1. Array to store all the songs from the DB
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async (db) => {
      // collection() - return all the collection for that path.
      const ProductsCol = collection(db, "Products");

      // getDocs() - return all documents for our collection
      const ProductsSnapshot = await getDocs(ProductsCol);

      const productsList = await ProductsSnapshot.docs
        .map((doc) => ({
          id: doc.id,
          // Retrieves all fields in the document as an object
          data: doc.data(),
        }))
        .filter((product) => product.data.category === "underwater");
      setProducts(productsList);
    };

    // call the function:
    getProducts(db);
  }, [Products]);

  return (
    <div className="container">
      <h2 className="text-center"> Underwater Products</h2>

      {Products.length > 0 &&
        Products.map((product) => (
         
          <div className="card-deck">
            <div className="card" >
                <h5 className="card-title">Product name: {product.data.name}</h5>
              <img  src={product.data.image}  style={{ width: "400px", height: "400px" }} alt="Items in inside category"  />
              <div className="card-body">
                <p className="card-text">Category: {product.data.category}</p>
                <p className="card-text">Price: {product.data.price} NIS</p>
                <Link to={product.id}>
            <button className="btn btn-outline-primary mt-auto">
              View Item
            </button>
          </Link>
              </div>
            </div>
              <br></br>
          </div>
          
        ))}
    </div>
  );
}
