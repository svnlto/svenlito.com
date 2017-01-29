import React, { PropTypes } from 'react';
import Radium from 'radium';

import { colors } from '../vars';

const styles = {
  field: {
    backgroundColor: 'transparent',
    position: 'relative',
    padding: '10px 15px',
    border: '1px solid',
    marginBottom: '-1px',
    transition: '0.2s',
    color: 'inherit',
    opacity: '0.4',
    ':focus': {
      opacity: '1',
      zIndex: '1',
      transform: 'scale(1.01)',
      backgroundColor: colors.white
    }
  },
  button: {
    backgroundColor: 'transparent',
    color: 'inherit',
    width: 'auto',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'inherit',
    marginTop: '5px',
    marginBottom: '20px',
    padding: '8px 25px 8px 35px',
    transition: '0.2s',
    cursor: 'pointer'
  },
  black: {
    ':hover': {
      backgroundColor: colors.white,
      color: colors.gray,
      borderColor: colors.black
    }
  }
};

const ContactForm = (props) => {
  const domain = window.location.host;
  const url = `http://${domain}/thanks`;

  return (
    <form
      action='https://formspree.io/me@svenlito.com'
      method='POST'
    >
      <input
        key='1'
        style={styles.field}
        type='text'
        name='name'
        placeholder='Full Name'
      />
      <input
        key='2'
        style={styles.field}
        type='email'
        name='_replyto'
        placeholder='Email Address'
      />
      <textarea
        key='3'
        style={styles.field}
        type='message'
        name='message'
        placeholder='Message'
      />
      <input
        style={[
          styles.button,
          styles[props.color]
        ]}
        type='submit'
        value='Send message &rarr;'
      />
      <input type='hidden' name='_next' value={url} />
    </form>
  );
};

ContactForm.propTypes = {
  color: PropTypes.string
};

export default new Radium(ContactForm);

