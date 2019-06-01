import React from 'react';
import Login from './Login';
import Home from './home/Home';
import Header from './Header';
import Upload from "./upload/Upload";
import FileList from "./file-list/FileList";
import ReactDOM from 'react-dom';
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
         <div> 
          <div>   
           <Header />
          </div>             
              <div className="App">   
                <div className="Card">   
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/files" component={FileList} />
                    <Route path="/upload-files" component={Upload} />
                  </Switch>
              </div>
           </div>
         </div> 
      </Router>
  , document.getElementById('root')));
}


export default App;
