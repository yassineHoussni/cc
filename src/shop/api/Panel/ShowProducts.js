import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../redux/apiSlice";
import { Link, useNavigate } from "react-router-dom";

export default function ShowProducts() {
  const products = useSelector((state)=>state.products)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className="container ">
      <h2>Product Table</h2>
      
      <Link to={"/addProducts"}>
        <button className="btn btn-primary">Add Product</button>
      </Link>
      <Link to={"/"}>
        Home
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">image</th>
            <th scope="col">category</th>
            <th scope="col" >actions</th>
          </tr>
        </thead>
        <tbody>
            {products.map(item => (
              <tr>
              <th scope="row">{item.id}</th>
              <td style={{width:"400px"}}>{item.title}</td>
              <td>{item.price}</td>
              <td><img src={item.image} style={{width:"50px",height:"60px"}}/></td>
              <td>{item.category}</td>
              <td>
                {/* <button className="btn btn-success me-2">show</button> */}
                
                <Link to={`/edit/${item.id}`}><button className="btn btn-warning me-2">Edit</button></Link>
                <button className="btn btn-danger" onClick={()=>{
                  dispatch(remove(item.id))
                 
                  }}>Delete</button>
              </td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
