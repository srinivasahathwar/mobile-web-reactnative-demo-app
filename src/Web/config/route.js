import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import routeNavigators from '../constants/routeNavigators';

const RouteConfig = () => {
  return (
    <Router hashType="slash">
      <Switch>
        {routeNavigators.map((prop, key) => {
          return (
            <Route
              path={prop.path}
              name={prop.name}
              component={prop.component}
              key={key}
              exact
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default RouteConfig;
