import React from "react";
import { MultiStepForm } from "./components/MultiStepForm";
import "./App.css";
import logo from "./logo.svg";


function App() {
  return (
    <div className="container">
       <img src={logo} alt="Logo" className="logo" />
      <MultiStepForm />
    </div>
  );
}

export default App;
