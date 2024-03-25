import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "../../redux/apiSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProducts() {
  const { produitId } = useParams();

  const findValue = useSelector((state) =>
    state.products.find((item) => item.id == produitId)
  );

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImage] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (findValue) {
      setTitle(findValue.title);
      setPrice(findValue.price);
      setCategory(findValue.category);
      setDescription(findValue.description);
    }
  }, [findValue]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handle_submit() {
    let image = null;
    if (img) {
      image = URL.createObjectURL(img);
    } else {
      image = findValue.image;
    }
    dispatch(edit({ produitId, title, price, category, image, description }));
    navigate("/show");
  }
  return (
    <div className="container  w-25">
      <h1 className="text-center">Edit Product</h1>
      <form onSubmit={handle_submit}>
        <div className="form-group">
          <label className="label-control">title</label>
          <input
            className="form-control"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group mb-2">
          <label className="label-control">price</label>
          <input
            className="form-control"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            required
            value={price}
          />
        </div>
        <div className="form-group mb-2">
          <label className="label-control">Category</label>
          <input
            className="form-control"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            required
            value={category}
          />
        </div>
        <div className="form-group mb-2">
          <label className="label-control">image</label>
          <input
            className="form-control"
            name="image"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="form-group mb-2">
          <label className="label-control">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <input
          className="btn  btn-primary form-control"
          type="submit"
          value={"Edit Product"}
        />
      </form>
    </div>
  );
}
