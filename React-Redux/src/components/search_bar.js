import React, { Component } from 'react';
// use { Component } from 'react' is same as
// const Component = React.Component

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  // Main method
  render() {
    return (
      <div className="search-bar">
        <input onChange={ event => this.setState({ term: event.target.value})} />
      </div>
    )
  }
}

export default SearchBar;
