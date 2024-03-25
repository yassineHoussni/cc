import React, { useEffect, useState } from "react";
import "./css/style.css";
import "./css/search.css"
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import NavCat from "./NavCat";
export default function Navbar() {
  const products = useSelector((state) => state.products);
  const cartCount = useSelector((state) => state.cart);
  const saveCount = useSelector((state) => state.list);
  const [nomPro, setNomPro] = useState("");
  const [res, setRes] = useState([]);
  const [id, setId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setRes(
      products.filter((item) =>
        item.title.toLowerCase().includes(nomPro.toLowerCase())
      )
    );
  }, [products, nomPro]);
  return (
    <>
      <div className="navbar  px-sm-4   px-0 ">
        <div className="d-md-block d-none w-100 text-center " >
        <a href="/" className="navbar-brand  ">
            <h3 className="h1 " style={{fontSize:"50px"}} >
              Electro<span>Dell</span>
            </h3>
          </a>
          </div>
        <div className="container-fluid  ">
        <a href="/" className="navbar-brand d-md-none d-block ">
            <h3 >
              Electro<span>Dell</span>
            </h3>
          </a>
          <div className="d-md-block d-none"><NavCat/></div>
          <form
            onSubmit={() => navigate(`/cart/${id}`)}
            className="d-md-flex d-none flex-grow-1"
          >
            <div className="input-group">
              <input
                type="text"
                className="form-control  search-input"
                placeholder="Search ElectroDell"
                value={nomPro}
                onChange={(e) => {
                  setNomPro(e.target.value);
                }}
              />
              <div className="input-group-append">
                <button
                  type="submit"
                  className="btn btn-secondary rounded"
                  style={{ width: "40px" }}
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
              
            </div>
          </form>
          <div className="icons d-flex align-items-center">
            <a href="">
              <i className="fa-solid fa-user fs-5"></i>
            </a>
            <Link to={"/favorite"}>
              <i className="fa-solid fa-heart fs-5">
                {saveCount.length == 0 ? (
                  ""
                ) : (
                  <span id="count">{saveCount.length}</span>
                )}
              </i>
            </Link>
            <Link to={"/cartShop"}>
              <i className="fa-solid fa-cart-plus fs-5">
                {cartCount.length == 0 ? (
                  ""
                ) : (
                  <span id="count">{cartCount.length}</span>
                )}
              </i>
            </Link>
            
          </div>
          <div className="d-flex  mx-2 mt-2 col-12 align-items-center d-md-none ">
            
          <div className="d-md-none d-block"><NavCat/></div>
            <form action="" className="d-flex ms-1 flex-grow-1 ">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control  search-input "
                  placeholder="Search ElectroDell"
                  value={nomPro}
                  onChange={(e) => {
                    setNomPro(e.target.value);
                  }}
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="btn btn-secondary "
                    style={{ width: "40px" }}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        <div className="container">
          {nomPro && (
            <div className="search-results-container">
              <ul className="search-results">
                {res.slice(0, 4).map((item) => (
                  <li key={item.id}>
                    <Link
                      to={`/cart/${item.id}`}
                      className="text-decoration-none"
                      onClick={() => {
                        setId(item.id);
                        setNomPro("")
                      }}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
