import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListeStagiaire from "./ListeStagiaire";
import AddStagiaire from "./AddStagiaire";
import DetailStagiaire from "./DetailStagiaire";
import { useSelector } from "react-redux";
import Header from "../Header/Header";

function Stagiaire() {
    const listStg = useSelector((state) => state.stg)
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<ListeStagiaire listStg={listStg} />} />
        <Route path="/add" element={<AddStagiaire />} />
        <Route path="/:nomStagiaire" element={<DetailStagiaire />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Stagiaire;