import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function Category() {
  const { category } = useParams();
  const products = useSelector((state) =>
    state.products.filter((item) => item.category === category)
  );
  return (
    <>
      <div className="row">
        {products.map((item) => (
          <div
            className="pro  col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
            key={item.id}
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
