import React, {Component} from 'react';
import * as action from './actions';
import { connect } from 'react-redux';

class CounterHistory extends Component{
  render(){
    return(
      <div>
        <button type="button" onClick={() => this.props.savedCounters()}>Record Current Counter</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    savedCntrs: state.savedCountersArr
  }
}

const mapDispatchToProps = my_dispatch => {
  return{
    savedCounters: () => my_dispatch({type: action.SAVED_COUNTER})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterHistory);
