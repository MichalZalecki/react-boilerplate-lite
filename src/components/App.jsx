import React from "react";
import cls from "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Hello World!",
    };
  }

  render() {
    return (
      <div>
        <h1 className={cls.title}>{this.state.text}</h1>
      </div>
    );
  }
}

export default App;
