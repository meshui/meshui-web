/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link, NavLink } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, AccountCircle } from "@material-ui/icons";

// core components
import CustomDropdown from "components/UI/CustomDropdown/CustomDropdown.js";
import Button from "components/UI/CustomButtons/Button.js";

import headerLinksStyle from "assets/jss/meshui/components/headerLinksStyle";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      
      <ListItem className={classes.listItem}>
        <NavLink
          to="/apps"
          color="transparent"
          className={classes.navLink}>
          <Apps className={classes.icons} /> Apps
        </NavLink>
      </ListItem>

      <ListItem className={classes.listItem}>
        <NavLink
          to="/documentation"
          color="transparent"
          className={classes.navLink}>
          Documentation
        </NavLink>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <NavLink
          to="/login"
          color="transparent"
          className={classes.navLink}>
          Log In
        </NavLink>
      </ListItem>

      <ListItem className={classes.listItem}>
        <NavLink to="/signup">
          <Button
            className={classes.registerNavLink}
            color="rose"
            round>
            Sign Up
          </Button>
        </NavLink>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="https://github.com/meshui/meshui"
          target="_blank"
          className={classes.navLink}>
          <i className={classes.socialIcons + " fab fa-github"} />
        </Button>
      </ListItem>
      
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={AccountCircle}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem> */}

    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
