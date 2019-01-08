import React, { Component } from 'react'

import Header from 'containers/Header/Header'
import HeaderLinks from "containers/Header/HeaderLinks";

class Site extends Component {


  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Header
          brand="Meshui"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        {this.props.children}
        FOOTER<br />
      </div>
    )
  }
}

export default Site
