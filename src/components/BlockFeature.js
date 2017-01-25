import React, { PropTypes } from 'react';
import Radium from 'radium';
import Isvg from 'react-inlinesvg';

import { breakpoint } from '../vars';

const styles = {
  item: {
    display: 'block',
    textAlign: 'center',
    width: '100%',
    marginBottom: '20px',

    [breakpoint.medium]: {
      display: 'flex'
    },
  },
  half: {
    [breakpoint.medium]: {
      width: 'calc(50% - 5px)'
    }
  },
  third: {
    [breakpoint.medium]: {
      width: 'calc(33% - 5px)'
    }
  },
  odd: {
    [breakpoint.medium]: {
      marginLeft: '10px',
      marginRight: '10px',
    }
  },
  inner: {
    border: '2px solid rgba(255,255,255, 0.15)',
    padding: '60px 30px 10px'
  },
  image: {
    display: 'block'
  },
  title: {
    marginTop: '50px',
    marginBottom: '15px'
  }
};


const BlockFeature = (props) => {
  return (
    <div style={[styles.item, styles[props.width], styles[props.nthChild]]}>
      <div style={styles.inner}>
        <span style={styles.image}>
          <Isvg src={props.image} />
        </span>
        <h2 style={styles.title}>{props.title}</h2>
        <p>{props.summary}</p>
      </div>
    </div>
  );
};

BlockFeature.propTypes = {
  width: PropTypes.string,
  nthChild: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string
};

export default new Radium(BlockFeature);
