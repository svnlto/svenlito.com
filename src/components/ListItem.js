import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import { type } from '../vars';

const styles = {
  item: {
    borderBottom: 'none',
    marginBottom: '15px',
    display: 'table'
  },
  title: {
    WebkitFontSmoothing: 'antialiased',
    fontFamily: type.fontSans,
    fontSize: type.beta,
    lineHeight: '1.2',
    borderBottom: '1px solid',
    marginBottom: '8px',
    display: 'table'
  }
};

const ListItem = (props) => {
  return (
    <Link to={props.link} style={styles.item}>
      <h2 style={styles.title}>{props.title}</h2>
      <p>{props.summary}</p>
    </Link>
  );
};

ListItem.propTypes = {
  link: PropTypes.string,
  summary: PropTypes.string,
  title: PropTypes.string
};

export default new Radium(ListItem);
