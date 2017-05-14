import React from "react";
import { Route } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Home from "../Home/Home";
import Posts from "../../posts/Posts/Posts";

const App = () => (
  <div>
    <Navigation />

    <Route exact path="/" component={Home} />
    <Route path="/posts" component={Posts} />
  </div>
);

export default App;
