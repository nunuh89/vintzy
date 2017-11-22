import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import NavBarContainer from './navbar/navbar_container';

const App = () => (
  <div>
    <h1>Vintzy</h1>
    <NavBarContainer />

  </div>
);

export default App;
