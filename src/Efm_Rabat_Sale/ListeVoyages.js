
// import React from 'react';
// import Voyage from "./Voyage";
// import {useSelector} from "react-redux";

// function ListeVoyages() {
//     const voyages = useSelector(state => state)
//     return (
//         <>
//             <h1>Accueil</h1>
//             <div style={{display: 'flex',gap: 50}}>
// {voyages.map((voyage, key) => <Voyage key={key} image={voyage.image} ville={voyage.ville} prix={voyage.prix} />)}
// </div>
//         </>
//     );
// }

// export default ListeVoyages;

import React from 'react';
import Voyage from "./Voyage";
import {useSelector} from "react-redux";

function ListeVoyages() {
    const voyages = useSelector(state => state)
    return (
        <>
            <h1>Accueil</h1>
            <div style={{display: 'flex',gap: 50}}>
                {voyages.map((voyage, key) =>
                <Voyage key={key} voyage={{...voyage,key}}/>)}</div>
        </>
    );
}

export default ListeVoyages;

