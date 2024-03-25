import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListUser from "./ListUser";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
import { useState } from "react";

function App() {
  // const [id,setId] = useState(1)
  // id={id} setId={setId}  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListUser  />} />
        <Route path="/createUser" element={<AddUser  />} />
        <Route path="/modifyUser/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;