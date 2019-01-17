import React, { Component } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { NavLink, Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "containers/Header/Header"
import GridContainer from "components/UI/Grid/GridContainer";
import GridItem from "components/UI/Grid/GridItem";
import Button from "components/UI/CustomButtons/Button";
import Parallax from "components/UI/Parallax/Parallax";

// sections for this page
import HeaderLinks from "containers/Header/HeaderLinks"

import componentsStyle from "assets/jss/meshui/views/components";

class Apps extends Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Meshui"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Apps.</h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          List
        </div>
      </div>
    )
  }
}

export default withStyles(componentsStyle)(Apps);
