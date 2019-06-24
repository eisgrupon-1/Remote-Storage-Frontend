import React, { Component } from 'react';
import Home from './home/Home';
import Header from './Header';
import Upload from "./upload/Upload";
import FileList from "./file-list/FileList";
import ReactDOM from 'react-dom';
import Login from './Login';
import {withRouter} from 'react-router'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props);

 }

render() {
  return (
      <Router>
         <div> 
          <div>   
           <Header history={this.props.history} />
          </div>             
              <div className="App">   
                <div className="Card">   
                <Switch>
                  <Route exact path="/main" component={Home} />
                  <Route exact path="/files/:name?" component={FileList} />
                  <Route exact path="/upload-files" component={Upload} />
               </Switch>
              </div>
           </div>
         </div> 
      </Router>
  );
}

}



export default withRouter(Main);
