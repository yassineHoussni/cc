

// efm tanger

import logo from './logo.svg';
import ListStagiaire from "./Efm_Tanger/ListStagiaire";

function App() {
  return (
    <div className="App">
        <ListStagiaire/>
    </div>
  );
}

export default App;



// efm rabat 
// import ListeVoyages from "./Efm_Rabat_Sale/ListeVoyages";

// function App() {

//     return (
//         <div className="App">
//             <ListeVoyages/>
//         </div>
//     );
// }

// export default App;

//efm bni mellal khenifra

// import Form from "./Efm_Benimellal/Form";
// import LivreList from "./Efm_Benimellal/LivreList";
// import Covid from "./Efm_Benimellal/Covid";
// import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

// function App() {
//     return (
//         <div className="App">
//             <BrowserRouter>
//                 <nav style={{
//                     backgroundColor: 'royalblue',
//                     height: '2rem',
//                     lineHeight: '2rem',
//                     display: 'flex',
//                     gap: '10px'
//                 }}>
//                     <Link to={'/'}>IMC</Link>
//                     <Link to={'livres'}>Livres</Link>
//                     <Link to={'covid'}>Covid</Link>
//                 </nav>
//                 <Routes>
//                     <Route path={'/'} element={<Form/>}/>
//                     <Route path={'covid'} element={<Covid/>}/>
//                     <Route path={'livres'} element={<LivreList/>}/>
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }

// export default App;

// un seul interface


// import './App.css';
// import { useState } from 'react';
// import {useSelector, useDispatch} from 'react-redux'
// import {addUserAction, updateUserAction, deleteUserAction, filterUserAction, clearFilterUserAction} from './Interface/Action'
// function App() {
//   const villes = useSelector(data=>data.villes);
//   const users = useSelector(data=>data.users);
//   const usersFilter = useSelector(data=>data.usersFilter);
//   const listeusersmap = usersFilter ? usersFilter : users; 
//   const indexUser = users.length;
//   const [id, setId] = useState("");
//   const [nom, setNom] = useState("");
//   const [prenom, setPrenom] = useState("");
//   const [ville, setVille] = useState(1);
//   const [villeFilter, setVilleFilter] = useState(1);
//   const dispatch = useDispatch()
//   const handleEnregistrer = () => {
//     dispatch(addUserAction({ id:indexUser+1, nom:nom, prenom:prenom, ville:parseInt(ville) }))
//     handleClear()
//   }
//   const handleClear = () => {
//     setNom("")
//     setPrenom("")
//     setVille(1)
//   }
//   const handleRemplirForm = (id) => {
//     const user = users.find((u)=>u.id===parseInt(id))
//     setId(id)
//     setNom(user.nom)
//     setPrenom(user.prenom)
//     setVille(parseInt(user.ville))
//   }
//   const handleModifier = () => {
//     dispatch(updateUserAction({ id:id, nom:nom, prenom:prenom, ville:ville }))
//     handleClear()
//     setId("")
//   }
//   const handleDelete = (id) => {
//     dispatch(deleteUserAction(id))
//   }
//   const handleFilter = () => {
//     dispatch(filterUserAction(villeFilter))
//   }
//   const handleFilterClear = () => {
//     dispatch(clearFilterUserAction(villeFilter))
//   }
//   return (
//     <div style={{paddingLeft:40}}>
//       <h1>CRUD REACT-REDUX Example 2</h1>
//       <div>
//         <label>Nom</label>
//         <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} />
//         <label>Prénom</label>
//         <input type="text" value={prenom} onChange={(e)=>setPrenom(e.target.value)} />
//         <label>Ville</label>
//         <select value={ville} onChange={(e)=>setVille(e.target.value)}>
//           {villes.map((ville, i)=><option key={i} value={ville.id}>{ville.nom}</option>)}
//         </select>
//         {id?<button onClick={()=>handleModifier()}>Modifier</button>
//         :<button onClick={()=>handleEnregistrer()}>Enregister</button>}
//         <button onClick={()=>handleClear()}>Clear</button>
//       </div>
//       <div>
//         <label>Filtrer par ville</label>
//         <select value={villeFilter} onChange={(e)=>setVilleFilter(e.target.value)}>
//           {villes.map((ville, i)=><option key={i} value={ville.id}>{ville.nom}</option>)}
//         </select>
//         <button onClick={()=>handleFilter()}>Filtrer</button>
//         <button onClick={()=>handleFilterClear()}>Clear</button>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <td>Id</td>
//             <td>Nom</td>
//             <td>Prenom</td>
//             <td>Ville</td>
//             <td>Actions</td>
//           </tr>
//         </thead>
//         <tbody>
//           {listeusersmap.map((user,index)=> {
//             const ville = villes.find((v)=>v.id===parseInt(user.ville))
//             return (
//               <tr key={index}>
//                 <td>{user.id}</td>
//                 <td>{user.nom}</td>
//                 <td>{user.prenom}</td>
//                 <td>{ville.nom}</td>
//                 <td>
//                   <button onClick={()=>handleRemplirForm(user.id)}>Modifier</button>
//                   <button onClick={()=>handleDelete(user.id)}>Supprimer</button>
//                 </td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;







// link

// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import AddUser from './Composants/AddUser';
// import UpdateUser from './Composants/UpdateUser';
// import UserList from './Composants/UserList';
// function App() {
//   return (
//     <div style={{paddingLeft:40}}>
//       <h1>CRUD REACT-REDUX</h1>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<UserList />} />
//           <Route path='/add-user' element={<AddUser />} />
//           <Route path='/update-user/:id' element={<UpdateUser />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



//incrementer
// import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { Incrementer, Decrementer, Reset } from './Config/Action';
// function App() {
//   const num = useSelector(data => data.num);
//   const dispatch = useDispatch();
//   return (
//     <div className="App">
//       <div>{num}</div>
//       <div>
//         <button onClick={() => dispatch(Incrementer())}>Incrementer</button>
//         <button onClick={() => dispatch(Decrementer())}>Decrementer</button>
//         <button onClick={() => dispatch(Reset())}>Reset</button>
//       </div>
//     </div>
//   );
// }
// export default App;