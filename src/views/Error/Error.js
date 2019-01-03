import React, { Component, Fragment } from "react";


class Error404 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.body.classList.add("background");
  }
  componentWillUnmount() {
    document.body.classList.remove("background");
  }
  render() {
    return (
      <Fragment>
        <div className="fixed-background" />
        <main>
          <div className="container">
            ERROR 404
          </div>
        </main>
      </Fragment>
    );
  }
}
export default Error404;
