import React, { PropTypes } from 'react';
import Radium from 'radium';

import { breakpoint, layout } from '../constants';

const styles = {
  container: {
    maxWidth: layout.maxWidth,
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: '0',
    paddingRight: '0',
    paddingBottom: '30px',
    position: 'relative',
    margin: 'auto',

    [breakpoint.medium]: {
      display: 'flex'
    },
    [breakpoint.small]: {
      paddingLeft: layout.gutter,
      paddingRight: layout.gutter,
    }
  }
};

const Container = (props) => {
  return (
    <div className='container' style={styles.container}>
      {props.children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired
  ])
};


export default Radium(Container);
