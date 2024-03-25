import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ModifierUser from "./UserSlice";
function UpdateUser(){
    const {id} = useParams();
    const user = useSelector(data=>data.users.users.find((item)=>item.id == id));
    const [nom,setNom]=useState(user.nom)
    const [email,setEmail]= useState(user.email)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handle_submit = () => {
        dispatch(ModifierUser({
            id:id,
            nom:nom,
            email:email
        }))
        navigate("/")
    }
    
    return (
        <form onSubmit={handle_submit}>
            <label>Name</label>
            <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} />
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <button type="submit">Enregistrer</button>
        </form>
    )
}

export default UpdateUser
