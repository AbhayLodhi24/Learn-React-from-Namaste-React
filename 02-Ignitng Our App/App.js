import React from "react"
import ReactDOM from "react-dom"

const heading1 = React.createElement("p",{id:"title" ,} ,"Hello");
const heading2 = React.createElement("p",{id:"subtitle" ,} ,"World");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading1, heading2]) ;