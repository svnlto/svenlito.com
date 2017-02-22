import React, { Component, PropTypes } from 'react';
import Radium, { StyleRoot } from 'radium';
import { Provider } from 'react-redux';

import initStore from '../store';
import reducers from '../reducers';

import Styles from '../global';
import { colors } from '../constants';

import ColorCursor from './ColorCursor';
import Header from './Header';
import Footer from './Footer';

const decorator = (ComposedComponent) => {

  @Radium
  class Comp extends Component {

    static async getInitialProps(ctx) {
      const { req } = ctx;
      const isServer = !!req;
      const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

      // Second param here is initial redux state on the server
      const store = initStore(reducers, {}, isServer);

      let pageProps = {};

      if (ComposedComponent.getInitialProps) {
        pageProps = await ComposedComponent.getInitialProps(ctx);
      }

      return {
        ...pageProps,
        initialState: store.getState(),
        isServer,
        userAgent,
      };
    }

    constructor(props) {
      super(props);
      this.store = initStore(reducers, props.initialState, props.isServer);
    }


    render() {
      const { userAgent, url } = this.props;

      return (
        <Provider store={this.store}>
          <StyleRoot>
            <Styles radiumConfig={{ userAgent }} />
            <ColorCursor color={colors.cursorGreen}>
              <Header path={url.pathname} />
              <div style={{ padding: '2rem 0', minHeight: '80vh' }}>
                <ComposedComponent
                  {...this.props}
                />
              </div>
              <Footer />
            </ColorCursor>
          </StyleRoot>
        </Provider>
      );
    }
  }

  Comp.propTypes = {
    initialState: PropTypes.object,
    isServer: PropTypes.bool.isRequired,
    url: PropTypes.object.isRequired,
    userAgent: PropTypes.string
  };

  return Comp;

};

export default decorator;
