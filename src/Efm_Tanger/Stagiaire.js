import React from 'react';
import './stagiaire.css';
import {Link} from "react-router-dom";

const Stagiaire = ({image, nom,prenom,filiere}) => (
    <div className={'container'}>
        <Link to={nom}>
            <img src={image}/>
        </Link>
        <p className={'name'}> {nom}</p>
        <p className={'prenom'}> {prenom}</p>
        <p className={'filiere'}> {filiere}</p>

    </div>
);

export default Stagiaire;