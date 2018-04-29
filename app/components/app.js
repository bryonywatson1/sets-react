import React from 'react';
import Info from './info';
import Table from './table';


export default class App extends React.Component {
    render() {
        console.log(this.props.state.get('cardsOnTable'));
        return (
          <div id="wrapper">
            <Table cards={this.props.state.get('cardsOnTable')}/>
          </div>
        );
    }
};
