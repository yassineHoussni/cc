import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getProducts = createAsyncThunk("products/getProducts",async () =>{
    return fetch("https://fakestoreapi.com/products").then(res=> res.json())
})
const initialState = []
export const apiSlice = createSlice({
    name:"data",
    initialState,
    extraReducers:{
        [getProducts.fulfilled]:(state,action)=>{
            state.push(...action.payload)
        }
    },
    reducers:{
        add:(state,action)=>{
            return[...state,action.payload]
        },
        remove:(state,action)=>{
            state.splice(state.findIndex(item => item.id == action.payload),1)
        },
        edit:(state,action)=>{
            const {produitId,category,title,image,price} = action.payload
            return state.map(item => item.id == produitId ? {...item,category,title,image,price}:item)   
        }
    }
})
export const {add,remove,edit} = apiSlice.actions
export default apiSlice.reducer