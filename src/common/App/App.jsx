import { hot } from "react-hot-loader";
import React, { Component } from "react";

import cls from "./App.css";


export class App extends Component {
  state = {
    text: "Hello, World!",
  };

  bang = () => {
    this.setState(({ text }) => ({ text: `${text}!` }));
  };

  render() {
    const { text } = this.state;

    return (
      <div>
        <h1 className={cls.title}>
          {text}
        </h1>
        <button onClick={this.bang} id="bang" type="button">
          Bang!
        </button>
      </div>
    );
  }
}

export default hot(module)(App);
