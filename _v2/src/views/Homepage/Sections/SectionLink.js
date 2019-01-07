/*eslint-disable*/
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GridContainer from "components/UI/Grid/GridContainer.jsx";
import GridItem from "components/UI/Grid/GridItem.jsx";
import Button from "components/UI/CustomButtons/Button.jsx";
// core components
import downloadStyle from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.jsx";

class SectionLink extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>How to use Meshui?</h2>
              <h4>
                If you are ready to use Meshui, please sign up. Or you can test Meshui with the online demo.
              </h4>
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <Button
                color="rose"
                size="lg"
                href="#"
                target="_blank"
              >
                Sign Up
              </Button>
              <Button
                color="primary"
                size="lg"
                href="#"
                target="_blank"
              >
                Demo
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(downloadStyle)(SectionLink);
