import { useState } from "react";
import Product from "./Product";
import React from "react";
import Form from "./Form";
function ListProducts() {  
  
  const [products,setProducts] = useState([])

  function getdata(title,price,image){
    setProducts([...products,{title,price,image}])
  }
  return (
    <main className="container">
      

      <Form getdata={getdata} />

      <h1>Ordinateurs portables</h1>
      <div className="row mb-2">
          {products.map((item,index) => <Product key={index} title={item.title} price={item.price} image={item.image}/>)}
      </div>
    </main>
  );
}
export default ListProducts;

