import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App.jsx"
import store from './store.js'


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'

// import { App } from './App'
// import createStore from './createReduxStore'

// const store = createStore()

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )