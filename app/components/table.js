import React from 'react';
import { connect } from 'react-redux';

import { CardContainer } from './card'

export default class Table extends React.Component{
	render(){
		return(
      <div id="deck">
          {this.props.cards.map((card, i) =>
            <CardContainer colour={card.get('colour')}
                  number={card.get('number')}
                  shape={card.get('shape')}
                  fill={card.get('fill')}
                  key={i} />
          )}
      </div>
    );
  }
};
