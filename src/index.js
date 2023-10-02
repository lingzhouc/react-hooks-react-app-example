import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(
    // react component to render
    <App />, 
    
    // where to render react component
        // convention = div w/ ID of root
    document.getElementById("root")
);
