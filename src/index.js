import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
// eslint-disable-next-line
import Style from "./style.css"
import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
</BrowserRouter>,
document.getElementById("root"))