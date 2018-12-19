import React from "react";
import Destination from './destination.jsx';

export default class WelcomePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Welcome to the Graph Galaxy</h1>
        <h2>Choose your destination:</h2>
        <div className='media-list'>
         
          <Destination description='A graph constructed from a sample of 500 000 Wikipedia-en page links'
                      href='#/galaxy/wikipedia?cx=-705&cy=-9206&cz=-9978&lx=0.4772&ly=0.7270&lz=-0.4743&lw=0.1367&ml=450&s=1.75&l=1'
                      media='brew_fly_first.png'
                      name='Wikipedia'/>
        </div>
      </div>
    );
  }
}
