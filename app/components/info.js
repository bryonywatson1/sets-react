import React from 'react';
import { connect } from 'react-redux';


export class Info extends React.Component{
  render(){
    return(
        <div id="setsscored">
          <div id="setsscoredinner">
            <h1>Sets</h1>
            <p>score:</p>
            <p id="wins">{this.props.score}</p>
          </div>
          <button onClick={this.propps.onClickDeal}>Deal 3 more</button>
        </div>
    );
  }
};


function mapStateToProps(state) {
 return {
   score: state.get('score')
 };
}

export const InfoContainer = connect(mapStateToProps)(Info);
