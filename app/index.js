import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import { newDeck, deal } from './lib/cards';



let deck = newDeck();


console.log("start deck:")
console.log(deck);

// let cardsOnTable = deck.splice(-16,16);
let cardsOnTable
[deck, cardsOnTable] = deal(deck, 16);


console.log("end deck:")
console.log(deck);

console.log("cards on table:")
console.log(cardsOnTable);


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
