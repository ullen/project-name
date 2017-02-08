import React, { Component } from 'react';
import './App.css';
import './bulma.css';

import {Todo} from './Todo.js';

class App extends Component {

  render() {
    return (
      <div className="App">
      <div className="columns">
              <div className="column">
                    <Todo buttonColor="red"/>
              </div>
              <div className="column">
                    <Todo buttonColor="green"/>
              </div>
              <div className="column">
                    <Todo buttonColor="blue"/>
              </div>


      </div>

      </div>
    );
  }
}

export default App;