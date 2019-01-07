import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../redux/actions/index'


import { Redirect, NavLink } from "react-router-dom";

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

// import classes from './Auth.css'  
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
  }
});

class SignIn extends Component {

  state = {
    isSignUp: false
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.onAuth("hello", "hello", true)

    this.setState(prevState => {
      return {isSignUp: !prevState.isSignUp}
    })
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
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to="/" />
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
            Log In
          </Typography>
          <form onSubmit={this.submitHandler} className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>
          </form>
          <Divider light />
          <p>
            Or, sign up with 
            <Button
              type="button"
              color="primary"
              onClick={this.googleSignUpHandler}
            >Google
            </Button>
          </p>
          You don't have an account ?
          <NavLink to="/signup">
            <Button color="inherit">Sign Up</Button>
          </NavLink>
        </Paper>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignIn))