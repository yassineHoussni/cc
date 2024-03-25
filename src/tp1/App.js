import { BrowserRouter, Routes,Route } from "react-router-dom"
import Information from "./Information"
import ListProducts from "./ListProducts"

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/P/:price/:title/:thumbnail" element={<Information/>}/>
                <Route path="/" element={<ListProducts/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App