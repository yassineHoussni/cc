import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./Main"
// import Css from "./Page/Css"
// import Html from "./Page/Html"

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main data="Html"/>} />
                <Route path="/css" element={<Main data="Css"/>} />
                <Route path="/javascript" element={<Main data="Javascript"/>} />
                <Route />
            </Routes>
        </BrowserRouter>
        
    )
}
export default App