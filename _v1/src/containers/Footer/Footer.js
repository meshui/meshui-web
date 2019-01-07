import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
 
  footer: {
    backgroundColor: '#f2f2f2',
    padding: theme.spacing.unit * 6,
  },
});

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Footer(props) {

  return (
    <React.Fragment>
      
      {/* Footer */}
      <footer className="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          @2019 Meshui
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);