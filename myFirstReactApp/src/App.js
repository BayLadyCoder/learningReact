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
    ],

    otherState: 'some other value'
  }

  switchNameHandler = () => {
    console.log('Was clicked!');
    //DON'T DO THIS: this.state.persons[0].name = 'Rachada';
    this.setState({
      person: [
        { name: "Rachada", age: 28},
        { name: "Andrew", age: 29},
        { name: "Katniss Everdeen", age: 2},
        { name: "Sammy Sam", age: 99}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi! This is my first React App</h1>
        <p>It is Working!!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
        name={this.state.person[0].name}
        age={this.state.person[0].age}
        click={this.switchNameHandler} />
        <Person
        name={this.state.person[1].name}
        age={this.state.person[1].age} />
        <Person
        name={this.state.person[2].name}
        age={this.state.person[2].age}>My Hobbies: Playing with toys</Person>
        <Person
        name={this.state.person[3].name}
        age={this.state.person[3].age} />
      </div>
    );
  }
}

export default App;
