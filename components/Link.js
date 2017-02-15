import React, { PropTypes } from 'react';
import Router from 'next/router';

const onClickHandler = (href) => (e) => {
  e.preventDefault();
  Router.push(href);
};

const Link = ({ children, href, style }) => (
  <a href={`${href}`} style={style} onClick={onClickHandler(href)}>
    {children}
  </a>
);

Link.propTypes = {
  href: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
    PropTypes.array.isRequired
  ])
};

export default Link;
