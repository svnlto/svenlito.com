import React, { PropTypes } from 'react';
import { StyleRoot } from 'radium';


import { colors } from './vars';
import Styles from './global';
import Header from './components/Header';
import Footer from './components/Footer';

import ColorCursor from './components/ColorCursor';

const App = (props) =>
  <StyleRoot>
    <Styles />
    <ColorCursor color={colors.greenLight10}>
      <Header />
      <div style={{ padding: '2rem 0', minHeight: '80vh' }}>
        {props.children}
      </div>
      <Footer />
    </ColorCursor>
  </StyleRoot>;

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
