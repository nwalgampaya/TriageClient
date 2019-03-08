import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import "./styles/styles.scss";
import ProneApp from "./components/ProneApp";
import Example from "./components/steps/MultiSelect";
import Form from "./components/steps/DynamicBox"
import Colonoscopy from"../src/components/Colonoscopy.js"
// import App from"./components/App"
const template = (
  // <ProneApp/>
  // <Form/>
  // <Example/>
  <Colonoscopy/>
  // <App/>
);

ReactDOM.render(template, document.getElementById("app"));
