import { Link } from "react-router-dom"

function Navbar() {
    return(
        <>
        
        <ul>
            <li>
                <Link to="/">Html</Link>
            </li>
            <li><Link to="/css">Css</Link></li>
            <li><Link to="/javascript">javascript</Link></li>
        </ul>
        </>
    )
}
export default Navbar