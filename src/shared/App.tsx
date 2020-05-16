import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LoginScreen from '../screens/LoginScreen'
import KitContainer from '../containers/KitContainer'
import ProfileContainer from '../containers/ProfileContainer'

const App:React.FC = () => { 
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={KitContainer} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/profile" component={ProfileContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App
