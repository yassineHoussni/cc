import React, { useState } from "react";

function ChercherBar(props){
    const [value,setValue] = useState("");
    function handle_submit(e){
      e.preventDefault();
      props.getdata(value)
        
    }
    return(
        <div>
            <h1>composent ChercherBar</h1>
            <p>Entrer le mot cle de recherche</p>
            <form onSubmit={handle_submit}>
                <input type="text" name="recherche" onChange={(e)=>setValue(e.target.value)}/>
                <input type="submit" value="cherche"/>
            </form>
        </div>
    )

}
export default ChercherBar;