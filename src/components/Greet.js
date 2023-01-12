import React from "react";

let Greet = (props) => {
    return (
    <div>
        <h1>Hello {props.name} from {props.city}</h1>
        <p>{props.children}</p>
    </div>    
    
    )
}

export default Greet