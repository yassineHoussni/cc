import { useState } from "react";

function Formulaire(){
    const[nom , setNom]=useState("")
    const[password, setPassword]=useState("")
    const[dateNaissance , setDateNaissance]=useState("")
    const[ville , setVille]=useState("")
    const[genre , setGenre]=useState("")
    const[loisirs , setLoisirs]=useState("[]")
    function handleLoisirs(e) {
        if(!loisirs.includes(e.target.value)) {
            setLoisirs([...loisirs, e.target.value]);
        } else {
            setLoisirs([...loisirs.filter((item)=>item!==e.target.value)]);
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        alert(`${nom} ${password} ${dateNaissance} ${ville} ${genre} ${loisirs.join(',')}`)
    }



return(
    <form onSubmit={(e)=>handleSubmit}>
        <p>
            <label>nom</label>
            <input type="text" name="nom" onChange={(e)=>setNom(e.target.value)}/>
        </p>
        <p>
            <label>mot de passe</label>
            <input type="password" name="nom"  onChange={(e)=>setPassword(e.target.value)}/>
        </p>
        <p>
            <label>date de naissance</label>
            <input type="date" name="dateNaissance"  onChange={(e)=>setDateNaissance(e.target.value)}/>
        </p>
        <p>
            <label>ville</label>
            <select name="ville" onChange={(e)=>setVille(e.target.value)}>
                <option>choissir une ville</option>
                <option value="agadir">agadir</option>
                <option value="tanger">tanger</option>
            </select>
        </p>
        <p>
            <label>genre</label>
            <input type="radio" name="genre" value="homme"  onChange={(e)=>setGenre(e.target.value)}/> homme
            <input type="radio" name="genre" value="femme"  onChange={(e)=>setGenre(e.target.value)}/> femme
        </p>
        <p>
                <label>Loisirs</label>
                <input type="checkbox" name="loisirs" value="Sport" onChange={(e)=>handleLoisirs(e)}/>Sport
                <input type="checkbox" name="loisirs" value="Lecture" onChange={(e)=>handleLoisirs(e)}/>Lecture
                <input type="checkbox" name="loisirs" value="Musique" onChange={(e)=>handleLoisirs(e)}/>Musique
            </p>
        <p>
            <input type="submit" value="s'incrire"/>
        </p>
    </form>
)
}
export default Formulaire;