import { createSlice } from "@reduxjs/toolkit";

export const ListSlice = createSlice({
    name:"save",
    initialState:[],
    reducers:{
        save: (state, action) => {
            const uniqueSave = state.findIndex(
              (item) => item.id == action.payload.id
            );
            console.log(uniqueSave)
            if (uniqueSave !== -1) {

            } else {
              state.push(action.payload);
            }
          },
          removeSave: (state, action) => {
            state.splice(
              state.findIndex((item) => item.id == action.payload),
              1
            );
          },
        },  
})
export default ListSlice.reducer
export const  {save,removeSave} = ListSlice.actions