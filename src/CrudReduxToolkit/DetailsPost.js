import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SupprimerPost } from "./redux/PostSlice";
import "./app.css"
function DetailsPost() {
  const { id } = useParams();
  const list = useSelector((state) => state.posts.posts.filter(item => item.userId == id) );
  const dispatch = useDispatch();
  
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
          {list.map((item) => (
            <tr key={item.idPost}>
              <td>{item.idPost}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>
                <button
                  
                  onClick={() => dispatch(SupprimerPost(item.idPost))}
                >
                  Supprimer
                </button>
                <Link to={`/updatePost/${item.idPost}`}>
                  <button >Update Post</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div >
      
      </div>
    </div>
  );
}
export default DetailsPost;
