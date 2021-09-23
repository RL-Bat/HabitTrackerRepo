import React, { Component } from "react";
import MainContainer from "./containers/MainContainer.jsx";
import "./styles/style.css";
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MainContainer />
      </div>
    );
  }
}

export default App;
