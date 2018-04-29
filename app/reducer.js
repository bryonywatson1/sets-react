import { Map } from 'immutable';
import { newDeck, deal } from './lib/cards';



const setupGame = (currentState) => {
  // Getting a shuffled deck
  let deck = newDeck();
  console.log('start deck:')
  console.log(deck);

  // Dealing 16 cards
  let cardsOnTable
  [deck, cardsOnTable] = deal(deck, 12);

  // Logging the cards left in the deck and on table
  console.log('end deck:')
  console.log(deck);

  console.log('cards on table:')
  console.log(cardsOnTable);

  let setsFound = 0;

  const newState = new Map({
    deck,
    cardsOnTable,
    setsFound,
  });

  console.log(newState)
  return newState;

  return currentState.merge(newState);

};

const setRecord = (currentState, setsFound) =>{
  return currentState.merge(new Map({"Sets found": setsFound}))
}

export default function (currentState=new Map(), action){
  switch(action.type){
    case 'SETUP_GAME':
    return setupGame(currentState);
    case 'SET_RECORD':
    return setRecord(currentState, action.setsFound);
  }
  return currentState;
}
