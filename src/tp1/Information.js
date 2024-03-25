import { useParams } from "react-router-dom";

function Information(){
    const {title,price,thumbnail} = useParams();
    return(
        <>
            <div className="col">
                <div className="card shadow-sm">
                    
                        <img className="bd-placeholder-img card-img-top"
                            src={`/${thumbnail}`} alt="" style={{width:"300px"}} />
                    
                    <div className="card-body">
                        <p className="card-title">{title}</p>
                        <p className="card-text">{price}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Ajouter au panier</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Information;