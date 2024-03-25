import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function ModifiyStg({ModifiyStg}) {
  const {id} = useParams();
  const [nom, setNom] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  function handle_submit(e) {
    e.preventDefault();
    ModifiyStg(nom, age, image,id);
    navigate("/")
  }
  
  return (
    <div className="container">
      <form onSubmit={handle_submit} >
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
          <input type="submit" value="Modify" />
        </div>
      </form>
    </div>
  );
}
export default ModifiyStg;
