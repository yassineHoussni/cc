import { useDispatch, useSelector } from "react-redux";
import { decrementer, incrementer } from "./CounterSlice";

export default function App(){
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
    return(
        <div>
            {count}
            <button onClick={()=>dispatch(incrementer())}>incrementer</button>
            <button onClick={()=>dispatch(decrementer())}>derementer</button>
        </div>
    )
}