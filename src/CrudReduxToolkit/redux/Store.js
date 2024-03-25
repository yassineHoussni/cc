import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice"
import PostReducer from "./PostSlice"
 const Store = configureStore({
    reducer:{
        posts:PostReducer,
        users:UserReducer,
    }
 })
 export default Store

