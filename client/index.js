import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import axios from 'axios';
import App from "./App.jsx"
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
//import STORE

const store = {};

render(
   <App />,
  document.getElementById('root')
);