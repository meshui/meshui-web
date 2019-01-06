import React, { Fragment } from 'react'

import { NavLink } from "react-router-dom"
import Button from '@material-ui/core/Button'

const navigation = (props) => (
  <Fragment>
   <NavLink to="/apps">
      <Button color="inherit">Apps</Button>
    </NavLink>

    <NavLink to="/documentation">
      <Button color="inherit">Documentation</Button>
    </NavLink>

    { props.isAuthenticated 
      ? (
        <Fragment>
          <NavLink to="/logout">
            <Button color="inherit">Logout</Button>
          </NavLink>
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

export default navigation
