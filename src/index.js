import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListStagiaire from "./Efm_Tanger/ListStagiaire";
import DetailStagiaire from "./Efm_Tanger/DetailStagiaire";
import AddStagiaire from "./Efm_Tanger/AddStagiaire";
import Header from "./Efm_Tanger/Header/Header";


const initialState = [
    {
        image: 'https://randomuser.me/api/portraits/men/46.jpg',
        nom: 'Zaid',
        prenom: 'Riyad',
        filiere: 'TDI',
    },
    {
        image: 'https://randomuser.me/api/portraits/men/41.jpg',
        nom: 'Jamaoui',
        prenom: 'Mouad',
        filiere: 'TDI',
    },

    {
        image: 'https://randomuser.me/api/portraits/men/45.jpg',
        nom: 'Jamaoui',
        prenom: 'Aymane',
        filiere: 'TDI',
    },
    {
        image: 'https://randomuser.me/api/portraits/women/45.jpg',
        nom: 'Saidi',
        prenom: 'Imane',
        filiere: 'TDI',
    },
    {
        image: 'https://randomuser.me/api/portraits/women/40.jpg',
        nom: 'Zerhouni',
        prenom: 'wiam',
        filiere: 'TDI',
    },
]
const stagiaireReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_stagiaire':
            return [...state, action.payload]
        default:
            return state
    }
}
const store = createStore(stagiaireReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<ListStagiaire/>}/>
                    <Route path={'/:nom'} element={<DetailStagiaire/>}/>
                    <Route path={'/add'} element={<AddStagiaire/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




// projet

// import React from 'react';
// import ReactDOM from 'react-dom/client';


// import { Provider } from 'react-redux';


// import {store} from './shop/redux/Store';
// import App from "./shop/api/App"
 

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>
// );

// crud

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from'./App';
// import { Provider } from 'react-redux';
// import { legacy_createStore } from 'redux';
// import Reducer from './CrudRedux/Reducer';
// const store = legacy_createStore(Reducer)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//          <Provider store={store}>
//              <App/>
//          </Provider>
//     );


// un seul interface

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import {legacy_createStore} from 'redux';
// import reducer from './Interface/Reducer';
// const store = legacy_createStore(reducer)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// rabat sale

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import ListeVoyages from "./Efm_Rabat_Sale/ListeVoyages";
// import DetailVoyage from "./Efm_Rabat_Sale/DetailVoyage";
// import {legacy_createStore} from "redux";
// import {Provider} from "react-redux";

// const voyages = [
//     {
//         ville: 'Marrakech',
//         prix: 2000,
//         image: 'https://visitmarrakech.com/wp-content/uploads/2023/03/10.jpg'
//     },
//     {
//         ville: 'Rabat',
//         prix: 900,
//         image: 'https://www.visitmorocco.com/sites/default/files/styles/thumbnail_destination_background_top5/public/thumbnails/image/tour-hassan-rabat-morocco-by-migel.jpg?itok=YP8GLwSi'
//     },
//     {
//         ville: 'Casablanca',
//         prix: 700,
//         image: 'https://mobile.ledesk.ma/wp-content/uploads/2022/08/Casablanca-Imaginium-ONMT-83.jpg',
//     }
// ]

// const reducer = (state = voyages, action) => {
//     return state
// }
// const store = legacy_createStore(reducer)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path={'/'} element={<ListeVoyages/>}/>
//                     <Route path={'/voyage/:id'} element={<DetailVoyage/>}/>
//                 </Routes>
//             </BrowserRouter>
//         </Provider>
//     </React.StrictMode>
// );

// beni mellal khenifra

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>
// );

//incrementer
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { legacy_createStore } from 'redux';
// import reducer from './Config/Reducer';
// const store = legacy_createStore(reducer)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



//post
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import App from './CrudReduxToolkit/App';
// import store from './CrudReduxToolkit/redux/Store'; // Adjust the path as necessary
// import './index.css'; // Adjust if you have a global CSS file

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
