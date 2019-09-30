import * as React from 'react';
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom';
import Home from "../containers/Home";
import NoftFound from "../containers/NotFound";

export default class AppRouter extends React.Component {
  public render() {
    return(
      <HashRouter>
        <Switch>
          <Route path="/" exact={true} component={ Home } />

          <Route path="/notFound" component={NoftFound} />
          <Redirect to="/notFound" />
        </Switch>
      </HashRouter>
    )
  }
}