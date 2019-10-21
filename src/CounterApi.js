import React, {Component} from 'react';
import { connect } from 'react-redux';
import {EMPLOYEE_API} from './actions';
import axios from 'axios';

class CounterApi extends Component{
  render(){
    return(
      <div>
        <button type="button" onClick={() => this.props.getEmp()}>Get Employee Data</button>
        <p>{this.props.employee != null ? JSON.stringify(this.props.employee,null,10): ""}</p>
      </div>
    )
  }
}

//middleware
const getEmpActionCreator = () => {
  return (actionDispatch, getState) => {
    let my_counter = getState().counter + 100;
    axios.get(`https://randomuser.me/api/`)
    .then((res) => {
        actionDispatch(
          {
            type: EMPLOYEE_API,
            payload: {httpResp: res, cnt: my_counter}
          }          
        )
      }
    )
    .catch((err) => {
      console.log(err);
      }
    );

  }
}

export const mapStateToProps = state => {
  return{
    employee: state.employees
  }


}

export const mapActionToProps = my_dispatch => {
  return{
    getEmp: () => my_dispatch(getEmpActionCreator())
  }
}

export default connect(mapStateToProps,mapActionToProps)(CounterApi);
