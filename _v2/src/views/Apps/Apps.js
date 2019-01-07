import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { NavLink, Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/UI/Header/Header";
import Footer from "components/UI/Footer/Footer.jsx";
import GridContainer from "components/UI/Grid/GridContainer.jsx";
import GridItem from "components/UI/Grid/GridItem.jsx";
import Parallax from "components/UI/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/UI/Header/HeaderLinks.jsx";

import SectionCompletedExamples from "../Components/Sections/SectionCompletedExamples";

import ProductSection from "../LandingPage/Sections/ProductSection";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Apps extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Meshui"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small  image={require("assets/img/profile-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Apps.</h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <ProductSection />
          {/* <SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavascript />
          <SectionCarousel /> */}
          <SectionCompletedExamples />
          {/* <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          <SectionDownload /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Apps);
