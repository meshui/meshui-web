import React, { Component } from 'react'
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

// Get route list
import indexRoutes from "./routes/index.js";

// Get route Layout
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <AppRoute path={prop.path} key={key} layout={prop.layout} component={prop.component} />;
          })}
          <Redirect to="/error" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App