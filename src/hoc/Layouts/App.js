import React, { Component } from 'react'


// core components
import Header from "containers/Header/Header"
import Footer from "containers/Footer/Footer"

// sections for this page
import HeaderLinks from "containers/Header/HeaderLinks"

class App extends Component {


  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <Header
          brand="Meshui"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />

        {this.props.children}
        
        <Footer />
      </div>
    )
  }
}

export default (App)
