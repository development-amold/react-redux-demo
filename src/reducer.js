import initialState from './init-state';
import * as actionsConst from './actions';

const reducer = (state = initialState, action) => {
  // first params is State and 2nd one is Action and it comes from counter component
  switch (action.type) {
    case actionsConst.INCREMENT:
        state.counterHistory.push(state.counter);
      return {...state, counter: state.counter + action.payload};
      //varaible counter key should be same as that of declared states objects key
      //so that it updates global store counters value
    case actionsConst.DECREMENT:
      state.counterHistory.push(state.counter);
      return {...state, counter: state.counter - action.payload};
    case actionsConst.NAME_UPDATE:
      return {...state, name: action.payload};
    case actionsConst.TEXT_NAME_UPDATE:
      return {...state, text_input_name: action.payload};
    case actionsConst.SAVED_COUNTER:
      //IMUTABLE
      let savedCounters = state.savedCountersArr.slice();
      savedCounters.push(state.counter);
      return {...state, savedCountersArr: savedCounters};
    default:
      return state;  
  }
}

export default reducer;