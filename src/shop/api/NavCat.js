import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./css/navcat.css"
export default function NavCat() {
  const fil = useSelector((state) =>
    state.products.map((item) => item.category)
  );
  const [cat, setCat] = useState([]);
  fil.forEach((element) => {
    if (!cat.includes(element)) {
      setCat([...cat, element]);
    }
  });
  return (
    <div className="container dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <i className="fa-solid fa-bars"></i> All Categories
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><Link to={"/"} className="dropdown-item">All</Link></li>
      {cat.map(item => (

        <li key={item}><Link to={`/c/${item}`} className="dropdown-item" >{item}</Link></li>
      ))}
    </ul>
  </div>
  );
}
