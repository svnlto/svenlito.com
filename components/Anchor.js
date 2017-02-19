import React, { PropTypes } from 'react';
import Radium from 'radium';

const styles = {
  block: {
    display: 'table',
    padding: '15px 20px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'inherit',
    lineHeight: '1',
    transition: '0.2s background-color',
  },

  link: {
    borderBottom: 'none'
  },
  linkInner: {
    borderBottom: '1px solid'
  },

  white: {
    color: 'white'
  },

  topBottom: {
    display: 'table',
    marginTop: '50px',
    marginBottom: '60px'
  },
  bottom: {
    display: 'table',
    marginBottom: '50px'
  }
};

const Anchor = (props) => {
  let link;

  if (props.type === 'block') {
    link = (
      <a
        href={props.url}
        style={[
          styles.block,
          styles[props.color]
        ]} key='1' target='_blank' rel='noopener noreferrer'
      >
        <span>{props.text}</span> &rarr;
      </a>
    );
  } else {
    link = (
      <a href={props.url} style={styles.link} rel='noopener noreferrer' target='_blank'>
        <span style={styles.linkInner}>{props.text}</span> &rarr;
      </a>
    );
  }
  return (
    <span style={[styles[props.color], styles[props.margin]]}>
      {link}
    </span>
  );
};

Anchor.propTypes = {
  url: PropTypes.string,
  color: PropTypes.string,
  link: PropTypes.string,
  margin: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string
};

export default Radium(Anchor);

