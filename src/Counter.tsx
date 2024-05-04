import React, { Component } from 'react'; 

interface CounterProps{} // Définir le type pour props

interface CounterState{ // Définir le type pour State
    count : number;
}
class Counter extends Component<CounterProps, CounterState>{
    state : CounterState = {
        count : 0
    }
    increment = ()=>{
        this.setState({ count: this.state.count + 1 }); 
    }
    render(){
        return (
            <div>
                <p>Count: {this.state.count}</p> 
                <button onClick={this.increment}>Increment</button> 
        </div>
        )
        
    }
}
export default Counter;
// import React, { Component } from 'react'; 
// class Counter extends Component { 
// state = {
//  count: 0
//  }; increment = () => {
//  this.setState({ count: this.state.count + 1 }); 
// }; 
// render() { 
// return 
// ( <div> 
// <p>Count: {this.state.count}</p> 
// <button onClick={this.increment}>Increment</button> 
// </div> );
//  }
//  } 
// export default Counter;