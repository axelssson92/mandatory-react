import {makeMove, newGame} from '../src/logic';

// test('first move works ok', () => {
//   const initial = newGame();
//   const expected = { state: 'plr2', board: [0,0,1,0,0,0,0,0,0], line: [] };
//   const result = makeMove(initial, 2);
//   expect(result).toEqual(expected);
//   expect(initial).toEqual(newGame()); // testing we didn't mutate entry state
// });

// test('second move', () => {
//   const initial = {state: 'plr2', board: [0, 0, 1, 0, 0, 0, 0, 0, 0], line: []};
//   const expected = { state: 'plr1', board: [0, 0, 1, 0, 0, 2, 0, 0 ,0], line: [] };
//   const result = makeMove(initial, 5);
//   expect(result).toEqual(expected);
//   expect(initial).toEqual({state: 'plr2', board: [0, 0, 1, 0, 0, 0, 0, 0, 0], line: []}); // testing we didn't mutate entry state
// });

// test('check if tile is taken', () => {
//   const initial = {state: 'plr2', board: [0, 0, 1, 0, 0, 0, 0, 0, 0], line: []};
//   const expected  = {state: 'plr2', board: [0, 0, 1, 0, 0, 0, 0, 0, 0], line: []};
//   const result = makeMove(initial, 2);
//   expect(result).toEqual(expected);
//   expect(initial).toEqual({state: 'plr2', board: [0, 0, 1, 0, 0, 0, 0, 0, 0], line: []}); // testing we didn't mutate entry state
// });

// test('win', () => {
//   const initial = { state: 'plr1', board: [1,0,1,0,0,0,0,2,2], line: [] };             //WIN
//   const expected = { state: 'plr1won', board: [1,1,1,0,0,0,0,2,2], line: [] };
//   const result = makeMove(initial, 1);
//   expect(result).toEqual(expected);
// });


test('its a draw', () => {
  const initial = { state: 'plr2', board: [1,2,1,2,1,2,2,1,0], line: [] };                   //DRAW
  const expected = { state: 'draw', board: [1,2,1,2,1,2,2,1,2], line: [] };
  const result = makeMove(initial, 8);
  expect(result).toEqual(expected);
});



// ...more tests to follow here! 
