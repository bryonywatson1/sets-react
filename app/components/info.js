import React from 'react';
import { connect } from 'react-redux';
import { dealToTable } from '../../app/action_creators';



export class Info extends React.Component{
  render(){
    return(
        <div id="setsscored">
          <div id="setsscoredinner">
            <h1>Sets</h1>
            <p>score:</p>
            <p id="wins">{this.props.score}</p>
          </div>
          <button onClick={this.props.onClickDeal}>Deal 3 more</button>
        </div>
    );
  }
};


function mapStateToProps(state) {
 return {
   score: state.get('score')
 };
}

function mapDispatchToProps(dispatch){
  return{
    onClickDeal: () => {
      dispatch(dealToTable())
    }
  }
}


export const InfoContainer = connect(mapStateToProps, mapDispatchToProps)(Info);
