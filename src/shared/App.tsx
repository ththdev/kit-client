import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import LoginScreen from '../screens/LoginScreen'
import KitContainer from '../containers/KitContainer'

const App:React.FC = () => { 
  return (
    <BrowserRouter>
      <Route exact path="/" component={LoginScreen} />
      <Route path="/kit" component={KitContainer} />
    </BrowserRouter>
  );
}

export default App
