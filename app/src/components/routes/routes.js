import React, { Component } from "react";

import Game from "../gameLife";
import HomePage from "../HomePage";
import Rules from "../Rules";

import { Router, Route, Switch } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/game" component={Game} />
          <Route path='/rules' component={Rules} />
        </Switch>
      </div>
    );
  }
}

export default Routes