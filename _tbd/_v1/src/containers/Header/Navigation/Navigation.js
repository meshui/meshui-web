import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'


import { NavLink } from "react-router-dom"
import Button from '@material-ui/core/Button'

import IconButton from '@material-ui/core/IconButton';


import AccountCircle from '@material-ui/icons/AccountCircle';
import * as actions from '../../../redux/actions/index'


import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Navigation extends Component {

  state = {
    open: false,
    anchorEl: null
  };

  handleClick = (event) => {
    this.setState({ 
      open: !this.state.open,
      anchorEl: event.currentTarget
    })
  }

  handleClose = () => {
    this.setState({ open: !this.state.open })
  }

  render() {

    return (
      <Fragment>
      <NavLink to="/apps">
          <Button color="inherit">Apps</Button>
        </NavLink>

        <NavLink to="/documentation">
          <Button color="inherit">Documentation</Button>
        </NavLink>

        { this.props.isAuthenticated 
          ? (
            <Fragment>
              <IconButton
                // aria-owns={anchorEl ? 'simple-menu' : undefined}
                // aria-haspopup="true"
                onClick={this.handleClick}
                color="inherit"
              >
                <AccountCircle />
                <ExpandMoreIcon />
              </IconButton>
              <Menu id="simple-menu"
                anchorEl={this.state.anchorEl}
                open={this.state.open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <Divider />
                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
              </Menu>
            </Fragment>
          ) : (
            <Fragment>
              <NavLink to="/signup">
                <Button color="inherit">Sign Up</Button>
              </NavLink>
              <NavLink to="/login">
                <Button color="inherit">Log In</Button>
              </NavLink>
            </Fragment>
            )
          }
        
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
  }
}


// export default navigation

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)