import React, { Component} from 'react';
import { connect } from 'react-redux'

import PropTypes from 'prop-types';
import classNames from 'classnames';

import { NavLink } from "react-router-dom";

import Navigation from './Navigation/Navigation'

import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import Sidebar from '../Sidebar/Sidebar';
import * as actions from '../../redux/actions/index'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  openGroups: false,
  openOffice: false,
  openMeetingRooms: false,
  openTimeTracking: false,
  openLaboratory: false,

  grow: {
    flexGrow: 1,
  },

  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  menuIcon: {
    margin: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  badge: {
    top: 1,
    right: -15,
   
  },
  badgeList: {
    top: -12,
    right: -30,
  },
  toolsInfo: {
    marginTop: '10px',
    width: '100%',
    textAlign: 'center'
  },
});

class Header extends Component {
  state = {
    open: false,
    showSidebar: false,
  };

  handleSidebarOpen = () => {
    this.setState({ showSidebar: true })
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleGroupsClick = () => {
    this.setState(state => ({ openGroups: !state.openGroups }));
  };
  
  sidebarClosedHandler = () => {
    this.setState({showSidebar: false})
  }

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className="header"
        >
          <Toolbar disableGutters={!open}>
            {this.props.isAuthenticated
              ? (
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleSidebarOpen}
                  className={classNames(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
              ) : (null)
            }
            
            <NavLink to="/" className="logo">
              <Typography variant="h6" color="inherit" noWrap>
                Meshui
              </Typography>
            </NavLink>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              
            </Typography>
            
            {/* <Navigation isAuthenticated={props.isAuth} /> */}
            <Navigation isAuthenticated={false} />

          </Toolbar>
        </AppBar>
        <Sidebar open={this.state.showSidebar} closed={this.sidebarClosedHandler} />
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          
        </main>
      </div>
    );
  }
}

// Header.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired,
// };

// export default withStyles(styles, { withTheme: true })(Header);

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


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Header))