import React from "react"
import ReactDOM from "react-dom"


//jsx =javascript rendition of html
ReactDOM.render(<div><h1>Hello World!</h1><p>This is a paragraph</p></div>, document.getElementById("root"));

//render unordered list

import React from "react";
import ReactDOM from "react-dom"

//capital letter for first letter if its a component
function myApp() {
    return (
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)

}

ReactDOM.render(<MyApp/>
, document.getElementById("root"))