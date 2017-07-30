import React, { Component } from "react";

import cls from "./App.css";
import List from "../List/List";

import Parent from "../Parent";

class App extends Component {
  state = {
    programmers: [
      "BrendanEich",
      "douglascrockford",
      "jeresig",
    ],
  };

  render() {
    return (
      <div>
        <h1 className={cls.title}>JavaScript Programmers</h1>
        <ul>
          <List items={this.state.programmers} />
        </ul>
        <Parent />
      </div>
    );
  }
}

export default App;
