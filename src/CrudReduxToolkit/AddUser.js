import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "./redux/UserSlice";

function AddUser() {
    const [nom,setNom] = useState("")
    const [email,setEmail] = useState("")
    const list = useSelector(state => state.users.users.length)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function handle_submit(e){
        e.preventDefault()
        dispatch(addUser({id:list + 1,nom,email}))
        navigate("/")
    }
  return (
    <div >
        <h1 >Ajouter User</h1>
      <form onSubmit={handle_submit}>
        <div>
          <label >name</label>
          <input
            type="text"
            name="nom"
            required
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div>
          <label className="label-control">email</label>
          <input
            
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input  type="submit" value={"Ajouter"} />
      </form>
    </div>
  );
}
export default AddUser;
