import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users:[]
}
export const UserSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        AjouterUser:(state,action)=>{
            state.users.push(action.payload)
        },
        SupprimerUser:(state,action)=>{
           state.users =  state.users.filter(item => item.id != action.payload)
        },
        ModifierUser:(state,action)=>{
            const { id, nom, email } = action.payload;
           state.users =   state.users.map(item => item.id == id ? {...item,nom,email}: item)
        }
    }
})
export const  {AjouterUser,SupprimerUser,ModifierUser} = UserSlice.actions
export default UserSlice.reducer