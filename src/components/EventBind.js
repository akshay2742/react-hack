import React, { Component } from 'react'

class EventBind extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         way1: "Way1",
         way2: "Way2",
         way3: "Way3"
      }

      // this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler = () => {
        this.setState({
            way1: "way1 Goodbye"
        })
    }

    
    render() {
    return (
      <div>
        <h1>{this.state.way1}</h1>
        <h1>{this.state.way2}</h1>
        <h1>{this.state.way3}</h1>
        
        <button onClick={this.changeHandler.bind(this)}>Binding way 1</button> 
        {/* <button onClick={() =>{this.changeHandler()}}>Binding Way 2</button> 
        <button onClick={this.changeHandler}>Binding way 3</button>  */}
      </div>
    )
  }
}

export default EventBind