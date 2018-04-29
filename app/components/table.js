import React from 'react';

import Card from './card'

export default class Table extends React.Component{
	render(){
		return(
      <div id="deck">
          {this.props.cards.map((card, i) =>
            <Card colour={card.get('colour')}
                  number={card.get('number')}
                  shape={card.get('shape')}
                  fill={card.get('fill')}
                  key={i} />
          )}
      </div>
    );
  }
};
