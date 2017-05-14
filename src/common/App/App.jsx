import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Home from "../Home/Home";
import Posts from "../../posts/Posts/Posts";
import NotFound from "../NotFound/NotFound";
import RedirectWithStatus from "../RedirectWithStatus/RedirectWithStatus";

const App = () => (
  <div>
    <Navigation />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={Posts} />
      <RedirectWithStatus
        status={301}
        from={"/home"}
        to={"/"}
      />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
