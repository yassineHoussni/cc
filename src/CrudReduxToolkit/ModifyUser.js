import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { UpdateUser } from "./redux/UserSlice"

function ModifyUser() {
    const {id} = useParams()
    const list = useSelector((state) => state.users.users.find(item => item.id == id))
    const [nom,setNom] = useState(list ? list.nom :"")
    const [email,setEmail] = useState(list ? list.email : "")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function handle_submit(){
        dispatch(UpdateUser({id,nom,email}))
        navigate("/")
    }
  return (
    <div className="container  w-25">
      <h1 className="text-center">Modify User</h1>
      <form onSubmit={handle_submit}>
        <div className="form-group">
          <label className="label-control">name</label>
          <input
            className="form-control"
            name="nom"
            required
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className="form-group mb-2">
          <label className="label-control">email</label>
          <input
            className="form-control"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input
          className="btn  btn-primary form-control"
          type="submit"
          value={"Ajouter"}
        />
      </form>
    </div>
  );
}
export default ModifyUser;