import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./components/App";

function render(Root) {
  ReactDOM.render(
    <AppContainer>
      <Root />
    </AppContainer>,
    document.getElementById("root"),
  );
}

render(App);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    render(require("./components/App").default);
  });
}
