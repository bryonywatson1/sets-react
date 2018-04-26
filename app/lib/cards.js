// import { fromJS } from 'immutable';

export const shuffle = (array) => {
    let j, x, i;
    for (i = array.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
    }
};


export const newDeck = () => {
    const colour = ['red','green','purple'];
    const number = [1,2,3];
    const shape = ['diamond','squiggle','oval'];
    const fill = ['solid','stripe','stroke'];
    const deck = [];

    colour.forEach ( (c) => {
        number.forEach((n) =>{
            shape.forEach((s) =>{
                fill.forEach((f) =>{
                    deck.push({'colour':c, 'number':n, 'shape':s, 'fill':f});
                });
            });
        });
    });

    shuffle(deck);
    return deck;
    // return fromJS(deck);

};

export const deal = (deck,n) => {
    let dealt_cards = deck.splice(-n, n);
    return[deck, dealt_cards];
}
