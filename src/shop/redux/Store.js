import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./apiSlice"
import cartReducer from "./CartSlice"
import ListReducer from "./ListSlice"
export const store = configureStore({
    reducer:{
        products:dataReducer,
        cart:cartReducer,
        list:ListReducer,
    }
})