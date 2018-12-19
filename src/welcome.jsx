import React from "react";
import Destination from './destination.jsx';

export default class WelcomePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Welcome to the Graph Galaxy</h1>
        <h2>Choose your destination:</h2>
        <div className='media-list'>
         
          <Destination description='A graph constructed from a sample of Wikipedia-en page links'
                      href='#/galaxy/wikipedia'
                      media='brew_fly_first.png'
                      name='Wikipedia'/>
        </div>
      </div>
    );
  }
}
