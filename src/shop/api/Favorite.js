import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/app.css";
import { useDispatch, useSelector } from "react-redux";
import { removeSave } from "../redux/ListSlice";

export default function Favorite() {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch()
  return (
    <div className="row">
      {list.length > 0 ? (
        list.map((item) => (
          <div
            className="pro col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
            key={item.id}
            style={{height:"400px"}}
          >
            <div className="product  ">
              <div className="image text-center">
                <Link to={`/cart/${item.id}`}>
                  <img
                    src={item.image}
                    style={{ width: "210px", height: "190px" }}
                  />
                </Link>
              </div>
              <div className="title" style={{ height: "60px" }}>
                {item.title.length > 56
                  ? item.title.slice(0, 56) + "..."
                  : item.title}
              </div>
              <div className="price h3 " style={{ height: "30px" }}>
                ${item.price}
              </div>
              <div className="" style={{ height: "20px" }}>
                {item.category}
              </div>
              <div className="text-center mt-4">
                <button className="btn btn-danger form-conttol" onClick={()=>dispatch(removeSave(item.id))} >Remove From List</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div
          className="d-flex justify-content-center align-items-center "
          style={{ height: "500px" }}
        >
          <p className="h1">WishList is empty</p>
        </div>
      )}
    </div>
  );
}
