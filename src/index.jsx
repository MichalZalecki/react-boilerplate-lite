import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./common/App/App";

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
  module.hot.accept("./common/App/App", () => {
    render(App);
  });
}
