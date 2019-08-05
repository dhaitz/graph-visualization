import React from 'react';
import LoadingIndicator from './loadingIndicator.jsx';
import Scene from './scene.jsx';
import appEvents from './service/appEvents.js';

export default class GalaxyPage extends React.Component {
  render() {
    appEvents.downloadGraphRequested.fire('')

    return (
      <div>
        <LoadingIndicator />
        <Scene />
      </div>
    );
  }
}
