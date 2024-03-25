import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../app.css";
import { supPost } from "../Store/Action";
function DetailsPost() {
  const { id } = useParams();
  const list = useSelector((state) => state.posts);
  const listPost = list.filter((item) => item.userId == id);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  return (
    <div className="container mt-5">
      <h1>Posts - user:({id})</h1>
      <Link to={`/createPost/${id}`}>
        <button>Ajouter Post</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listPost.map((item) => (
            <tr key={item.idPost}>
              <td>{item.idPost}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>
                <button
                  className="btn btn-warning me-1"
                  onClick={() => dispatch(supPost(item.idPost))}
                >
                  Supprimer
                </button>
                <Link to={`/updatePost/${item.idPost}`}>
                  <button className="btn btn-dark me-1">Update Post</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center mt-5">
      <button className="btn btn-success form-control w-25 " onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}
export default DetailsPost;
