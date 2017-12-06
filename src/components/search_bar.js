import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input />;
// };

class SearchBar extends Component{
  render() {
    return <input onChange={this.onInputChange} />
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
