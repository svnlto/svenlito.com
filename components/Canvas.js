import React from 'react';

const styles = { display: 'block' };

const Canvas = ({ w, h, children }) => {
  const viewBox = [0, 0, w, h].join(' ');

  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      viewBox={viewBox}
      style={styles}
    >{children}</svg>
  );
};

Canvas.propTypes = {
  h: React.PropTypes.number,
  w: React.PropTypes.number,
  children: React.PropTypes.node,
};

export default Canvas;
