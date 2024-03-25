import React from "react";
import { Link } from "react-router-dom";
function Product(props) {
    return (



        <>
            <div className="col">
                <div className="card shadow-sm">
                    <Link to={`/P/${props.price}/${props.title}/${props.thumbnail}`}>
                        <img className="bd-placeholder-img card-img-top"
                            src={props.thumbnail} alt="" />
                    </Link>
                    <div className="card-body">
                        <p className="card-title">{props.title}</p>
                        <p className="card-text">{props.price}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Ajouter au panier</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product;
