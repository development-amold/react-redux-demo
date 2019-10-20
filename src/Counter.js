import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
// import {INCREMENT, DECREMENT} from './actions';

class Counter extends Component {
  render(){
    let incVal = 10;
    let decVal = 5;
    return(
      <div>
        <p>Counter::{this.props.cnt}</p>
        <button type="button" onClick={() => this.props.onInc(incVal)}>Increment</button>&nbsp;
        <button type="button" onClick={() => this.props.onDec(decVal)}>Decrement</button>
      </div>
    )
  }
}

const mapActionToProps = my_dispatch => {
  return{
    onInc: val => my_dispatch({type:actions.INCREMENT, payload: val}),
    onDec: val => my_dispatch({type:actions.DECREMENT, payload: val}),
  }
}

const mapStateToProps = my_state => {
  return{
    cnt: my_state.counter
  }
  
}

export default connect(mapStateToProps,mapActionToProps)(Counter);
// first params is State and 2nd one is Action and it goes to reducer
// this is called subscriber