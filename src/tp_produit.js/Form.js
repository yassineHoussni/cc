import React from "react";
import { useState } from "react";
function Form(props){
const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    props.getdata(title,price,image)
  }
    return(
        <div className="d-flex justify-content-center">
        <div>
          <h1 className="text-center">Inscription</h1>

          <form onSubmit={handleSubmit}>
            <table className="">
              <tr>
                <th>title</th>
                <td>
                 <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
                </td>
              </tr>
              <tr>
                <th>price</th>
                <td>
                  <input type="text" name="price" onChange={(e) => setPrice(e.target.value)}
                  />
                </td>
              </tr>
              <tr> 
                <th>image</th>
                <td>
                  <input
                    type="text"
                    onChange={(e) => setImage(e.target.value)}
                    name="image"
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input type="submit" value="engistrer" />
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    )
}
export default Form;