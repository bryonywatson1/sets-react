import React from 'react';

export default class Info extends React.Component{
  render(){
    return(
      <div id="info">
        <span id="setsfound">
          Sets Found: {this.props.setsFound}
        </span>
        <span id="buttons">
          <button>Deal 3 more cards</button>
        </span>
      </div>
    );
  }
};
