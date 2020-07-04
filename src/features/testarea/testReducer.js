import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testActionConstants';
import { createReducer } from '../../app/common/util/reducerUtils';

const initialState = {
  data: 42,
};

const incrementCounter = (state) => {
    return { ...state, data: state.data + 1 };
}

const decrementCounter = (state) => {
    return { ...state, data: state.data - 1 };
}

//Using the createReducer(..) util function here as an
//alternative to the SWITCH statement approach below
export default createReducer(initialState, {
    [INCREMENT_COUNTER]: incrementCounter,
    [DECREMENT_COUNTER]: decrementCounter
})


//Passes some initial state to the store
// const testReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       //Use spread to create a new state object and then
//       //increment it
//       return { ...state, data: state.data + 1 };
//     case DECREMENT_COUNTER:
//       return { ...state, data: state.data - 1 };
//     default:
//       //Always return the state by default as this is the
//       //state of the store
//       return state;
//   }
// };

//export default testReducer;
