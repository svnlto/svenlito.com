import React, { PropTypes } from 'react';
import Radium from 'radium';

import { breakpoint, type } from '../constants';

const styles = {
  list: {
    width: '100%',
  },
  listItem: {
    fontSize: type.epsilon,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(255,255,255, 0.25)',
    paddingBottom: '5px',
    opacity: '0.8',
    margin: '10px',
    width: 'calc(100% - 20px)',
    display: 'inline-block',

    [breakpoint.medium]: {
      fontSize: type.epsilon,
      width: 'calc(50% - 20px)'
    }
  },
  full: {
    [breakpoint.medium]: {
      width: 'calc(100% - 20px)'
    }
  },
  black: {
    borderBottomColor: 'rgba(0,0,0, 0.25)',
  }
};

const List = (props) => {
  const borderColor = props.color;
  const width = props.width;

  const listItems = props.items.map((item) => {
    return (
      <li
        key={item.name}
        style={[
          styles.listItem,
          styles[borderColor],
          styles[width]
        ]}
      > {item.name} </li>
    );
  });

  return (
    <ul style={styles.list}>{listItems}</ul>
  );
};

List.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  items: PropTypes.array,
};

export default Radium(List);
