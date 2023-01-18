import React, { Component } from 'react'

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={() => {this.props.childHandler("Child")}}>Click</button>
      </div>
    )
  }
}

export default ChildComponent