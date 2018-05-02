import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
    person: [
      { name: "Bay", age: 28},
      { name: "Andrew", age: 29},
      { name: "Katniss", age: 2},
      { name: "Sammy", age: 10}
    ]
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi I am React App</h1>
        <p>Working</p>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age} />
        <Person name={this.state.person[2].name} age={this.state.person[2].age}>My Hobbies: Playing with toys</Person>
        <Person name={this.state.person[3].name} age={this.state.person[3].age} />
      </div>
    );
  }
}

export default App;
