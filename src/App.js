import React, { Component } from 'react';
import './App.css';
import Counter from "./counter.js"

class App extends Component {
  constructor(props){
    super(props);
  }







  render() {
    return (
      <div className="App">
          <h1>Counter</h1>
          <Counter />

      </div>
    );
  }
}

export default App;
