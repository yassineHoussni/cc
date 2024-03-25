import { createSlice } from "@reduxjs/toolkit";

const StgSlice = createSlice({
    name:"stg",
    initialState:{
        stg:[]
    },
    reducers:{
        ajouteStagiaire:(state,action)=>{
            state.stg.push(action.payload)
        }
    }
})
export const {ajouteStagiaire} = StgSlice.actions
export default StgSlice.reducer