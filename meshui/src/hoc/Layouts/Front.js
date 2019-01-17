import React, { Component } from 'react'


// core components
import Footer from "containers/Footer/Footer"

// sections for this page
import HeaderLinks from "containers/Header/HeaderLinks"

class Front extends Component {


  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default (Front)
