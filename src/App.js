import React from "react";
import Weather from "./Weather";
import "./styles.css";
export default function App(){
    return (<div className="App">
        <div className="container">
        <Weather  defaultCity="New York"/>
        <footer>
        This project was coded by Mozhdeh Matalebi and is {" "} <a href="https://github.com/GildaMti/weatherappreact" target="_blank">open-sourced on Github </a>
        </footer>
    </div>
    </div>
);
}


  
