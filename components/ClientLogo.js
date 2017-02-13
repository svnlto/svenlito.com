import React, { PropTypes } from 'react';
import Radium from 'radium';
import Isvg from 'react-inlinesvg';

import { breakpoint } from '../vars';

const styles = {
  logo: {
    display: 'none',

    [breakpoint.medium]: {
      display: 'block',
      padding: '0 60px 40px 0'
    }
  }
};


const ClientLogo = (props) => {
  const url = `../images/work/${props.client}.svg`;
  return (
    <div>
      {this.props.client && <span style={styles.logo}><Isvg src={url} /></span>}
    </div>
  );
};

ClientLogo.propTypes = {
  client: PropTypes.string
};

export default Radium(ClientLogo);

