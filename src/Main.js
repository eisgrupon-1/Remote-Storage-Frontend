import React from 'react';
import Home from './home/Home';
import Header from './Header';
import Upload from "./upload/Upload";
import FileList from "./file-list/FileList";
import ReactDOM from 'react-dom';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function Main() {
  return (
    ReactDOM.render(
      <Router>
         <div> 
          <div>   
           <Header />
          </div>             
              <div className="App">   
                <div className="Card">   
                <Child />
              </div>
           </div>
         </div> 
      </Router>
  , document.getElementById('root')));
}

const Child = () => (
  <Switch>
      <Route exact path="/main" component={Home} />
      <Route exact path="/files" component={FileList} />
      <Route path="/upload-files" component={Upload} />
  </Switch>
);

export default Main;
