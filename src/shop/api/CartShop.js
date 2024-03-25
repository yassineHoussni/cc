import React, { useState } from "react";
import "./css/page.css";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../redux/CartSlice";

export default function CartShop() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  var total = 0;
  cart.forEach((element) => {
    total += element.price * +element.qnt;
  });

  return (
    <>
    
    
      {cart.length > 0 ? (
        <>
      <h1>Cart</h1>
        <div className="row">
          <div className="col-md-8" >
            {cart.map((item) => (
              <div className="card  " key={item.id}>
                <div className="row">
                  <div className="col-4">
                    <img
                      src={item.image}
                      className="mt-2"
                      style={{ height: "175px", width: "150px" }}
                    />
                  </div>
                  <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-title">{+item.price}$</h5>
                    <p className="card-text">{item.title}</p>
                    <div className=" w-25 mb-3">
                      <span className="">Quantity:{+item.qnt}</span>
                    </div>
                    <div>Total : ${item.price * item.qnt}</div>
                    <button
                      className="btn btn-danger mt-2"
                      onClick={() => dispatch(removeCart(item.id))}
                    >
                      Delete Cart
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          

          {}
          <div className="col-md-4">
          <div className="card   " style={{ height: "200px" }}>
            <div className="card-body d-flex flex-column  " >
              <p className="h4">Carts Total:</p>
              <p>Total Amount: {Math.round(total)}$ </p>
              
              
            
            <button className="btn mt-5 btn-outline-success   mb-2  ">
                Checkout
              </button>
              </div>
          </div>
        </div>
        </div>
      </>) : (
        <div
          className="d-flex justify-content-center align-items-center "
          style={{ height: "500px" }}
        >
          <p className="h1">Cart is empty</p>
        </div>
      )}
    </>
  );
}
