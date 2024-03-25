import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/app.css"
import { useSelector } from "react-redux";
export default function Home() {
  const products = useSelector((state) => state.products);
  
    return (
    
    <div className="row">
      {products.map((item) => (
        <div className="pro  col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={item.id} >
          <div
            className="product  " 
          >
            <div className="image text-center" >
              <Link to={`/cart/${item.id}`}>
                <img
                  src={item.image}
                  style={{ width: "210px", height: "190px" }}
                />
              </Link>
            </div>
            <div className="title" style={{ height: "60px" }} >{item.title.length > 56 ? item.title.slice(0,56) + "...":item.title}</div>
            <div className="price h3 " style={{ height: "30px" ,color:"#e0ac1c"}}>${item.price}</div>
            <div className="" style={{ height: "20px" }}>
              {item.category}
            </div>
            <div>
                
            </div>
          </div>
        </div>
      ))}
    </div>
    
  );
}