import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>Hi I am React App</h1>
        <p>Working</p>
        <Person name="Bay" age="28" />
        <Person name="Andrew" age="29" />
        <Person name="Katniss" age="2">My Hobbies: Playing with toys</Person>
        <Person name="Sammy" age="10" />
      </div>
    );
  }
}

export default App;
