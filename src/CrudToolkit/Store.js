import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice"
 const Store = configureStore({
    reducer:{
        users:UserReducer,
    }
 })
 export default Store

