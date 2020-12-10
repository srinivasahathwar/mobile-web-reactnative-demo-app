import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import routeNavigators from '../constants/routeNavigators';

const Route = createStackNavigator();
const RouteConfig = () => {
  return (
    <NavigationContainer>
      <Route.Navigator initialRouteName="Login" headerMode="none">
        {routeNavigators.map((prop, key) => {
          return (
            <Route.Screen
              name={prop.name}
              component={prop.component}
              key={key}
            />
          );
        })}
      </Route.Navigator>
    </NavigationContainer>
  );
};

export default RouteConfig;
