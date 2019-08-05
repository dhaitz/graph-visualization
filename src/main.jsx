/**
 * This is the entry point to the app
 */
import './styles/main.less';

import React from 'react';
import {render} from 'react-dom';
import GalaxyPage from './galaxy/galaxyPage.jsx';
import { Router, Route } from 'react-router';

render(
  <Router>
    <Route path='/' component={GalaxyPage} />
  </Router>,
  document.getElementById('app')
);
