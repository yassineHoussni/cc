// import React from 'react';
// import {Link} from "react-router-dom";

// function Voyage({image,ville,prix}) {
//     return (
//         <div>
//             <img height={500} src={image} alt=""/>
//             <h2>{ville}</h2>
//             <h3>{prix}</h3>
//             <Link to={'/voyage/'}>
//                 <button>Plus de détails</button>
//             </Link>
//         </div>
//     );
// }

// export default Voyage;

import React from 'react';
import {Link} from "react-router-dom";

function Voyage({voyage}) {
    return (
        <div>
            <Link to={'/voyage/'+voyage.key}>
            <img height={300} width={300} src={voyage.image} alt=""/>
            </Link>
            <h2>{voyage.ville}</h2>
            <h3>{voyage.prix}</h3>
            <Link to={'/voyage/'+voyage.key}>
                <button>Plus de détails</button>
            </Link>
        </div>
    );
}

export default Voyage;



// function Voyage({voyage}) {
//     return (
//         <div>
//              <Link to={'/voyage/'+voyage.key}>
//             <img height={500} src={voyage.image} alt=""/>
//             </Link>
//             <h2>{voyage.ville}</h2>
//             <h3>{voyage.prix}</h3>
//                 <button>Plus de détails</button>
            
//         </div>
//     );
// }

// export default Voyage;