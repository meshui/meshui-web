import React, { Component } from 'react'

// core components
import Header from "containers/Header/Header";
import HeaderLinks from "containers/Header/HeaderLinks.js";

class Admin extends Component {


  render() {
    const { classes, ...rest } = this.props;
    
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Meshui"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
          {this.props.children}
      </div>
    )
  }
}

export default (Admin)
