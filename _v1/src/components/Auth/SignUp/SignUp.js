import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect, NavLink } from "react-router-dom"

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

import { updateObject, checkValidity } from '../../../utils/form'

var firebase = require("firebase/app")
var firebaseui = require('firebaseui')

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SignUp extends Component {
  state = {
    isSignUp: false,
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email'
        },
        // value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Your Password'
        },
        // value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      },
    }
  }

  


  // Change input values
  inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(this.state.controls, 
      {
        [controlName]: updateObject(this.state.controls[controlName],
          {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
            touched: true
          }) 
      }
    )
    this.setState({controls: updatedControls})
  }
  
  // Submit form
  submitHandler = (event) => {
    event.preventDefault()

    var email = this.state.controls.email.value
    var password = this.state.controls.password.value
    console.log(email, password)

    this.setState(prevState => {
      return {isSignUp: !prevState.isSignUp}
    })

    // return <Redirect to="/somewhere/else" />
    // this.context.router.history.push(`/target`)
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
    const { classes } = this.props

    let authRedirect = null
    //Redirect if signup
    if (this.state.isSignUp) {
      authRedirect = <Redirect to="/login" />
    }

    return (
      <main className={classes.main}>
        {authRedirect}
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} onSubmit={this.submitHandler}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input 
                id="email" 
                name="email" 
                autoComplete="email" 
                // value={this.state.controls.email.value}
                autoFocus 
                onChange={(event) => this.inputChangedHandler(event, 'email')}
                />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input 
                name="password"
                type="password"
                id="password"
                // value={this.state.controls.password.value}
                autoComplete="current-password"
                onChange={(event) => this.inputChangedHandler(event, 'password')}
                />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
          <Divider light />
          <p>
            By signing up, I agree to the Privacy Policy and <NavLink to="/terms-of-service">Terms of Service.</NavLink>
          </p>
          <p>
            Or, sign up with 
            <Button
              type="button"
              color="primary"
              onClick={this.googleSignUpHandler}
            >Google
            </Button>
          </p>
          You already have an account ?
          <NavLink to="/login">
            <Button color="inherit">Log In</Button>
          </NavLink>
          
        </Paper>
      </main>
    )
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);