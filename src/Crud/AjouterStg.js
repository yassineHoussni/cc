import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AjouterStg({addstg}) {
  const [nom, setNom] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate()
  function handle_submit(e) {
    e.preventDefault();
    addstg(nom,age,image)
    navigate("/")
  }
  return (
    <div className="container">
      <form onSubmit={handle_submit} method="Post">
        
        <div>nom:</div>
        <div>
          <input
            type="text"
            name="nom"
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div>age:</div>
        <div>
          <input
            type="text"
            name="age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>image:</div>
        <div>
          <input
            type="text"
            name="image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Ajouter" />
        </div>
      </form>
    </div>
  );
}
export default AjouterStg;