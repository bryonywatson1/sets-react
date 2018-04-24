import React from 'react';
import Info from './info';
import Table from './table';


export default class App extends React.Component {
    render() {
        console.log(this.props.state.cardsOnTable);
        return (
          <div className="app">
            <h1>Hello, world!</h1>
            <Info setsFound={this.props.state.setsFound}/>
            <Table cards={this.props.state.cardsOnTable}/>
          </div>
        );
    }
};
