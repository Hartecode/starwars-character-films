import React, { Component } from 'react';

import Main from './components/main/main';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      character: null
    }
  }

 
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
