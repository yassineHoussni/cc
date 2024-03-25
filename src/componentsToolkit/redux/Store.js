import { legacy_createStore } from "redux";
import stgReducer  from "./StgSlice";

const Store = legacy_createStore(stgReducer)
export default Store