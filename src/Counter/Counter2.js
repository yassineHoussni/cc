import { render } from "@testing-library/react";
import { Component } from "react";
class Counter2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            Counter: 0,
            date : undefined
     }
     render()  
        return( 
            <div>
                il ya {this.state.Counter} seconds

            </div>
         )
      }
    }
    

export default Counter2 ;