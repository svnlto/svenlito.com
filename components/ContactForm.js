import React, { PropTypes } from 'react';
import Radium from 'radium';

import { colors } from '../vars';

const styles = {
  field: {
    backgroundColor: 'transparent',
    position: 'relative',
    padding: '10px 15px',
    borderWidth: '1px',
    borderStyle: 'solid',
    marginBottom: '5px',
    transition: '0.2s',
    color: 'inherit',
    opacity: '0.4',
    ':focus': {
      opacity: '1',
      zIndex: '1',
      transform: 'scale(1.01)',
      backgroundColor: colors.black
    }
  },
  button: {
    backgroundColor: 'transparent',
    color: colors.whiteDark20,
    width: 'auto',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: colors.darkGray,
    padding: '8px 25px 8px 35px',
    transition: '0.2s',
    cursor: 'pointer',
  },
  white: {
    ':hover': {
      color: colors.pink
    }
  }
};

const ContactForm = (props) => {
  const url = 'http://0.0.0.0:3000/thanks';

  return (
    <form
      action='https://formspree.io/me@svenlito.com'
      method='POST'
    >
      <fieldset>
        <input
          key='1'
          style={styles.field}
          type='text'
          name='name'
          placeholder='Full Name'
          required
        />
        <input
          key='2'
          style={styles.field}
          type='email'
          name='_replyto'
          placeholder='Email Address'
          required
        />
        <textarea
          key='3'
          style={styles.field}
          type='message'
          name='message'
          placeholder='Message'
          required
        />
        <input
          style={[
            styles.button,
            styles[props.color]
          ]}
          type='submit'
          value='Send message &rarr;'
        />
      </fieldset>
      <input type='hidden' name='_next' value={url} />
    </form>
  );
};

ContactForm.propTypes = {
  color: PropTypes.string
};

export default Radium(ContactForm);

