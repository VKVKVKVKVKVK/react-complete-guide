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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: 'Jenny', age: 25 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 70 },
        { name: 'Jenny', age: 25 }
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working !</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Johnny')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Vlado')}
          changed={this.nameChangedHandler}
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
