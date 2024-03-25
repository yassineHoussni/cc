import { Link } from "react-router-dom"

function Header() {
    return(
        <div>
            <Link to={"/add"}>Add</Link><br/>
            <Link to={"/"}>ListeStagiaire</Link>
        </div>
    )
}
export default Header