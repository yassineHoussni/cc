import { createSlice } from "@reduxjs/toolkit";

 const CounterSlice = createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers :{
        incrementer:(state)=> {
            state.count +=1
        },
        decrementer:(state)=> {
            state.count -=1
        }
    }
 })
 export default CounterSlice.reducer
 export const {incrementer,decrementer} = CounterSlice.actions