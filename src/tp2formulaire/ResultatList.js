import React from "react";
function ResultatList(props){
    return(
        <>
            <h1>Composant ResultatList</h1>
            {props.list.map((item,index)=>(
                <li key={index}>{item.nom}</li>
            ))}
        </>
    )
}
export default ResultatList;
