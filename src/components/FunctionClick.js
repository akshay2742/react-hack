import React from 'react'

function FunctionClick() {
    const show = () => {
        console.log("Button Clicked")
    }
  return (
    <div>
        <button onClick={show}>Click Me</button>
    </div>
  )
}

export default FunctionClick