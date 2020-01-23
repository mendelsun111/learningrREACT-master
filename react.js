import React from "react"
import ReactDOM from "react-dom"


//jsx =javascript rendition of html
ReactDOM.render(<div><h1>Hello World!</h1><p>This is a paragraph</p></div>, document.getElementById("root"));

//render unordered list

//import React from "react";
//import ReactDOM from "react-dom"

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

// Objectives:
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
    // a. An h1 with your name
    // b. A paragraph with a little blurb about yourself
    // c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// 3. Render an instance of that functional component to the browser
// Extra challenge: learn on your own (Google!) how you can add some style to your page.
// (We will also cover this in an upcoming lesson).

//import React from "react"
//import ReactDOM from "react-dom"

function MyInfo(){
  return <div>
    <h1> mendel </h1>
    <p> my name is mendel, i am going to be the top at whatever i want to do</p>
    <ol>
    <li>Korea</li>
    <li>China</li>
    <li>Japan</li>
    </ol>
   </div> 
}

ReactDOM.render(<MyInfo/>,document.getElementById("root"));