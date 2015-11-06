import React    from "react";
import template from "./App.jsx";

class App extends React.Component {
  render() {
    return template.call(this);
  }
}

export default App;
