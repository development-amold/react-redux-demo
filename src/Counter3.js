import React,{Component} from 'react';
import {connect} from 'react-redux';
import {NAME_UPDATE, TEXT_NAME_UPDATE} from './actions';


class Counter3 extends Component{
  render(){
    return(
      <div>
        <input type="text" name='emp_name' ref="emp_name" placeholder="Enter name"/>
        <button type="button" onClick={() => this.props.updateName(this.refs.emp_name.value)}>
          Submit
        </button>
        &nbsp;|&nbsp;
        <input type="text" name='emp_name2' ref="emp_text_name" 
          onChange={(e) => this.props.textInputname(e.target.value)}
          placeholder="Enter name"/>
      </div>
    );
  }
}

export const mapActionToProps = dispatch => {
  return{
    updateName: empName => dispatch({type: NAME_UPDATE, payload: empName}),
    textInputname: textName => dispatch({type: TEXT_NAME_UPDATE, payload: textName})
  }
}

export const mapStateToProps = state => {
  return{
    my_name: state.name
  }
}

export default connect(mapStateToProps,mapActionToProps)(Counter3);
