import React, { Component } from 'react'
import ChildComponent from './ChildComponent'


class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "Parent"
      }
      this.greetHandler = this.greetHandler.bind(this)
    }

    greetHandler(childName){
        console.log(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
    return (
      <div>
        <ChildComponent childHandler={this.greetHandler} />        
      </div>
    )
  }
}

export default ParentComponent