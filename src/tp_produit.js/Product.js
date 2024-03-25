import React from "react";
function Product(props) {
  
  return (
  
    <div className="col" >
      <div className="card shadow-sm">
        <img className="bd-placeholder-img card-img-top" src={props.image} alt="" />
        <div className="card-body">
          <p className="card-title">{props.title}</p>
          <p className="card-text text-center fw-bold">{props.price}</p>
          <div className="d-flex justify-content-center">
            <div className="btn-group ">
              <button 
                type="button"
                className="btn btn-sm btn-outline-secondary "
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
export default Product;
