import React from 'react';

import {makeMove, newGame} from '../logic';

import Message from './message';
import Tile from './tile';

/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.

Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.

The user should also be able to reset the game.

The App component should render an outer element with a `container` CSS class,
and all tiles in an element with a `board` CSS class.
*/

export default class App extends React.Component {

  state = newGame();

  handleClick = (e) => {  
    const tile = e.target.getAttribute( 'data-value' );
    this.setState( makeMove( this.state, tile ) )
  };

  handleReset = () => {        
    this.setState( newGame() )
  };
  render(){
    return (
      <div> 
         <Message state={this.state.state}/> 
      <div className = "board"> 
        { this.state.board.map(( val, tile ) => {    
          return (
            <Tile pos = { tile } piece = { val } key = { tile } handleClick = { this.handleClick }/> 
          )
        })}
      </div>
      <button onClick= { this.handleReset }> Reset game </button>
    </div>
    );
  }
}
