// HOW TO CREATE A COMPONENT

// 1. IMPORT THE REACT AND REACTDOM LIBRARIES
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 2. GET A REFERENCE TO THE DIV WITH ID ROOT
const el = document.querySelector("#root");

// 3. TELL REACT TO TAKE CONTROL OF THAT ELEMENT
const root = ReactDOM.createRoot(el);

// 4. SHOW THE COMPONENT ON SCREEN
root.render(<App />);
