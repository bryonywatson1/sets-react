import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer }  from './components/app';

import { fromJS } from 'immutable';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import reducer from './reducer'
import { setupGame, setRecord, dealToTable } from '../app/action_creators';

import { newDeck, deal } from './lib/cards';
import css from './css/styles.css'

let store = createStore(reducer, undefined, window.devToolsExtension ? window.devToolsExtension() : undefined);



store.dispatch(setupGame());
store.dispatch(setRecord(0, 0));


ReactDOM.render(
  <Provider store={store}>
  <AppContainer />
</Provider>,
  document.getElementById('app')
);
