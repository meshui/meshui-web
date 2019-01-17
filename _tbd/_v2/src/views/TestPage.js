import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { NavLink, Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Site from "containers/Layout/Site";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Apps extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <Site>
        Helllooooo<br/>
        Helllooooo<br/>
        Helllooooo<br/>
        Helllooooo<br/>
        Helllooooo<br/>
        Helllooooo<br/>
        Helllooooo<br/>
        Helllooooo<br/>
      </Site>
    );
  }
}

export default withStyles(componentsStyle)(Apps);
