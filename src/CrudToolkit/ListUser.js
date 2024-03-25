import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {SupprimerUser} from "./UserSlice"
function ListUser(){
    const users = useSelector((state)=>state.users.users);
    console.log(users)
    const dispatch = useDispatch();
    
    return(
        <div>
            <p>
            <Link to="/createUser">
        <button>Ajouter User</button>
      </Link>
            </p>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                            <Link to={`/modifyUser/${item.id}`}>
                         <button >Modifier</button>
                        </Link>
                        <button onClick={()=>dispatch(SupprimerUser(item.id))}>supprimer</button>
                        <Link to={`/details/${item.id}`}>
                  <button >details Posts</button>
                </Link>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ListUser;