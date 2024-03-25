import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

function DetailStagiaire() {
    const {nomStagiaire} = useParams()
    const stg = useSelector(state => state)
    const detail = stg.find(item => item.nom === nomStagiaire)
    return(
        <ul>
            <li>{detail.filiere}</li>
            <li>{detail.prenom}</li>
        </ul>
    )
}
export default DetailStagiaire