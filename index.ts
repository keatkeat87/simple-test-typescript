// import Big, { RoundingMode } from 'big.js';

const mySymbol1 = Symbol('name');
const obj = {
  name: 'Derrick',
  [mySymbol1]: 'value',
};
console.log(obj[mySymbol1] === 'value'); // value
console.log(Object.keys(obj)); // ['name']
console.log(Object.getOwnPropertySymbols(obj)); // [mySymbol1]
console.log(Reflect.ownKeys(obj)); // ['name', mySymbol1]
console.log('dada123');
