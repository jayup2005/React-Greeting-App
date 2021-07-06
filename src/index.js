import React from "react"
import reactDom from "react-dom"
import "./index.css"

let date = new Date()
let h = date.getHours()
let greet = ''
let gre = {};
if(h > 1 && h < 12){
    greet = "Good Morning";
    gre.color = "#33cc33"
}else if(h > 12 && h < 17){
    greet = "Good Afternoon";
    gre.color = "#ffcc00"
}else if( h > 17 && h < 20){
    greet = "Good Evening"
    gre.color = "#0066ff"
}else{
    greet = "Good Night";
    gre.color="black"
}

reactDom.render(

    <>
    <div className="div"> 
    <h1 className="heading">Hello Sir, <span style={gre}>{greet}</span></h1>

   
    </div>
    <p className="credit">Created By Jay Patel</p>
    </>,
    document.getElementById('root')
);