import React from 'react';

import { connect } from 'react-redux';
import { fromJS, List, Get } from 'immutable';


let numberOfClicked = 0;


export class Card extends React.Component {
		constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
				clicked:false
		}
	}

	handleClick() {
		console.log(this.props.cardsOnTable)
		this.setState({
      clicked: !this.state.clicked
    });
		if (this.state.clicked) {
			// compareClicks.splice(-1,1)
			// console.log('unclicked');
			numberOfClicked--;
			// console.log(numberOfClicked)
		} else {
			// compareClicks.push(this.props);
			// console.log('clicked');
			numberOfClicked++;
			// console.log(numberOfClicked)
		};
		if (numberOfClicked == 3){

			numberOfClicked == 0;
			checkIfSet(this.props.cardsOnTable)
		}

	}
	render() {
		return (
			<div className={`card  ${this.state.clicked ? "clicked" : ""}`} onClick={this.handleClick}>
				<div className={`cardinner ${this.props.shape} ${this.props.colour} ${this.props.fill} ${this.props.number}`}>
				</div>
			</div>
		);
	};
}

export const checkIfSet = (cards) => {
	const clickedCards = [];

cards.forEach(function(card){
	if (card.state.clicked === "clicked"){

		console.log("succesfully checked card was clicked" + card )


};

console.log("definitely did for each" + card )

	// console.log(card.get(shape));

	// clickedCards.push(card)
});
console.log(clickedCards)

// 	console.log('what I see inside checkifset' + cards)
// 	const clickedCards = cards.find(function(card){return card.get('clicked') === true;});
// 	// const clickedCards = cards.filter((card) => card.get('clicked') == true);
// 	console.log(clickedCards);
// 	console.log(clickedCards[0]);
// console.log(clickedCards[1]);
// console.log(clickedCards[2])
}

function mapStateToProps(state) {
 return {
   cardsOnTable: state.get('cardsOnTable')
 };

}
//
// function mapDispatchToProps(dispatch){
//   return{
//     onClickDeal: () => {
//       dispatch(dealToTable())
//     }
//   }
// }


export const CardContainer = connect(mapStateToProps,
	// mapDispatchToProps
)(Card);
