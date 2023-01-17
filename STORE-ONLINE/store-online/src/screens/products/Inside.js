// 1. useState - to store the data(array of documents from the db).
// 2. useEffect - to get all the data from the db.
import React, { useState, useEffect } from "react";
// 1. collection(firestore, path) - will get the entire collection from our db.
import { collection, getDocs } from "firebase/firestore";
// db - access to the db in firestore.
import { db } from "../../firebase-config";

export default function Inside() {
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
        .filter((product) => product.data.category === "inside");
      setProducts(productsList);
    };

    // call the function:
    getProducts(db);
  }, [Products]);

  return (
    <div className="container">
      <h2>My Inside Products</h2>

      {Products.length > 0 &&
        Products.map((product) => (
         
          <div class="card-deck">
            <div class="card">
                <h5 class="card-title">Product name: {product.data.name}</h5>
              <img class="card-img-top" src={product.data.image}  alt="Items in inside category" />
              <div class="card-body">
                <p class="card-text">Category: {product.data.category}</p>
                <p class="card-text">Price: {product.data.price}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
