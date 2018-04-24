import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import { newDeck, deal } from './lib/cards';


// Getting a shuffled deck
let deck = newDeck();
console.log("start deck:")
console.log(deck);

// Dealing 16 cards
let cardsOnTable
[deck, cardsOnTable] = deal(deck, 16);

// Logging the cards left in the deck and on table
console.log("end deck:")
console.log(deck);

console.log("cards on table:")
console.log(cardsOnTable);

let setsFound = 0;

const state = {
  deck,
  cardsOnTable,
  setsFound,
}

console.log(state)




ReactDOM.render(
    <App state={state} />,
    document.getElementById('app')
);
