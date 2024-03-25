import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ajouteStagiaire } from "../../redux/StgSlice";

function AddStagiaire() {
  const [nom, setNom] = useState("");
  const [image, setImage] = useState("");
  const [prenom, setPrenom] = useState("");
  const [filiere, setFiliere] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handle_submit(e) {
    e.preventDefault();
    dispatch(ajouteStagiaire({ nom, image, prenom, filiere }));
    navigate("/");
  }
  return (
    <form onSubmit={handle_submit}>
      <input
        type="text"
        name="prenom"
        onChange={(e) => setPrenom(e.target.value)}
      />
      <br />

      <input type="text" name="nom" onChange={(e) => setNom(e.target.value)} />
      <br />
      <input
        type="text"
        name="image"
        onChange={(e) => setImage(e.target.value)}
      />
      <br />

      <input
        type="text"
        name="filiere"
        onChange={(e) => setFiliere(e.target.value)}
      />
      <br />

      <input value="Ajouter" type="submit" />
    </form>
  );
}
export default AddStagiaire;
