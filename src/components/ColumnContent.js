import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import { breakpoint } from '../vars';

const styles = {
  two: {
    [breakpoint.medium]: {
      columnCount: '2'
    }
  },
  three: {
    [breakpoint.medium]: {
      columnCount: '3'
    }
  },
  four: {
    [breakpoint.medium]: {
      columnCount: '4'
    }
  }
};

class ColumnContent extends Component {
  render() {
    return (
      <div style={[styles.content, styles[this.props.columns]]}>
        {this.props.children}
      </div>
    );
  }
}

ColumnContent.propTypes = {
  children: PropTypes.array,
  columns: PropTypes.string
};

export default new Radium(ColumnContent);

