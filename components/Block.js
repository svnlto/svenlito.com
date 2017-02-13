import React, { PropTypes } from 'react';
import Radium from 'radium';

import { breakpoint, type } from '../vars';

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    verticalAlign: 'top',
    justifyContent: 'space-between',
    position: 'relative',
    marginTop: '40px',
    marginBottom: '20px',
    overflow: 'hidden'
  },
  title: {
    padding: '0 10px 20px',
    width: '100%',
    marginBottom: '0'
  },
  intro: {
    fontSize: type.delta,
    lineHeight: '1.7',
    padding: '0 10px',
    opacity: '0.8'
  },
  processFeature: {
    marginBottom: '50px',

    [breakpoint.medium]: {
      marginTop: '-150px',
    }
  },
  process: {
    marginTop: '0',
    marginBottom: '50px',
  },
  solid: {
    padding: '30px 20px 20px',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'rgba(255,255,255, 0.2)'
  },
  black: {
    borderColor: 'rgba(0,0,0, 0.2)'
  }
};

const Block = (props) => {
  return (
    <div
      className='container'
      style={[
        styles.container,
        styles[props.border],
        styles[props.color],
        styles[props.type]
      ]}
    >
      <h2 style={styles.title}>{props.title}</h2>
      {props.intro && <p style={styles.intro}>{props.intro}</p>}
      {props.children}
    </div>
  );
};

Block.propTypes = {
  children: PropTypes.array,
  intro: PropTypes.border,
  title: PropTypes.border,
  border: PropTypes.border,
  color: PropTypes.border,
  type: PropTypes.border
};

export default Radium(Block);

