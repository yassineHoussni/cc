import { useEffect, useState } from "react"

function StagiairesApi(){
    const [stg,setStg] = useState([])
    useEffect(()=>{
        fetch("http://www.ofppt.ma/api/stagiaires").then((res) => {return res.json()})
        .then((stagiaires) => setStg(stagiaires))
    },[])
}
return(
    <table>
        <tr>
            <td>nom</td>
            <td>prenom</td>
            <td>image</td>
            <td>filiere</td>
        </tr>
        {stg.map(item=>(
            <tr>
                <td>{item.nom}</td>
                <td>{item.prenom}</td>
                <td><img src={`${item.image}`}/></td>
                <td>{item.filiere}</td>
            </tr>
        ))}
    </table>
)
export default StagiairesApi