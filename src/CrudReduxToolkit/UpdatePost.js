import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updatePost } from "./redux/PostSlice"


function UpdatePost() {
    const {idPost} = useParams()
    const list = useSelector((state) => state.posts.posts.find(item => item.idPost == idPost))
    
    const [title,setTitle] = useState(list ? list.title :"")
    const [body,setbody] = useState(list ? list.body : "")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    function handle_submit(e){
        e.preventDefault()
        dispatch(updatePost({idPost,title,body}))
        navigate(-1)
    }
  return (
    <div className="container  w-25">
      <h1 className="text-center">Modify User</h1>
      <form onSubmit={handle_submit}>
        <div className="form-group">
          <label className="label-control">name</label>
          <input
            className="form-control"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group mb-2">
          <label className="label-control">body</label>
          <input
            className="form-control"
            name="body"
            value={body}
            required
            onChange={(e) => setbody(e.target.value)}
          />
        </div>
        <input
          className="btn  btn-primary form-control"
          type="submit"
          value={"modifier"}
        />
      </form>
    </div>
  );
}
export default UpdatePost;