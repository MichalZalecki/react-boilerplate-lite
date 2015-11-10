import React    from "react";
import template from "./App.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Hello World!",
    };
  }
  render() {
    return template.call(this);
  }
}

export default App;
