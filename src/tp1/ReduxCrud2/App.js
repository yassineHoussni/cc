import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./users/User";
import AjouterUser from "./users/AjouterUser";
import ModifyUser from "./users/ModifyUser";
import DetailsPost from "./posts/DetailsPost";
import AjouterPost from "./posts/AjouterPost";
import UpdatePost from "./posts/UpdatePost";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/createUser" element={<AjouterUser />} />
        <Route path="/modifyUser/:id" element={<ModifyUser />} />
        <Route path="/details/:id" element={<DetailsPost />} />
        <Route path="/createPost/:userId" element={<AjouterPost />} />
        <Route path="/updatePost/:idPost" element={<UpdatePost />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
