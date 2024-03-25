import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ajouterUser } from "../Store/Action";

function AjouterUser() {
    const [nom,setNom] = useState("")
    const [email,setEmail] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const list = useSelector((state) => state.users)
    function handle_submit(e){
        e.preventDefault()
        dispatch(ajouterUser({id:list.length + 1,nom,email}))
        navigate("/")
    }
  return (
    <div className="container  w-25">
        <h1 className="text-center">Ajouter User</h1>
      <form onSubmit={handle_submit}>
        <div className="form-group">
          <label className="label-control">name</label>
          <input
            className="form-control"
            name="nom"
            required
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className="form-group mb-2">
          <label className="label-control">email</label>
          <input
            className="form-control"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input className="btn  btn-primary form-control" type="submit" value={"Ajouter"} />
      </form>
    </div>
  );
}
export default AjouterUser;
