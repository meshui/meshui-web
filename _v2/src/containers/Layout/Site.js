import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// react components for routing our app without refresh
import { NavLink, Link } from "react-router-dom"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons
// core components
import Header from "components/UI/Header/Header"
import Footer from "components/UI/Footer/Footer.jsx"
// sections for this page
import HeaderLinks from "components/UI/Header/HeaderLinks.jsx"

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Homepage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Meshui"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
          <div>
            Hellozzz
          </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Homepage);
