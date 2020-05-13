import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import LoginScreen from '../screens/LoginScreen'
import KitContainer from '../containers/KitContainer'
import ProfileContainer from '../containers/ProfileContainer'

const App:React.FC = () => { 
  const token = localStorage.getItem("ACCESS_TOKEN")
  return (
    <BrowserRouter>
      <Route exact path="/" component={LoginScreen} />
      <Route path="/kit" component={KitContainer} />
      <Route path="/profile" component={ProfileContainer} />
    </BrowserRouter>
  );
}

export default App
