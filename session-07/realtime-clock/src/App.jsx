import React from'react';
import './App.css'
import Clock from './components/Clock';
import FnClock from './components/FnClock';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Real-time Clock</h1>
        <hr />
        <Clock />
        <FnClock />
      </div>
    )
  }
}

export default App;