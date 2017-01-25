import React, { PropTypes } from 'react';
import Radium from 'radium';

const styles = {
  container: {
    position: 'relative',
    paddingBottom: '56.25%',
    height: '0',
    overflow: 'hidden',
    maxWidth: '100%'
  },
  video: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    border: '0',
    borderRadius: '5px'
  }
};

const Vimeo = (props) => {
  return (
    <div style={styles.container}>
      <iframe style={styles.video} src={props.url} frameBorder='0' />
    </div>
  );
};

Vimeo.propTypes = {
  url: PropTypes.string.isRequired
};

export default new Radium(Vimeo);
