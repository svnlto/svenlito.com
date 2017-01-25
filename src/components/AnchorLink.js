import React, { PropTypes } from 'react';
import { Link } from 'react-router';
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

  top: {
    display: 'table',
    marginTop: '50px'
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


const AnchorLink = (props) => {
  let link;

  if (props.type === 'block') {
    link = (
      <Link to={props.link} style={styles.block}>
        <span>{props.text}</span> &rarr;
      </Link>
    );
  } else {
    link = (
      <Link to={props.link} style={styles.link}>
        <span style={styles.linkInner}>{props.text}</span> &rarr;
      </Link>
    );
  }

  return (
    <span style={[styles[props.color], styles[props.margin]]}>
      {link}
    </span>
  );
};

AnchorLink.propTypes = {
  type: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string,
  margin: PropTypes.string,
  color: PropTypes.string,
};

export default new Radium(AnchorLink);

