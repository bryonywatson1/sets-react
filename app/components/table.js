import React from 'react';

import Card from './card'

export default class Info extends React.Component{
  render(){
    return(
      <div className="table">
          {this.props.cards.map((card, i) =>
              <Card colour={card.colour}
                    number={card.number}
                    symbol={card.symbol}
                    fill={card.fill}
                    key={i} />
          )}
      </div>    );
  }
};
