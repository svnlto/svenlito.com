import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import Isvg from 'react-inlinesvg';

import { type } from '../vars';

const styles = {
  button: {
    display: 'table',
    marginTop: '15px',
    marginBottom: '30px',
    padding: '15px 20px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'inherit',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    lineHeight: '1',
    fontSize: type.bodySize,
    fontFamily: type.fontMono,
    transition: '0.2s background-color',
    outline: 'none'
  },
  icon: {
    width: '20px',
    height: 'auto',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '10px',
    opacity: '0.5'
  },
  text: {
    display: 'inline-block',
    verticalAlign: 'middle'
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

class Button extends Component {
  render() {
    const icon = `../images/${this.props.icon}.svg`;
    return (
      <button
        style={[
          styles.button,
          styles[this.props.color],
          styles[this.props.margin]
        ]}
        onClick={this.props.click}
      >
        { this.props.icon &&
          <span style={styles.icon}>
            <Isvg src={icon} />
          </span>
        }
        <span style={styles.text}>
          {this.props.text} {this.props.type === 'arrow' && '→'}
        </span>
      </button>
    );
  }
}

Button.propTypes = {
  click: PropTypes.string,
  icon: PropTypes.string,
  margin: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
};

export default new Radium(Button);

