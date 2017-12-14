import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />

        <h5>
          Value of the input: {this.state.term}
        </h5>
      </div>
    );
  }
}

export default SearchBar;
