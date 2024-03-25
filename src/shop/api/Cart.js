import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import { addCart } from "../redux/CartSlice";
import { save } from "../redux/ListSlice";
export default function Cart() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [qnt, setQnt] = useState(1);
  const findCart = useSelector((state) =>
    state.products.find((item) => item.id == id)
  );

  return (
    <>
      <div className="row">
        
        {findCart ? (
          <>
            <div className="col-md-6  col-12">
              <div className="image text-center">
                <img
                  className=" "
                  src={findCart.image && findCart.image}
                  style={{ height: "300px" ,width:"250px"}}
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="prix h4 fs-5 text-primary">
                {findCart.category}
              </div>
              <div className="h2 fw-bold">${findCart.price}</div>
              <div>{findCart.description}</div>
              <div className="mt-4 d-flex " style={{ gap: "10px" }}>
                <input
                  type="number"
                  value={qnt || 1}
                  onChange={(e) => setQnt(+e.target.value)}
                  className="form-control "
                  style={{ width: "60px" }}
                  min={1}
                  max={10}
                />
                <button
                  className="btn  btn-danger"
                  onClick={() => dispatch(addCart({ ...findCart, qnt}))}
                >
                  Add To Cart
                </button>
                
                <button  className="btn btn-primary" onClick={()=>dispatch(save(findCart))}>Save For Later</button>
                
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
