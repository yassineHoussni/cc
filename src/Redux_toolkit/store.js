import { legacy_createStore } from "redux";
import CounterReducer from "./CounterSlice"
export const store = legacy_createStore(CounterReducer)