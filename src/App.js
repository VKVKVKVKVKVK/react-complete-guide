import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'John', age: 27 },
      { name: 'Clara', age: 24 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working !</p>
        <button>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >I like video-games</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >I like painting</Person>
      </div>
    );
  }
}

export default App;
