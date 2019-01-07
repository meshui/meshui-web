import React, { Component } from 'react'

import Header from '../../components/Header/Header'

class Admin extends Component {


  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        FOOTER<br />
      </div>
    )
  }
}

export default (Admin)
