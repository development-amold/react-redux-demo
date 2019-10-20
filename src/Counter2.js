import React from 'react';
import {connect} from 'react-redux';

const Counter2 = my_props => {
  return(
    <div>
      <p>My dummy Val:=><strong>{my_props.my_dumb_val}</strong> </p>
      <p>Current Counter Val:=><strong>{my_props.cnt2}</strong> </p>
      <p>My Updated Name from Button Submit: <strong>{my_props.name2}</strong> </p>
      <p>My Updated Name from text box: <strong>{my_props.textInputName}</strong> </p>
      <p>Saved Counters: <strong>{my_props.savedCounter.join(",")}</strong> </p>
      <p>Counters History: <strong>{my_props.counterHistory.join(",")}</strong> </p>
    </div>
  );
}

const mapStateToProps = my_state => {
  // console.log(my_state)
  return{
    cnt2: my_state.counter,
    name2: my_state.name,
    textInputName: my_state.text_input_name,
    savedCounter: my_state.savedCountersArr,
    counterHistory: my_state.counterHistory
  }
  
}

export default connect(mapStateToProps,null)(Counter2);
