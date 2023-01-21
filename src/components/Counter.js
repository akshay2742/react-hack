import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }

    this.increment = this.increment.bind(this)
  }

  increment(){
    this.setState((prevState)=>({
      count: prevState.count+1
    }),console.log(this.state.count))
  }
  
  render() {
    return (
      <div>
        
        <p>Counter: {this.state.count}</p>
        <button onClick={this.increment}>Increase</button>
      </div>
    )
  }
}

export default Counter