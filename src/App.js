import React from 'react';
// import logo from './logo.svg';
import './App.css';
import * as emp from './export-demo';
// import {employee, add} from './export-demo';
import exp_default from './export-default-demo';
import Counter from './Counter';
import Counter2 from './Counter2';
import Counter3 from './Counter3';
import CounterApi from './CounterApi';
import SaveCounter from './SaveCounter';

function App() {
  return (
    <div className="App">
      <li>--Comes from * import---FUNC--{emp.add()}--OBJECT-{emp.employee.name+"---AGE-"+emp.employee.age}</li>
      {/* <li>Comes from [employee, add] separate params import ----{employee.name}----{add()}</li> */} 
      <li>--Comes from default params------{exp_default()}</li>
      <hr></hr>
      <p>---COUNTER1---</p>
      <Counter />
      <hr></hr>
      <p>---COUNTER2---</p>
      {/* useful only for showing other components updated value */}
      <Counter2 my_dumb_val={34}/>
      <hr></hr>
      <p>---COUNTER3---</p>
      <Counter3 />
      <hr></hr>
      <SaveCounter />
      <hr></hr>
      <CounterApi />
    </div>
  );
}

export default App;

