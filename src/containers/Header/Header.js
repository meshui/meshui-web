import React from "react";
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'
import * as actions from 'redux/actions/index'

// nodejs library that concatenates classes
import classNames from "classnames"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import MenuIcon from '@material-ui/icons/Menu'
// @material-ui/icons
import Menu from "@material-ui/icons/Menu"
// core components
import headerStyle from "assets/jss/meshui/components/headerStyle.js"

import Sidebar from 'containers/Sidebar/Sidebar';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      showSidebar: true,
    }
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
    this.headerColorChange = this.headerColorChange.bind(this)
  }

  handleSidebarOpen = () => {
    this.setState({ showSidebar: true })
  }

  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener("scroll", this.headerColorChange)
    }
  }

  headerColorChange() {
    const { classes, color, changeColorOnScroll } = this.props
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color])
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color])
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color])
    }
  }

  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener("scroll", this.headerColorChange)
    }
  }
  
  closeSidebarHandler = () => {
    this.setState({showSidebar: false})
  }

  render() {
    const { open } = this.state.showSidebar;
    const {
      classes,
      color,
      rightLinks,
      leftLinks,
      brand,
      fixed,
      absolute
    } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
    });
    const brandComponent = 
      <NavLink to="/" className={classes.title}>
        <Button className={classes.title}>{brand}</Button>
      </NavLink>

    return (
      <div>
        <AppBar className={appBarClasses}>
          <Toolbar className={classes.container}>
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
            {leftLinks !== undefined ? brandComponent : null}
            <div className={classes.flex}>
              {leftLinks !== undefined ? (
                <Hidden smDown implementation="css">
                  {leftLinks}
                </Hidden>
              ) : (
                brandComponent
              )}
            </div>
            <Hidden smDown implementation="css">
              {rightLinks}
            </Hidden>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}>
                <Menu />
              </IconButton>
            </Hidden>
          </Toolbar>
          <Hidden mdUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={"left"}
              open={this.state.mobileOpen}
              classes={{
                paper: classes.drawerPaper
              }}
              onClose={this.handleDrawerToggle}
            >
              <div className={classes.appResponsive}>
                {leftLinks}
                {rightLinks}
              </div>
            </Drawer>
          </Hidden>
        </AppBar>

        {this.props.isAuthenticated
        ? (
          <Sidebar
          variant="persistent"
          open={this.state.showSidebar} closed={this.closeSidebarHandler} />
        ) : (null)}
      </div>
    )
  }
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};

// export default withStyles(headerStyle)(Header);

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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(headerStyle)(Header))