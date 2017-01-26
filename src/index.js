import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

import App from './App';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Thanks from './pages/Thanks';
import Work from './pages/Work';

render((
  <Router
    history={browserHistory}
    render={applyRouterMiddleware(useScroll())}
  >
    <Route path={'/'} component={App}>
      <IndexRoute component={Home} />
      <Route path='/work' component={Work} />
      <Route path='/contact' component={Contact} />
      <Route path='/thanks' component={Thanks} />
      <Route path='*' component={Home} />
    </Route>
  </Router>
), document.getElementById('app'));
