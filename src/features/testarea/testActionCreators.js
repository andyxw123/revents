const { INCREMENT_COUNTER, DECREMENT_COUNTER } = require('./testActionConstants');

//This will be used to call a function inside testReducer.js
//which will increment the counter in the store
export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  };
};