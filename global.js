import React from 'react';
import Radium, { Style } from 'radium';

import { type, colors } from './constants';
import { initialState } from './reducers/app';

const Styles = () =>
  <Style
    radiumConfig={{ userAgent: 'all' }}
    rules={{
      html: {
        boxSizing: 'border-box',
        fontSize: type.bodySize,
        backgroundColor: initialState.theme.primary,
        color: initialState.theme.secondary,
        height: '100%'
      },
      '::-moz-selection': {
        background: colors.green,
        color: colors.white,
        textShadow: 'none'
      },
      '::selection': {
        background: colors.darkGray,
        color: colors.white,
        textShadow: 'none'
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit',
        textRendering: 'optimizeSpeed',
        padding: 0,
        margin: 0
      },
      body: {
        fontFamily: type.fontMono,
        fontWeight: type.fontRegular,
        lineHeight: '1.5'
      },
      h1: {
        fontSize: type.alpha,
        fontFamily: type.fontSans,
        lineHeight: '1.155',
        letterSpacing: '-1px',
      },
      h2: {
        '-webkit-font-smoothing': 'antialiased',
        fontFamily: type.fontSans,
        fontSize: type.beta,
        lineHeight: '1.3'
      },
      h3: {
        fontWeight: type.fontRegular,
        fontSize: type.bodySize,
        marginBottom: '40px'
      },
      p: {
        marginBottom: '20px'
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
        paddingBottom: '1px',
        borderBottom: '1px solid',
        transition: '0.2s opacity'
      },
      'a:hover': {
        opacity: '0.7'
      },
      img: {
        maxWidth: '100%'
      },
      li: {
        listStyle: 'none'
      },
      'input, textarea': {
        '-webkit-appearance': 'none',
        borderRadius: '0',
        width: '100%',
        outline: 'none',
        fontFamily: type.fontMono,
        fontSize: type.bodySize
      },
      'input::-webkit-input-placeholder, textarea::-webkit-input-placeholder': {
        color: 'currentColor'
      },
      fieldset: {
        border: 0
      },
      textarea: {
        minHeight: '200px',
        maxWidth: '100%'
      },
      hr: {
        backgroundColor: colors.gray,
        marginTop: '10px',
        marginBottom: '60px',
        border: 'none',
        height: '2px',
        opacity: '0.15'
      },
      mediaQueries: {
        '(min-width: 600px)': {
          h1: {
            fontSize: type.alpha
          },
          h2: {
            fontSize: type.beta
          }
        },
        '(min-width: 800px)': {
          h1: {
            fontSize: type.mega
          },
          h2: {
            fontSize: type.beta
          }
        }
      }
    }}
  />;

export default Radium(Styles);
