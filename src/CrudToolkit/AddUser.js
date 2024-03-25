import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AjouterUser } from "./UserSlice";

function AddUser(){
    const count = useSelector(data=>data.users.users.length);
    
    const [nom,setNom]=useState("");
    const [email,setEmail]= useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handle_submit =(e)=>{
        e.preventDefault()
        
        dispatch(AjouterUser({
            id:count + 1,
            nom:nom,
            email:email
        }))
        navigate("/")
    }
    return(
        <div>
            <h1 >Ajouter User</h1>
        <form onSubmit={handle_submit}>
            <label>nom</label>
            <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)}/>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button type="submit" >Enregistrer</button>
        </form>
        </div>
    )
}
export default AddUser;