import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import Isvg from 'react-inlinesvg';

const styles = {
  button: {
    display: 'inline-block',
    width: '45px',
    height: '45px',
    padding: '9px 12px',
    marginRight: '10px',
    border: '1px solid'
  }
};

class SocialButton extends Component {
  render() {
    const icon = `../images/${this.props.icon}.svg`;
    return (
      <a
        style={styles.button}
        href={this.props.link}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Isvg src={icon} />
      </a>
    );
  }
}

SocialButton.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string
};

export default new Radium(SocialButton);