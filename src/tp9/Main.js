import React from "react"
import Navbar from "./Navbar"
function Main(props){
    return(
        <>
        <Navbar/>
            {props.data}
        </>
    )
}
export default Main