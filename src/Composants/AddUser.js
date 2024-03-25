import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUserAction } from "../CrudRedux/Action"
import { useNavigate } from "react-router-dom";
function AddUser() {
    const count = useSelector(data=>data.users.length);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(addUserAction({
            id:count+1,
            name:name,
            email:email
        }))
        navigate('/')
    }
    return (
        <form>
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <button onClick={handleClick}>Enregistrer</button>
        </form>
    )
}
export default AddUser









// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { addUserAction } from "../CrudRedux/Action"
// function AddUser() {
// const count = useSelector(data=>data.users.length);
// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const dispatch = useDispatch();
//      const navigate = useNavigate()
//   function handle_submit(e) {
//     e.preventDefault();
//     dispatch(addUserAction({ id:count+1 , name , email}));
//     navigate("/");
//   }
//   return (
//     <form onSubmit={handle_submit}>
        
//       <label>Name</label>
//       <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
//       <br/>
//       <label>Email</label>

//       <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
//       <br />
//       <input value="Ajouter" type="submit" />
//     </form>
//   );
// }
// export default AddUser;
