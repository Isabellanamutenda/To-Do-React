import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./components/functionBased/TodoContainer"
import { BrowserRouter } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);