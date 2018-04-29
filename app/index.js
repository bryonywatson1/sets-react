import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import { fromJS } from 'immutable';
import {createStore} from 'redux'
import { Provider } from 'react-redux';

import reducer from './reducer'
import { setupGame, setRecord } from '../app/action_creators';

import { newDeck, deal } from './lib/cards';

require('.css/styles.css')

let store = createStore(reducer);

store.dispatch(setupGame());
store.dispatch(setRecord(0, 0));


ReactDOM.render(
  <Provider store={store}>
    <App state={state} />,
  </Provider>,
  document.getElementById('app')
);


// // Getting a shuffled deck
// let deck = newDeck();
// console.log('start deck:')
// console.log(deck);
//
// // Dealing 16 cards
// let cardsOnTable
// [deck, cardsOnTable] = deal(deck, 12);
//
// // Logging the cards left in the deck and on table
// console.log('end deck:')
// console.log(deck);
//
// console.log('cards on table:')
// console.log(cardsOnTable);
//
// let setsFound = 0;
//
// const state = fromJS({
//   deck,
//   cardsOnTable,
//   setsFound,
// });
//
// console.log(state)
