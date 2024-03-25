import { useState } from "react";
import ChercherBar from "./ChercherBar";
import ResultatList from "./ResultatList";

function App(){
    const list=[
        {nom:"banane",type:"fruit"},
        {nom:"orange",type:"fruit"},
        {nom:"pomme",type:"fruit"},
        {nom:"raisins",type:"fruit"},
        {nom:"kiwi",type:"fruit"},
        {nom:"tomate",type:"legume"},
        {nom:"carotte",type:"legume"},
        {nom:"pomme de terre",type:"legume"},
        {nom:"navet",type:"legume"},
        {nom:"poivron",type:"legume"}
    ];
    const [search,setSearch] = useState("")
    function getdata(data){
        setSearch(data)
    }
    
    return(
        <>
            <h1>Composant App</h1>
            
            <ChercherBar  getdata={getdata}/>
            <p>le type est :{search}</p>
            <ul>
                <ResultatList list={list.filter((item) => item.type === search)}/>
            </ul>
        </>
    )
}
export default App;