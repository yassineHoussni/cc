import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name:"users",
    initialState:{
        users:[]
    },
    reducers:{
        addUser:(state,action)=>{
            state.users.push(action.payload)
        },
        SupprimerUser:(state,action)=>{
           state.users =  state.users.filter(item => item.id != action.payload)
        },
        UpdateUser:(state,action)=>{
            const { id, nom, email } = action.payload;
           state.users =   state.users.map(item => item.id == id ? {...item,nom,email}: item)
        }
    }
})
export const  {addUser,SupprimerUser,UpdateUser} = UserSlice.actions
export default UserSlice.reducer