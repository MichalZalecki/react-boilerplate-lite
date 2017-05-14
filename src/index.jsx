import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";

import App from "./common/App/App";

function render(Root) {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
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
