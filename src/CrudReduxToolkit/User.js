import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./app.css";
import React from "react";
import { SupprimerUser } from "./redux/UserSlice";
function User() {
  const list = useSelector(state => state.users.users)
  const dispatch = useDispatch();
  const handleDelete=(id) =>{
    dispatch(SupprimerUser(id))
  }
  return (
    <div >
      <Link to="/createUser">
        <button>Ajouter User</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item,index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.nom}</td>
              <td>{item.email}</td>
              <td>
                <Link to={`/modifyUser/${item.id}`}>
                  <button >Modifier</button>
                </Link>
                  <button onClick={() => handleDelete(item.id)}>Supprimer</button>
                <Link to={`/details/${item.id}`}>
                  <button >details Posts</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default User;
