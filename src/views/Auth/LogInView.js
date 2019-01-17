import React, { Component } from "react"
// @material-ui/core components
import { Redirect, NavLink } from "react-router-dom"

import withStyles from "@material-ui/core/styles/withStyles"
import InputAdornment from "@material-ui/core/InputAdornment"
import Icon from "@material-ui/core/Icon"
// @material-ui/icons
import Email from "@material-ui/icons/Email"
import People from "@material-ui/icons/People"
// core components
import GridContainer from "components/UI/Grid/GridContainer"
import GridItem from "components/UI/Grid/GridItem"
import Button from "components/UI/CustomButtons/Button"
import Card from "components/UI/Card/Card"
import CardBody from "components/UI/Card/CardBody"
import CardHeader from "components/UI/Card/CardHeader"
import CardFooter from "components/UI/Card/CardFooter"
import CustomInput from "components/UI/CustomInput/CustomInput"

import Footer from "containers/Footer/Footer"

import LogIn from "components/Auth/LogIn"

import loginPageStyle from "assets/jss/meshui/views/logIn"

import image from "assets/img/backgrounds/applause-arena-audience.jpg"

class LogInView extends Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" })
      }.bind(this),
      700
    )
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <LogIn />
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LogInView);
