import React from "react"
import  ReactDOM  from "react-dom/client"

const heading = <h1>This is React Element</h1>

const Fc = () =>{
    return (
        <div> 
        {heading}
        {7+9}
        <h2>This is functional component. </h2>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Fc/>)