import React, { Component } from 'react'


class Admin extends Component {


  render() {
    return (
      <div>
        HEADER AUTH<br />
        {this.props.children}
        FOOTER<br />
      </div>
    )
  }
}

export default (Admin)
