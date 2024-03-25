import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state = {nb:0}
    }
    incrementer(){
        this.setState({nb:this.state.nb+=1})
    }
    decrementer(){
        if(this.state.nb === 0){
            this.setState({nb:0})
        }
        else{
            this.setState({nb:this.state.nb-=1})
        }
    }
    render(){
        return(
            <div className="text-center">
                <div>
                    <p>{this.state.nb}</p>
                    <button onClick={()=>this.incrementer()}>INCREMENTER</button>
                    <button onClick={()=>this.decrementer()}>DECREMENTER</button>

                </div>
            </div>
        )
    }
}
export default Counter;