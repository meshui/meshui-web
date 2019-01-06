import React, { Component, Fragment } from "react";

import Header from '../../containers/Header/Header'
import Footer from '../../containers/Footer/Footer'

class Error404 extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    document.body.classList.add("background");
  }
  componentWillUnmount() {
    document.body.classList.remove("background");
  }
  render() {
    return (
      <div>
        <Header />
        <Fragment>
          <div className="fixed-background" />
          <main>
            <div className="container">
              ERROR 404
            </div>
          </main>
        </Fragment>
        <Footer />
      </div>
    );
  }
}
export default Error404;
