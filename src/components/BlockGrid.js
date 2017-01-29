import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import { breakpoint, colors, type } from '../vars';

const styles = {
  block: {
    padding: '1px',
    position: 'relative',
    verticalAlign: 'top',
    transition: '0.2s transform',

    ':hover': {
      transform: 'scale(1.04)',
      zIndex: '1'
    },

    [breakpoint.medium]: {
      width: '33.33%',
      display: 'inline-block'
    }
  },
  inner: {
    backgroundColor: colors.green,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: colors.white,
    overflow: 'hidden',
    transition: '0.2s'
  },
  link: {
    display: 'block',
    border: 'none',
    position: 'relative',
    height: '320px',
    zIndex: '1',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: type.mega,
    lineHeight: '1',
    padding: '20px',
    textShadow: '0 0 40px rgba(0,0,0, 0.5)'
  },
  client: {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    bottom: '20px',
    opacity: '0.8'
  }
};

const BlockGrid = (props) => {
  const backgroundImage = {
    backgroundImage: `url(../images/work/${props.path}/thumb.png)`
  };

  return (
    <div key='1' style={styles.block}>
      <div key='2' style={[styles.inner, backgroundImage]}>
        <h2 style={styles.title}>{props.title}</h2>
        <span style={styles.client}>{props.client}</span>
        <Link style={styles.link} to={props.url} />
      </div>
    </div>
  );
};

BlockGrid.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  client: PropTypes.string,
  url: PropTypes.string
};

export default new Radium(BlockGrid);

