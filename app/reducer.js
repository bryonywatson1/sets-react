import { Map, List } from 'immutable';
import { newDeck, deal } from './lib/cards';



const setupGame = (currentState, seed) => {
  // Getting a shuffled deck
  let deck = newDeck(seed);
  console.log('start deck:')
  console.log(deck);

  // Dealing 16 cards
  let cardsOnTable
  [deck, cardsOnTable] = deal(deck, 12, seed);

  // Logging the cards left in the deck and on table
  console.log('end deck:')
  console.log(deck);

  console.log('cards on table:')
  console.log(cardsOnTable);

  let score = 0;

  const newState = new Map({
    deck,
    cardsOnTable,
    score,
  });

  console.log(newState)
  // return newState;

  return currentState.merge(newState);

};

const setRecord = (currentState, score) =>{
  return currentState.merge(new Map({"score": score}))
}

const dealToTable = (currentState, seed) => {
  const [deck, newCards] = deal(currentState.get('deck'), 3, seed);
  let newCard1 = newCards.get(0);
  let newCard2 = newCards.get(1);
  let newCard3 = newCards.get(2);
  console.log(newCard1)
  const cardsOnTable = currentState.get('cardsOnTable').push(newCard1, newCard2, newCard3);
  return currentState.merge(new Map({deck, cardsOnTable}));
}

export default function (currentState=new Map(), action){
  switch(action.type){
    case 'SETUP_GAME':
    return setupGame(currentState, action.seed);
    case 'SET_RECORD':
    return setRecord(currentState, action.score);
    case 'DEAL_TO_TABLE':
    return dealToTable(currentState, action.seed)
  }
  return currentState;
}
