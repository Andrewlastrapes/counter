import React, { Component } from 'react';
import './App.css';
import Counter from "./counter.js"
import Adder from "./adder.js"
import Display from './display.js'

class App extends Component {
  constructor(props){
    super(props);
  }







  render() {
    return (
      <div className="App">
        <h1>COUNTER</h1>

        <Counter />         


      </div>
    );
  }
}

export default App;
