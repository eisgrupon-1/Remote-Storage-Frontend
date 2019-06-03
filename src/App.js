import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Main from './Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    ReactDOM.render(
      <Router>
           <Root />
      </Router>
  , document.getElementById('root')));
}

const Root = () => (
  <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/main" component={Main} />
  </Switch>
);

export default App;
