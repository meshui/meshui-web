import React, { Component } from 'react';
import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './views/Homepage/Homepage'
import LogIn from './views/LogInView/LogInView'
import SignUp from './views/SignUpView/SignUpView'
import error from './views/Error/Error'
import AppsView from './views/Apps/Apps'

import "./assets/css/sass/themes/meshui.light.blue.scss";

class App extends Component {
  render() {
    return (
      <Router>
				<Switch>
					<Route path="/" exact component={Homepage} />
					<Route path="/api" component={Homepage} />
					<Route path="/login" component={LogIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/apps" component={AppsView} />
          <Route path={`/error`} component={error} />
          <Redirect to="/error" />
				</Switch>
			</Router>
    );
    
    // return (
    //   <div className="App">
    //     <Homepage />
    //   </div>
    // );
  }
}

export default App;
