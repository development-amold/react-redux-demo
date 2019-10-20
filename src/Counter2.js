import React from 'react';
import {connect} from 'react-redux';

const Counter2 = my_props => {
  return(
    <div>
      <p>My dummy Val:=>{my_props.my_dumb_val}</p>
      <p>Cnt Val:=>{my_props.cnt2}</p>
      <p>My Updated Name from Button Submit: {my_props.name2}</p>
      <p>My Updated Name from text box: {my_props.textInputName}</p>
    </div>
  );
}

const mapStateToProps = my_state => {
  return{
    cnt2: my_state.counter,
    name2: my_state.name,
    textInputName: my_state.text_input_name
  }
  
}

export default connect(mapStateToProps,null)(Counter2);
