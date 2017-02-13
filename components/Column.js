import React, { PropTypes } from 'react';
import Radium from 'radium';

import { breakpoint, type } from '../vars';

const styles = {
  column: {
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  title: {
    width: '100%'
  },
  headline: {
    width: '100%',
    marginBottom: '20px'
  },
  intro: {
    fontSize: type.beta,
    marginBottom: '20px',

    [breakpoint.medium]: {
      fontSize: '30px',
    }
  },
  flex: {
    [breakpoint.medium]: {
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      display: 'flex'
    }
  },
  full: {
    [breakpoint.medium]: {
      width: '100%'
    }
  },
  half: {
    [breakpoint.medium]: {
      width: '50%'
    }
  },
  third: {
    [breakpoint.medium]: {
      width: '33.33%'
    }
  },
  twoThird: {
    [breakpoint.medium]: {
      width: '66.66%'
    }
  }
};

const Column = (props) => {
  return (
    <div
      style={[
        styles.column,
        styles[props.width],
        styles[props.display]
      ]}
    >
      {props.title &&
        <h3 style={styles.title}>{props.title}</h3>
      }
      {props.headline &&
        <h2 style={styles.headline}>{props.headline}</h2>
      }
      {props.intro &&
        <p style={styles.intro}>{props.intro}</p>
      }
      {props.content &&
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      }
      {props.children}
    </div>
  );
};

Column.propTypes = {
  column: PropTypes.string,
  title: PropTypes.string,
  headline: PropTypes.string,
  intro: PropTypes.string,
  width: PropTypes.string,
  display: PropTypes.string,
  content: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired
  ])
};

export default Radium(Column);
