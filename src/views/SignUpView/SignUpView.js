import React from 'react';
import PropTypes from 'prop-types';

import SignUp from '../../components/SignUp/SignUp'
import Footer from '../../containers/Footer/Footer'

function SignUpView(props) {
  const { classes } = props;

  return (
    <div>
      <SignUp />
      <Footer />
    </div>
  );
}

export default SignUpView