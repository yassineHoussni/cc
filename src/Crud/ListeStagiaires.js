import { useState } from "react";
import Stagiaire from "./Stagiaire";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import AjouterStg from "./AjouterStg";
import ModifiyStg from "./ModifyStg";

function ListeStagiaires() {
  
  const [stagiaire, setStagiaire] = useState([
    { id: 1, nom: "grealish", image: "grealish.jpeg", age: 25 },
    { id: 2, nom: "bono", image: "grealish.jpeg", age: 32 },
    { id: 3, nom: "ronaldo", image: "grealish.jpeg", age: 38 },
  ]);
  function handle_delete(id) {
    setStagiaire(stagiaire.filter((item) => item.id !== id));
  }
  function addStg(nom,age,image){
    setStagiaire([...stagiaire,{id:stagiaire.length + 1,nom,age,image}])
  }
  function modifiyStg(nom, age, image, id) {
    setStagiaire(
      stagiaire.map((item) => {
        if (item.id === parseInt(id)) {
          return { ...item, nom, image, age };
        }
        return item;
      })
    );
    }
  return (
    <>
      <>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<ListeStagiaires />} /> */}
            <Route path="/" element={<Stagiaire list={stagiaire} handle_delete={handle_delete} />} />
            <Route path="/create" element={<AjouterStg addstg={addStg} />} />
            <Route
              path="/modifiy/:id"
              element={<ModifiyStg ModifiyStg={modifiyStg} />}
            />
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}
export default ListeStagiaires;