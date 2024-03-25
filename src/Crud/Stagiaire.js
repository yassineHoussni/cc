import React from "react"
import { Link } from "react-router-dom"
function Stagiaire({list,handle_delete}){

    return(
        <div className="container">
        <h1>Liste Stagiaires</h1>
        <Link to={"/create"}>
        <button >Ajouter Stagiaire</button>
        </Link>
            <table>
                <tr>
                    <th>id</th>
                    <th>nom</th>
                    <th>age</th>
                    <th>image</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                </tr>
                {list.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nom}</td>
                        <td>{item.age}</td>
                        <td >
                            <img style={{width:"100px"}} src={`/${item.image}`}/>
                        </td>
                        <td><Link to={`/modifiy/${item.id}`}><button>Modifier</button></Link></td>
                        <td><button onClick={()=>handle_delete(item.id)}>Supprimer</button></td>
                    </tr>
                ))}
            </table>
                
        </div>
    )
}
export default Stagiaire


