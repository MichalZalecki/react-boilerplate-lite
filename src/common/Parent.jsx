import React, { Component } from "react";

import Child from "./Child";

class Parent extends Component {
  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return (
        <p>Something went terribly wrong when rendering {this.constructor.name} component!</p>
      );
    }

    return (
      <Child />
    );
  }
}

export default Parent;
