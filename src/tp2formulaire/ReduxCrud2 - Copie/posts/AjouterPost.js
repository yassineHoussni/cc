import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPost } from "../Store/Action";


function AjouterPost() {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {userId} = useParams()
    const list = useSelector((state) => state.posts)
    function handle_submit(e){
        e.preventDefault()
        dispatch(addPost({idPost:list.length + 1,userId,title,body}))
        navigate(-1)
    }
  return (
    <div className="container  w-25">
        <h1 className="text-center">Ajouter Post</h1>
      <form onSubmit={handle_submit}>
        <div className="form-group">
          <label className="label-control">title</label>
          <input
            className="form-control"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group mb-2">
          <label className="label-control">body</label>
          <input
            className="form-control"
            name="body"
            required
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <input className="btn  btn-primary form-control" type="submit" value={"Ajouter"} />
      </form>
      
    </div>
  );
}
export default AjouterPost