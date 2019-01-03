import React from 'react';
import PropTypes from 'prop-types';



import LogIn from '../../components/LogIn/LogIn'
import Footer from '../../containers/Footer/Footer'

function LogInView(props) {
  const { classes } = props;

  return (
    <div>
      <LogIn />
      <Footer />
    </div>
  );
}

export default LogInView