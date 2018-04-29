import React from 'react';
import { InfoContainer } from './info';
import Table from './table';

import { connect } from 'react-redux';

// import { connect } from 'react-redux';


// export class App extends React.Component {
//     render() {
//         console.log(this.props.cardsOnTable)
//         return (
//           <div id="wrapper">
//             <Table cards={this.props.cardsOnTable}/>
//           </div>
//         );
//     }
// };

export class App extends React.Component {
    render() {
        console.log(this.props.cardsOnTable);
        return (
          <div id="wrapper">
            <Table cards={this.props.cardsOnTable}/>
            <InfoContainer/>
          </div>
        );
    }
};
 // score={this.props.state.get('score')

 function mapStateToProps(state) {
     return {
         cardsOnTable: state.get('cardsOnTable'),
     };
 }

 export const AppContainer = connect(mapStateToProps)(App);
