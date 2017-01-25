import React, { Component, PropTypes } from 'react';
import { StyleRoot } from 'radium';

import Styles from './global';
import Header from './components/Header';
import Footer from './components/Footer';

import ColorCursor from './components/ColorCursor';

class App extends Component {

  constructor() {
    super();

    this.state = {
      theme: {}
    };
  }

  render() {
    return (
      <StyleRoot>
        <Styles />
        <ColorCursor>
          <Header />
          <div style={{ padding: '2rem 0', minHeight: '80vh' }}>
            {this.props.children}
          </div>
          <Footer />
        </ColorCursor>
      </StyleRoot>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
