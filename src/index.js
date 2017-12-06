import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAqZGujr3hKG6uGcUe-RqFo6pA94GxFVeg';

// Create a new component, which should produce some HTML
const App = () => {
  return (
    <div>
      <h1>VideoThing</h1>
      <SearchBar />
    </div>
  )
}

// Take this component's generated HTML and render it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
