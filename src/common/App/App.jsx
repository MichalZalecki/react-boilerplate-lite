import { hot } from "react-hot-loader";
import React, { Component } from "react";

import cls from "./App.css";

class App extends Component {
  state = {
    text: "Hello World!",
  };

  render() {
    return (
      <div>
        <h1 className={cls.title}>{this.state.text}</h1>
      </div>
    );
  }
}

export default hot(module)(App);
