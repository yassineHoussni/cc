import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPost } from "./redux/PostSlice";



function AddPost() {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {userId} = useParams()
    const list = useSelector((state) => state.posts.posts.length)
    function handle_submit(e){
        e.preventDefault()
        dispatch(addPost({idPost:list+ 1,userId,title,body}))
        navigate(-1)
    }
  return (
    <div >
        <h1 >Ajouter Post</h1>
      <form onSubmit={handle_submit}>
        <div >
          <label >title</label>
          <input
            
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label >body</label>
          <input
            
            name="body"
            required
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <input  type="submit" value={"Ajouter"} />
      </form>
      
    </div>
  );
}
export default AddPost