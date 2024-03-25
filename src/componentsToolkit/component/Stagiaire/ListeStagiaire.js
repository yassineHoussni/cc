import { Link } from "react-router-dom";
import React from "react";
function ListeStagiaire(props) {
  return (
    <>
      {props.listStg.map((item) => (
        <div>
          <Link to={`/${item.nom}`}>
            <img src={`/image/${item.image}`} />
          </Link>
          <h1>{item.nom}</h1>
        </div>
      ))}
    </>
  );
}
export default ListeStagiaire;
