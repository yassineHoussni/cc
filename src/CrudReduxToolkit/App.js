import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./User";
import AddUser from "./AddUser";
import ModifyUser from "./ModifyUser";
import DetailsPost from "./DetailsPost";
import AddPost from "./AddPost";
import UpdatePost from "./UpdatePost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User  />} />
        <Route path="/createUser" element={<AddUser  />} />
        <Route path="/modifyUser/:id" element={<ModifyUser />} />
        <Route path="/details/:id" element={<DetailsPost />} />
        <Route path="/createPost/:userId" element={<AddPost />} />
        <Route path="/updatePost/:idPost" element={<UpdatePost />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;