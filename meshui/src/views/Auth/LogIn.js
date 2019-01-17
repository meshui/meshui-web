import React from "react"
// @material-ui/core components
import { Redirect, NavLink } from "react-router-dom"

import withStyles from "@material-ui/core/styles/withStyles"
import InputAdornment from "@material-ui/core/InputAdornment"
import Icon from "@material-ui/core/Icon"
// @material-ui/icons
import Email from "@material-ui/icons/Email"
import People from "@material-ui/icons/People"
// core components
import GridContainer from "components/UI/Grid/GridContainer.js"
import GridItem from "components/UI/Grid/GridItem.js"
import Button from "components/UI/CustomButtons/Button.js"
import Card from "components/UI/Card/Card.js"
import CardBody from "components/UI/Card/CardBody.js"
import CardHeader from "components/UI/Card/CardHeader.js"
import CardFooter from "components/UI/Card/CardFooter.js"
import CustomInput from "components/UI/CustomInput/CustomInput.js"

import Footer from "containers/Footer/Footer.js"

import loginPageStyle from "assets/jss/meshui/views/logIn.js"

import image from "assets/img/backgrounds/applause-arena-audience.jpg"


var firebase = require("firebase/app")
var firebaseui = require('firebaseui')

class LogIn extends React.Component {
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
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }


  googleSignUpHandler() {
    var config = {
      apiKey: "AIzaSyAg86MBwhXGz-7ID4bPiDyfUELYRBcaAzs",
      authDomain: "meshui-dev.firebaseapp.com",
      databaseURL: "https://meshui-dev.firebaseio.com",
      projectId: "meshui-dev",
      storageBucket: "meshui-dev.appspot.com",
      messagingSenderId: "813157211196"
    };

    // Initialize firebase
    var app = firebase.initializeApp(config)
    // Initialize provider
    var provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
    // Sign in
    app.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log("Connected")
      console.log(token)
      console.log(user)
      console.log(user.displayName)
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential
      console.log("Connection error")
      console.log(errorCode, errorMessage)
      console.log(error)
      console.log(email)
      console.log(credential)
    })

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
              <Card>
                <form className={classes.form}>
                  <CardHeader color="warning" className={classes.cardHeader}>
                    <h4>Log In</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="info"
                        onClick={this.googleSignUpHandler}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>Or</p>
                  <CardBody>
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      Log In
                    </Button>
                  </CardFooter>
                </form>
                <p>
                  You don't have an account ? {" "}
                  <NavLink to="/signup">
                    Sign Up
                  </NavLink>
                </p>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LogIn);
