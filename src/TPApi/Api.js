import { useEffect, useState } from 'react';
function Api() {
    const[utilisateurs,setUtilisateurs] = useState([])
    const [search,setSearch] = useState("")
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then
        ((res)=>{return res.json()}).then((data)=>{setUtilisateurs(data);console.log(utilisateurs)})
    },[])
    
      const fil = utilisateurs.filter(item=>item.id ===parseInt(search))

      
      return (
        <>
            <form>
                donner le id:
                <input type="text" name='search' onChange={(e)=>setSearch(e.target.value)}/>
            </form>
            <div>
                <ul>
                 {fil.length>0?fil.map(item=>(
                 <div key={item.id}>
                        <p>id:{item.id}</p>
                        <p>nom:{item.name}</p>
                        <p>email:{item.email}</p>
                        <p>cite web:{item.website}</p>
                        <p>rue:{item.address.street}</p>
                        
                    </div>
                 )
                    
                    ):<p>error</p>}
                    <li>
                        
                    </li>

                </ul>
            </div>
            </>
      );

 }
export default Api;