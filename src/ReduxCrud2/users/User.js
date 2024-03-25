import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { supUser } from "../Store/Action";
import "../app.css";
function User() {
  const list = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <div className="container mt-5">
      <Link to="/createUser">
        <button className="btn btn-danger mb-1">Ajouter User</button>
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
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nom}</td>
              <td>{item.email}</td>
              <td>
                <Link to={`/modifyUser/${item.id}`}>
                  <button className="btn btn-primary me-1">Modifier</button>
                </Link>
                <button
                  className="btn btn-warning me-1"
                  onClick={() => dispatch(supUser(item.id))}
                >
                  Supprimer
                </button>
                <Link to={`/details/${item.id}`}>
                  <button className="btn btn-dark ">details Posts</button>
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
