import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../redux/apiSlice'
import { useNavigate } from 'react-router-dom'

export default function AddProducts({id,setId}) {
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [category,setCategory] = useState("")
    const [img,setImage] = useState(null)
    const [description,setDescription] = useState("")
    
const dispatch = useDispatch()
const navigate = useNavigate()
function handle_submit(e) {
    e.preventDefault()
    const image = URL.createObjectURL(img)
    setId(id + 1)
    console.log(image)
    dispatch(add({id,title,price,category,image,description}))
    navigate("/show")
}
  return (
    <div className="container  w-25">
        <h1 className="text-center">Ajouter Product</h1>
      <form onSubmit={handle_submit}>
        <div className="form-group">
          <label className="label-control">title</label>
          <input
            className="form-control"
            name="title"
            required
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="form-group mb-2">
          <label className="label-control">price</label>
          <input
            className="form-control"
            name="price"
            onChange={(e)=>setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-2">
          <label className="label-control">Category</label>
          <input
            className="form-control"
            name="category"
            onChange={(e)=>setCategory(e.target.value)}
            required
          />
          
        </div>
        <div className="form-group mb-2">
          <label className="label-control">image</label>
          <input
            className="form-control"
            name="image"
            required
            type='file'
            accept='image/*'
            onChange={(e)=>setImage(e.target.files[0])}
          />
        </div>
        <div className="form-group mb-2">
          <label className="label-control">Description</label>
          <textarea
            className="form-control"
            type=''
            onChange={(e)=>setDescription(e.target.value)}
          ></textarea>
        </div>

        <input className="btn  btn-primary form-control" type="submit" value={"Ajouter Product"} />
      </form>
    </div>
  )
}

